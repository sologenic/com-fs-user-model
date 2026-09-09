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
		// Basic error handling
		{"nil user", nil, "", true},
		{"nil inner user", &User{User: nil}, "", true},
		{"no kyc details", &User{User: &UserDetails{KYCDetails: nil}}, "", false},
		{"empty country code", &User{User: &UserDetails{KYCDetails: &UserKYCDetails{CountryCode: ""}}}, "", false},

		// Valid alpha-3 to alpha-2
		{"valid alpha-3 USA", &User{User: &UserDetails{KYCDetails: &UserKYCDetails{CountryCode: "USA"}}}, "US", false},
		{"valid alpha-3 RUS", &User{User: &UserDetails{KYCDetails: &UserKYCDetails{CountryCode: "RUS"}}}, "RU", false},
		{"valid alpha-3 GBR", &User{User: &UserDetails{KYCDetails: &UserKYCDetails{CountryCode: "GBR"}}}, "GB", false},
		{"valid alpha-3 lower usa", &User{User: &UserDetails{KYCDetails: &UserKYCDetails{CountryCode: "usa"}}}, "US", false},
		{"valid alpha-3 mixed case", &User{User: &UserDetails{KYCDetails: &UserKYCDetails{CountryCode: "uSa"}}}, "US", false},

		// Valid alpha-2 (should return as is but uppercase)
		{"valid alpha-2 US", &User{User: &UserDetails{KYCDetails: &UserKYCDetails{CountryCode: "US"}}}, "US", false},
		{"valid alpha-2 RU", &User{User: &UserDetails{KYCDetails: &UserKYCDetails{CountryCode: "RU"}}}, "RU", false},
		{"valid alpha-2 lower gb", &User{User: &UserDetails{KYCDetails: &UserKYCDetails{CountryCode: "gb"}}}, "GB", false},

		// White space and padding edges
		{"alpha-3 with spaces", &User{User: &UserDetails{KYCDetails: &UserKYCDetails{CountryCode: " USA "}}}, "US", false},
		{"alpha-2 with spaces", &User{User: &UserDetails{KYCDetails: &UserKYCDetails{CountryCode: " gb "}}}, "GB", false},
		{"spaces only", &User{User: &UserDetails{KYCDetails: &UserKYCDetails{CountryCode: "   "}}}, "", false},

		// Invalid inputs
		{"invalid alpha-3 XXX", &User{User: &UserDetails{KYCDetails: &UserKYCDetails{CountryCode: "XXX"}}}, "", false},
		{"invalid alpha-2 XX", &User{User: &UserDetails{KYCDetails: &UserKYCDetails{CountryCode: "XX"}}}, "", false},
		{"invalid length 1", &User{User: &UserDetails{KYCDetails: &UserKYCDetails{CountryCode: "X"}}}, "", false},
		{"invalid length 4", &User{User: &UserDetails{KYCDetails: &UserKYCDetails{CountryCode: "AAAA"}}}, "", false},
		{"numeric code", &User{User: &UserDetails{KYCDetails: &UserKYCDetails{CountryCode: "123"}}}, "", false},
		{"special chars", &User{User: &UserDetails{KYCDetails: &UserKYCDetails{CountryCode: "@#"}}}, "", false},
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
		// Basic error handling
		{"nil user", nil, "", true},
		{"nil inner user", &User{User: nil}, "", true},
		{"no kyc details", &User{User: &UserDetails{KYCDetails: nil}}, "", false},
		{"empty country code", &User{User: &UserDetails{KYCDetails: &UserKYCDetails{CountryCode: ""}}}, "", false},

		// Valid alpha-2 to alpha-3
		{"valid alpha-2 US", &User{User: &UserDetails{KYCDetails: &UserKYCDetails{CountryCode: "US"}}}, "USA", false},
		{"valid alpha-2 RU", &User{User: &UserDetails{KYCDetails: &UserKYCDetails{CountryCode: "RU"}}}, "RUS", false},
		{"valid alpha-2 GB", &User{User: &UserDetails{KYCDetails: &UserKYCDetails{CountryCode: "GB"}}}, "GBR", false},
		{"valid alpha-2 lower us", &User{User: &UserDetails{KYCDetails: &UserKYCDetails{CountryCode: "us"}}}, "USA", false},
		{"valid alpha-2 mixed case", &User{User: &UserDetails{KYCDetails: &UserKYCDetails{CountryCode: "uS"}}}, "USA", false},

		// Valid alpha-3 (should return as is but uppercase)
		{"valid alpha-3 USA", &User{User: &UserDetails{KYCDetails: &UserKYCDetails{CountryCode: "USA"}}}, "USA", false},
		{"valid alpha-3 RUS", &User{User: &UserDetails{KYCDetails: &UserKYCDetails{CountryCode: "RUS"}}}, "RUS", false},
		{"valid alpha-3 lower gbr", &User{User: &UserDetails{KYCDetails: &UserKYCDetails{CountryCode: "gbr"}}}, "GBR", false},

		// White space and padding edges
		{"alpha-2 with spaces", &User{User: &UserDetails{KYCDetails: &UserKYCDetails{CountryCode: " US "}}}, "USA", false},
		{"alpha-3 with spaces", &User{User: &UserDetails{KYCDetails: &UserKYCDetails{CountryCode: " gbr "}}}, "GBR", false},
		{"spaces only", &User{User: &UserDetails{KYCDetails: &UserKYCDetails{CountryCode: "   "}}}, "", false},

		// Invalid inputs
		{"invalid alpha-2 XX", &User{User: &UserDetails{KYCDetails: &UserKYCDetails{CountryCode: "XX"}}}, "", false},
		{"invalid alpha-3 XXX", &User{User: &UserDetails{KYCDetails: &UserKYCDetails{CountryCode: "XXX"}}}, "", false},
		{"invalid length 1", &User{User: &UserDetails{KYCDetails: &UserKYCDetails{CountryCode: "X"}}}, "", false},
		{"invalid length 4", &User{User: &UserDetails{KYCDetails: &UserKYCDetails{CountryCode: "ABCD"}}}, "", false},
		{"numeric code", &User{User: &UserDetails{KYCDetails: &UserKYCDetails{CountryCode: "12"}}}, "", false},
		{"special chars", &User{User: &UserDetails{KYCDetails: &UserKYCDetails{CountryCode: "@#"}}}, "", false},
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
		// Basic error handling
		{"nil user", nil, "", true},
		{"nil inner user", &User{User: nil}, "", true},
		{"no kyc details", &User{User: &UserDetails{KYCDetails: nil}}, "", false},
		{"empty string", &User{User: &UserDetails{KYCDetails: &UserKYCDetails{AddressSubdivision: ""}}}, "", false},
		{"string with only spaces", &User{User: &UserDetails{KYCDetails: &UserKYCDetails{AddressSubdivision: "   "}}}, "", false},

		// Valid 2-letter codes
		{"valid 2-letter code uppercase CA", &User{User: &UserDetails{KYCDetails: &UserKYCDetails{AddressSubdivision: "CA"}}}, "CA", false},
		{"valid 2-letter code uppercase NY", &User{User: &UserDetails{KYCDetails: &UserKYCDetails{AddressSubdivision: "NY"}}}, "NY", false},
		{"valid 2-letter code lowercase ca", &User{User: &UserDetails{KYCDetails: &UserKYCDetails{AddressSubdivision: "ca"}}}, "CA", false},
		{"valid 2-letter code lowercase ny", &User{User: &UserDetails{KYCDetails: &UserKYCDetails{AddressSubdivision: "ny"}}}, "NY", false},
		{"valid 2-letter code mixed nY", &User{User: &UserDetails{KYCDetails: &UserKYCDetails{AddressSubdivision: "nY"}}}, "NY", false},
		{"2-letter code with spaces", &User{User: &UserDetails{KYCDetails: &UserKYCDetails{AddressSubdivision: " TX "}}}, "TX", false},

		// Invalid 2-letter codes
		{"invalid 2-letter code XX", &User{User: &UserDetails{KYCDetails: &UserKYCDetails{AddressSubdivision: "XX"}}}, "", false},
		{"invalid 2-letter code 12", &User{User: &UserDetails{KYCDetails: &UserKYCDetails{AddressSubdivision: "12"}}}, "", false},
		{"invalid 2-letter code @#", &User{User: &UserDetails{KYCDetails: &UserKYCDetails{AddressSubdivision: "@#"}}}, "", false},

		// Valid full names
		{"valid full name uppercase", &User{User: &UserDetails{KYCDetails: &UserKYCDetails{AddressSubdivision: "CALIFORNIA"}}}, "CA", false},
		{"valid full name mixed case", &User{User: &UserDetails{KYCDetails: &UserKYCDetails{AddressSubdivision: "New York"}}}, "NY", false},
		{"valid full name lowercase", &User{User: &UserDetails{KYCDetails: &UserKYCDetails{AddressSubdivision: "texas"}}}, "TX", false},
		{"full name with surrounding spaces", &User{User: &UserDetails{KYCDetails: &UserKYCDetails{AddressSubdivision: "  florida  "}}}, "FL", false},

		// Invalid full names / formatting
		{"invalid full name Ontario", &User{User: &UserDetails{KYCDetails: &UserKYCDetails{AddressSubdivision: "Ontario"}}}, "", false},
		{"invalid full name typo", &User{User: &UserDetails{KYCDetails: &UserKYCDetails{AddressSubdivision: "Calyfornia"}}}, "", false},
		{"internal spaces not trimmed", &User{User: &UserDetails{KYCDetails: &UserKYCDetails{AddressSubdivision: "New  York"}}}, "", false},
		{"punctuation marks", &User{User: &UserDetails{KYCDetails: &UserKYCDetails{AddressSubdivision: "New York."}}}, "", false},

		// Territories and Special zones
		{"valid territory PR uppercase", &User{User: &UserDetails{KYCDetails: &UserKYCDetails{AddressSubdivision: "PUERTO RICO"}}}, "PR", false},
		{"valid territory pr lowercase", &User{User: &UserDetails{KYCDetails: &UserKYCDetails{AddressSubdivision: "puerto rico"}}}, "PR", false},
		{"valid historical territory", &User{User: &UserDetails{KYCDetails: &UserKYCDetails{AddressSubdivision: "PANAMA CANAL ZONE"}}}, "CZ", false},
		{"valid territory GU", &User{User: &UserDetails{KYCDetails: &UserKYCDetails{AddressSubdivision: "GU"}}}, "GU", false},
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
	if name, exists := usSubdivisionUSPSAlpha2ToName["NY"]; !exists || name != "NEW YORK" {
		t.Errorf("Expected 'NY' to map to 'NEW YORK', got %q", name)
	}
	if name, exists := usSubdivisionUSPSAlpha2ToName["PR"]; !exists || name != "PUERTO RICO" {
		t.Errorf("Expected 'PR' to map to 'PUERTO RICO', got %q", name)
	}
}

