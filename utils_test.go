package user

import (
	"testing"
)

func TestGetCountryAlpha2(t *testing.T) {
	tests := []struct {
		name        string
		user        *User
		want        string
		expectPanic bool
	}{
		{"nil user", nil, "", true},
		{"nil inner user", &User{User: nil}, "", true},

		{"no kyc details", &User{User: &UserDetails{KYCDetails: nil}}, "", false},
		{"alpha-3 country", &User{User: &UserDetails{
			KYCDetails: &UserKYCDetails{CountryCode: "RUS"},
		}}, "RU", false},
		{"alpha-2 country", &User{User: &UserDetails{
			KYCDetails: &UserKYCDetails{CountryCode: "US"},
		}}, "US", false},

		{"lowercase with spaces", &User{User: &UserDetails{
			KYCDetails: &UserKYCDetails{CountryCode: " gb "},
		}}, "GB", false},
		{"invalid alpha-3", &User{User: &UserDetails{
			KYCDetails: &UserKYCDetails{CountryCode: "XYZ"},
		}}, "", false},
		{"invalid length", &User{User: &UserDetails{
			KYCDetails: &UserKYCDetails{CountryCode: "X"},
		}}, "", false},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			defer func() {
				r := recover()
				if tt.expectPanic && r == nil {
					t.Errorf("expected panic, but got none")
				}
				if !tt.expectPanic && r != nil {
					t.Errorf("unexpected panic: %v", r)
				}
			}()

			got := GetCountryAlpha2(tt.user)

			if !tt.expectPanic && got != tt.want {
				t.Errorf("GetCountryAlpha2() = %q, want %q", got, tt.want)
			}
		})
	}
}

func TestGetCountryAlpha3(t *testing.T) {
	tests := []struct {
		name        string
		user        *User
		want        string
		expectPanic bool
	}{
		{"nil user", nil, "", true},
		{"nil inner user", &User{User: nil}, "", true},

		{"no kyc details", &User{User: &UserDetails{KYCDetails: nil}}, "", false},
		{"alpha-2 country", &User{User: &UserDetails{
			KYCDetails: &UserKYCDetails{CountryCode: "RU"},
		}}, "RUS", false},
		{"alpha-3 country", &User{User: &UserDetails{
			KYCDetails: &UserKYCDetails{CountryCode: "USA"},
		}}, "USA", false},

		{"lowercase with spaces", &User{User: &UserDetails{
			KYCDetails: &UserKYCDetails{CountryCode: " gbr "},
		}}, "GBR", false},
		{"invalid alpha-2", &User{User: &UserDetails{
			KYCDetails: &UserKYCDetails{CountryCode: "XX"},
		}}, "", false},
		{"invalid length", &User{User: &UserDetails{
			KYCDetails: &UserKYCDetails{CountryCode: "ABCD"},
		}}, "", false},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			defer func() {
				r := recover()
				if tt.expectPanic && r == nil {
					t.Errorf("expected panic, but got none")
				}
				if !tt.expectPanic && r != nil {
					t.Errorf("unexpected panic: %v", r)
				}
			}()

			got := GetCountryAlpha3(tt.user)

			if !tt.expectPanic && got != tt.want {
				t.Errorf("GetCountryAlpha3() = %q, want %q", got, tt.want)
			}
		})
	}
}

func TestGetUSSubdivisionUSPSAlpha2(t *testing.T) {
	tests := []struct {
		name        string
		user        *User
		want        string
		expectPanic bool
	}{
		{"nil user", nil, "", true},
		{"nil inner user", &User{User: nil}, "", true},

		{"no kyc details", &User{User: &UserDetails{KYCDetails: nil}}, "", false},

		{"valid 2-letter code uppercase", &User{User: &UserDetails{
			KYCDetails: &UserKYCDetails{AddressSubdivision: "CA"},
		}}, "CA", false},
		{"valid 2-letter code lowercase", &User{User: &UserDetails{
			KYCDetails: &UserKYCDetails{AddressSubdivision: "ny"},
		}}, "NY", false},
		{"2-letter code with spaces", &User{User: &UserDetails{
			KYCDetails: &UserKYCDetails{AddressSubdivision: " TX "},
		}}, "TX", false},
		{"invalid 2-letter code", &User{User: &UserDetails{
			KYCDetails: &UserKYCDetails{AddressSubdivision: "XX"},
		}}, "", false},

		{"valid full name uppercase", &User{User: &UserDetails{
			KYCDetails: &UserKYCDetails{AddressSubdivision: "CALIFORNIA"},
		}}, "CA", false},
		{"valid full name mixed case", &User{User: &UserDetails{
			KYCDetails: &UserKYCDetails{AddressSubdivision: "New York"},
		}}, "NY", false},
		{"full name with spaces", &User{User: &UserDetails{
			KYCDetails: &UserKYCDetails{AddressSubdivision: "  florida  "},
		}}, "FL", false},
		{"invalid full name", &User{User: &UserDetails{
			KYCDetails: &UserKYCDetails{AddressSubdivision: "Ontario"},
		}}, "", false},

		{"valid territory", &User{User: &UserDetails{
			KYCDetails: &UserKYCDetails{AddressSubdivision: "PUERTO RICO"},
		}}, "PR", false},
		{"valid historical territory", &User{User: &UserDetails{
			KYCDetails: &UserKYCDetails{AddressSubdivision: "PANAMA CANAL ZONE"},
		}}, "CZ", false},

		{"empty string", &User{User: &UserDetails{
			KYCDetails: &UserKYCDetails{AddressSubdivision: ""},
		}}, "", false},
		{"string with only spaces", &User{User: &UserDetails{
			KYCDetails: &UserKYCDetails{AddressSubdivision: "   "},
		}}, "", false},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			defer func() {
				r := recover()
				if tt.expectPanic && r == nil {
					t.Errorf("expected panic, but got none")
				}
				if !tt.expectPanic && r != nil {
					t.Errorf("unexpected panic: %v", r)
				}
			}()

			got := GetUSSubdivisionUSPSAlpha2(tt.user)

			if !tt.expectPanic && got != tt.want {
				t.Errorf("GetUSSubdivisionUSPSAlpha2() = %q, want %q", got, tt.want)
			}
		})
	}
}

