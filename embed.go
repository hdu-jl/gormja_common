package gormja_common

import (
	_ "embed"
)

//go:embed bind.js
var BindJS string

func GetBindJS() string {
	if BindJS == "" {
		panic("invalid bind js")
	}
	return BindJS
}
