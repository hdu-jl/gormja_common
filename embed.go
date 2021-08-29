package gormja_common

import (
	_ "embed"
	"reflect"
)

//go:embed bind.js
var BindJS = defaultValue

const defaultValue = "stub"

func GetBindJS() string {
	if reflect.DeepEqual(BindJS, defaultValue) {
		panic("invalid bind js")
	}
	return BindJS
}
