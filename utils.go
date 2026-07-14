package user

import (
	"strings"

	"github.com/flaticols/countrycodes"
)

// GetCountryAlpha2 returns the user's KYC country as ISO alpha-2, or "" if unset/invalid
// Do not use user.User.KYCDetails.CountryCode directly
func GetCountryAlpha2(user *User) string {
	if user.User.KYCDetails == nil {
		return ""
	}
	return convertToAlpha2(user.User.KYCDetails.CountryCode)
}

// GetCountryAlpha3 returns the user's KYC country as ISO alpha-3, or "" if unset/invalid
// Do not use user.User.KYCDetails.CountryCode directly
func GetCountryAlpha3(user *User) string {
	if user.User.KYCDetails == nil {
		return ""
	}
	return convertToAlpha3(user.User.KYCDetails.CountryCode)
}

func convertToAlpha2(code string) string {
	code = strings.TrimSpace(code)
	if code == "" {
		return ""
	}
	upper := strings.ToUpper(code)
	if len(upper) == 2 && countrycodes.IsValidAlpha2(upper) {
		return upper
	}
	if len(upper) == 3 {
		if alpha2, ok := countrycodes.Alpha3ToAlpha2(upper); ok {
			return alpha2
		}
	}
	return ""
}

func convertToAlpha3(code string) string {
	code = strings.TrimSpace(code)
	if code == "" {
		return ""
	}
	upper := strings.ToUpper(code)
	if len(upper) == 3 && countrycodes.IsValidAlpha3(upper) {
		return upper
	}
	if len(upper) == 2 {
		if alpha3, ok := countrycodes.Alpha2ToAlpha3(upper); ok {
			return alpha3
		}
	}
	return ""
}
