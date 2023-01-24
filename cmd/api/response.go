package main

import "time"

type item struct {
	Title       string    `json:"title"`
	Source      string    `json:"source"`
	SourceURL   string    `json:"source_url"`
	Link        string    `json:"link"`
	PublishDate time.Time `json:"publish_date"`
	Description string    `json:"description"`
}

type response struct {
	Items []item `json:"items"`
}
