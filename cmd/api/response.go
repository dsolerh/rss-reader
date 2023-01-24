package main

import (
	"encoding/json"
	"time"
)

type item struct {
	Title       string    `json:"title"`
	Source      string    `json:"source"`
	SourceURL   string    `json:"source_url"`
	Link        string    `json:"link"`
	PublishDate time.Time `json:"publish_date"`
	Description string    `json:"description"`
}

func (i item) MarshalJSON() ([]byte, error) {
	var dTime time.Time
	var dateStr string
	if i.PublishDate != dTime {
		dateStr = i.PublishDate.Format("2006-01-02T15:04:05Z")
	}

	type aItem item
	return json.Marshal(struct {
		aItem
		PublishDate string `json:"publish_date"`
	}{
		aItem:       (aItem)(i),
		PublishDate: dateStr,
	})
}

type response struct {
	Items []item `json:"items"`
}