func TestUSSubdivisionMapsInit(t *testing.T) {
	if len(usSubdivisionNameToUSPSAlpha2) != len(usSubdivisionUSPSAlpha2ToName) {
		t.Errorf("Map sizes do not match: NameToCode has %d, CodeToName has %d",
			len(usSubdivisionNameToUSPSAlpha2), len(usSubdivisionUSPSAlpha2ToName))
	}

	if name, exists := usSubdivisionUSPSAlpha2ToName["CA"]; !exists || name != "CALIFORNIA" {
		t.Errorf("Expected 'CA' to map to 'CALIFORNIA', got %q", name)
	}
}

func TestGetUSSocialSecurityNumber(t *testing.T) {
	tests := []struct {
		name        string
		user        *User
		want        string
		expectPanic bool
	}{
		{"nil user", nil, "", true},
		{"nil inner user", &User{User: nil}, "", true},

		{"no kyc details", &User{User: &UserDetails{KYCDetails: nil}}, "", false},

		{"empty string", &User{User: &UserDetails{
			KYCDetails: &UserKYCDetails{SocialSecurityNumber: ""},
		}}, "", false},
		{"spaces only", &User{User: &UserDetails{
			KYCDetails: &UserKYCDetails{SocialSecurityNumber: "   "},
		}}, "", false},

		{"valid SSN", &User{User: &UserDetails{
			KYCDetails: &UserKYCDetails{SocialSecurityNumber: "123-45-6789"},
		}}, "123-45-6789", false},
		{"valid SSN with surrounding spaces", &User{User: &UserDetails{
			KYCDetails: &UserKYCDetails{SocialSecurityNumber: "  123-45-6789  "},
		}}, "123-45-6789", false},

		{"invalid SSN (no hyphens)", &User{User: &UserDetails{
			KYCDetails: &UserKYCDetails{SocialSecurityNumber: "123456789"},
		}}, "", false},
		{"invalid SSN (bad area)", &User{User: &UserDetails{
			KYCDetails: &UserKYCDetails{SocialSecurityNumber: "900-45-6789"},
		}}, "", false},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			defer func() {
				r := recover()
				if tt.expectPanic && r == nil {
					t.Errorf("expected panic, but got none")
				}
				if !tt.expectPanic && r != nil {
					t.Errorf("unexpected panic: %v", r)
				}
			}()

			got := GetUSSocialSecurityNumber(tt.user)

			if !tt.expectPanic && got != tt.want {
				t.Errorf("GetUSSocialSecurityNumber() = %q, want %q", got, tt.want)
			}
		})
	}
}

func TestIsValidUSSocialSecurityNumber(t *testing.T) {
	tests := []struct {
		name string
		ssn  string
		want bool
	}{
		// Valid cases
		{"valid standard SSN", "123-45-6789", true},
		{"valid high area code", "899-99-9999", true},
		{"valid", "272-17-3891", true},

		// Missing or misplaced hyphens (strict format check)
		{"missing hyphens", "123456789", false},
		{"hyphens in wrong place", "12-345-6789", false},
		{"only one hyphen", "123-456789", false},

		// Invalid Length / Chars
		{"too long", "123-45-67890", false},
		{"too short", "12-45-6789", false},
		{"contains letters", "ABC-45-6789", false},

		// SSA Rule checks
		{"invalid area 000", "000-45-6789", false},
		{"invalid area 666", "666-45-6789", false},
		{"invalid area 900", "900-45-6789", false},
		{"invalid area 999", "999-45-6789", false},
		{"invalid group 00", "123-00-6789", false},
		{"invalid serial 0000", "123-45-0000", false},
		{"invalid", "926-49-1738", false},
		{"invalid", "272-17-389", false},

		// Invalid format
		{"cannot have all the same digits", "111-11-1111", false},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			got := IsValidUSSocialSecurityNumber(tt.ssn)
			if got != tt.want {
				t.Errorf("IsValidUSSocialSecurityNumber() = %v, want %v", got, tt.want)
			}
		})
	}
}
