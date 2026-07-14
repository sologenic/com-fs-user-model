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

func GetUSSubdivisionUSPSAlpha2(user *User) string {
	if user.User.KYCDetails == nil {
		return ""
	}

	value := strings.TrimSpace(user.User.KYCDetails.AddressSubdivision)
	if value == "" {
		return ""
	}

	upper := strings.ToUpper(value)

	if len(upper) == 2 {
		if _, exists := usSubdivisionUSPSAlpha2ToName[upper]; exists {
			return upper
		}
	}

	if code, exists := usSubdivisionNameToUSPSAlpha2[upper]; exists {
		return code
	}

	return ""
}

var usSubdivisionNameToUSPSAlpha2 = map[string]string{
	"ALABAMA":                                "AL",
	"ALASKA":                                 "AK",
	"ARIZONA":                                "AZ",
	"ARKANSAS":                               "AR",
	"CALIFORNIA":                             "CA",
	"COLORADO":                               "CO",
	"CONNECTICUT":                            "CT",
	"DELAWARE":                               "DE",
	"DISTRICT OF COLUMBIA":                   "DC",
	"FLORIDA":                                "FL",
	"GEORGIA":                                "GA",
	"HAWAII":                                 "HI",
	"IDAHO":                                  "ID",
	"ILLINOIS":                               "IL",
	"INDIANA":                                "IN",
	"IOWA":                                   "IA",
	"KANSAS":                                 "KS",
	"KENTUCKY":                               "KY",
	"LOUISIANA":                              "LA",
	"MAINE":                                  "ME",
	"MARYLAND":                               "MD",
	"MASSACHUSETTS":                          "MA",
	"MICHIGAN":                               "MI",
	"MINNESOTA":                              "MN",
	"MISSISSIPPI":                            "MS",
	"MISSOURI":                               "MO",
	"MONTANA":                                "MT",
	"NEBRASKA":                               "NE",
	"NEVADA":                                 "NV",
	"NEW HAMPSHIRE":                          "NH",
	"NEW JERSEY":                             "NJ",
	"NEW MEXICO":                             "NM",
	"NEW YORK":                               "NY",
	"NORTH CAROLINA":                         "NC",
	"NORTH DAKOTA":                           "ND",
	"OHIO":                                   "OH",
	"OKLAHOMA":                               "OK",
	"OREGON":                                 "OR",
	"PENNSYLVANIA":                           "PA",
	"RHODE ISLAND":                           "RI",
	"SOUTH CAROLINA":                         "SC",
	"SOUTH DAKOTA":                           "SD",
	"TENNESSEE":                              "TN",
	"TEXAS":                                  "TX",
	"UTAH":                                   "UT",
	"VERMONT":                                "VT",
	"VIRGINIA":                               "VA",
	"WASHINGTON":                             "WA",
	"WEST VIRGINIA":                          "WV",
	"WISCONSIN":                              "WI",
	"WYOMING":                                "WY",
	"AMERICAN SAMOA":                         "AS",
	"GUAM":                                   "GU",
	"NORTHERN MARIANA ISLANDS":               "MP",
	"PUERTO RICO":                            "PR",
	"U.S. VIRGIN ISLANDS":                    "VI",
	"U.S. MINOR OUTLYING ISLANDS":            "UM",
	"MARSHALL ISLANDS":                       "MH",
	"MICRONESIA":                             "FM",
	"PALAU":                                  "PW",
	"U.S. ARMED FORCES – AMERICAS":           "AA",
	"U.S. ARMED FORCES – EUROPE":             "AE",
	"U.S. ARMED FORCES – PACIFIC":            "AP",
	"PANAMA CANAL ZONE":                      "CZ",
	"PHILIPPINE ISLANDS":                     "PI",
	"TRUST TERRITORY OF THE PACIFIC ISLANDS": "TT",
}

var usSubdivisionUSPSAlpha2ToName = map[string]string{}

func init() {
	for name, code := range usSubdivisionNameToUSPSAlpha2 {
		usSubdivisionUSPSAlpha2ToName[code] = name
	}
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
