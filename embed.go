package gormja_common

import (
	_ "embed"
)

//go:embed bind.js
var BindJS string

//go:embed data_source.js
var DataSourceJS string

func GetBindJS() string {
	if BindJS == "" {
		panic("invalid bind js")
	}
	return BindJS
}

func GetDataSourceJS() string {
	if DataSourceJS == "" {
		panic("invalid datasource js")
	}
	return DataSourceJS
}