func TestGetUSSocialSecurityNumber(t *testing.T) {
	tests := []struct {
		name        string
		user        *User
		want        string
		expectPanic bool
	}{
		// Basic error handling
		{"nil user", nil, "", true},
		{"nil inner user", &User{User: nil}, "", true},
		{"no kyc details", &User{User: &UserDetails{KYCDetails: nil}}, "", false},
		{"empty string", &User{User: &UserDetails{KYCDetails: &UserKYCDetails{SocialSecurityNumber: ""}}}, "", false},
		{"spaces only", &User{User: &UserDetails{KYCDetails: &UserKYCDetails{SocialSecurityNumber: "   "}}}, "", false},

		// Valid SSN extraction
		{"valid SSN 1", &User{User: &UserDetails{KYCDetails: &UserKYCDetails{SocialSecurityNumber: "272-17-3891"}}}, "272-17-3891", false},
		{"valid SSN 2", &User{User: &UserDetails{KYCDetails: &UserKYCDetails{SocialSecurityNumber: "899-99-9999"}}}, "899-99-9999", false},
		{"valid SSN with surrounding spaces", &User{User: &UserDetails{KYCDetails: &UserKYCDetails{SocialSecurityNumber: "  272-17-3891  "}}}, "272-17-3891", false},

		// Invalid SSN extraction (should return empty string)
		{"invalid SSN (no hyphens)", &User{User: &UserDetails{KYCDetails: &UserKYCDetails{SocialSecurityNumber: "272173891"}}}, "", false},
		{"invalid SSN (bad area 900)", &User{User: &UserDetails{KYCDetails: &UserKYCDetails{SocialSecurityNumber: "900-45-6789"}}}, "", false},
		{"invalid SSN (sequential Alpaca)", &User{User: &UserDetails{KYCDetails: &UserKYCDetails{SocialSecurityNumber: "123-45-6789"}}}, "", false},
		{"invalid SSN (all same)", &User{User: &UserDetails{KYCDetails: &UserKYCDetails{SocialSecurityNumber: "111-11-1111"}}}, "", false},
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
		// 1. Perfectly Valid cases
		{"valid standard SSN", "272-17-3891", true},
		{"valid high area code", "899-99-9999", true},
		{"valid minimum non-zero components", "001-01-0001", true},
		{"valid pseudo-random", "583-29-1048", true},
		{"valid starts with 0", "014-23-4567", true},

		// 2. Format errors (Missing/Misplaced hyphens)
		{"missing all hyphens", "272173891", false},
		{"hyphens in wrong place 1", "27-217-3891", false},
		{"hyphens in wrong place 2", "272-1-73891", false},
		{"only one hyphen", "272-173891", false},
		{"only one hyphen other side", "27217-3891", false},
		{"three hyphens", "27-2-17-3891", false},

		// 3. Length / Chars errors
		{"too long with hyphens", "272-17-38910", false},
		{"too short with hyphens", "27-17-3891", false},
		{"too short end", "272-17-389", false},
		{"contains letters", "ABC-17-3891", false},
		{"contains special chars", "272-*7-3891", false},
		{"padded with spaces left", " 272-17-3891", false},
		{"padded with spaces right", "272-17-3891 ", false},
		{"internal spaces", "272 17 3891", false},

		// 4. SSA Rule Checks (Area)
		{"invalid area 000", "000-17-3891", false},
		{"invalid area 666", "666-17-3891", false},
		{"invalid area 900", "900-17-3891", false},
		{"invalid area 999", "999-17-3891", false},

		// 5. SSA Rule Checks (Group)
		{"invalid group 00", "272-00-3891", false},

		// 6. SSA Rule Checks (Serial)
		{"invalid serial 0000", "272-17-0000", false},

		// 7. Same Digits Rule
		{"all ones", "111-11-1111", false},
		{"all twos", "222-22-2222", false},
		{"all nines", "999-99-9999", false},
		{"all zeros (also triggers 000 rule)", "000-00-0000", false},

		// 8. Alpaca Rules (Sequential increasing/decreasing)
		{"increasing sequential digits 1-9", "123-45-6789", false},
		{"decreasing sequential digits 9-1", "987-65-4321", false},
		{"increasing digits from 0", "012-34-5678", false},
		{"decreasing digits from 8", "876-54-3210", false},

		// 9. Edge Cases & Perverted Data
		{"empty string", "", false},
		{"just hyphens", "--", false},
		{"correct length but letters", "aaa-bb-cccc", false},
		{"mixed valid digits and letters", "272-1A-3891", false},
		{"valid ssn inside a longer string", "foo272-17-3891bar", false},
		{"almost all same digits", "111-11-1112", true}, // Should pass, only 1 digit differs
		{"almost sequential", "123-45-6780", true},      // Not fully sequential
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			got := IsValidUSSocialSecurityNumber(tt.ssn)
			if got != tt.want {
				t.Errorf("IsValidUSSocialSecurityNumber(%q) = %v, want %v", tt.ssn, got, tt.want)
			}
		})
	}
}
