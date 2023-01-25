package main

import (
	"encoding/json"
	"log"
	"net/http"

	reader "github.com/dsolerh/go-rss-reader"
)

func feedReader(w http.ResponseWriter, r *http.Request) {
	urls := r.URL.Query()["urls"]

	items := reader.Parse(urls...)

	resp := response{}
	resp.Items = make([]item, 0, len(items))

	for _, i := range items {
		resp.Items = append(resp.Items, item(i))
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(resp)
}

func main() {
	http.HandleFunc("/", feedReader)
	err := http.ListenAndServe(":8080", nil)
	if err != nil {
		log.Fatal(err)
	}
}
