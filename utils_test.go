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
