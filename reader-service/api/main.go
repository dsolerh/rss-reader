package main

import (
	"encoding/json"
	"flag"
	"fmt"
	"log"
	"net/http"

	reader "github.com/dsolerh/go-rss-reader"
)

var PORT = flag.String("p", "8080", "the port in wich to run the server")

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
	flag.Parse()
	http.HandleFunc("/", feedReader)
	log.Printf("server started at port: %s", *PORT)
	err := http.ListenAndServe(fmt.Sprintf(":%s", *PORT), nil)
	if err != nil {
		log.Fatal(err)
	}
}
