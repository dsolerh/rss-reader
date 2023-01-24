package main

import (
	"io"
	"net/http"
	"testing"
)

func Test_feedReader(t *testing.T) {
	feedProviderServer := &http.Server{
		Addr: ":3000",
		Handler: http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			w.Write([]byte(schema_valid))
		}),
	}
	go func() {
		err := feedProviderServer.ListenAndServe()
		if err != nil {
			t.Error("the test could not be setup (problem with the feed provider server)")
		}
	}()

	feedConsumerServer := &http.Server{
		Addr:    ":3001",
		Handler: http.HandlerFunc(feedReader),
	}
	go func() {
		err := feedConsumerServer.ListenAndServe()
		if err != nil {
			t.Error("the test could not be setup (problem with the feed consumer server)")
		}
	}()

	resp, err := http.Get("http://localhost:3001?urls=http://localhost:3000/&urls=http://localhost:3000/")
	if err != nil {
		t.Error("error on the get request to the server:", err)
	}
	defer resp.Body.Close()

	data, err := io.ReadAll(resp.Body)
	if err != nil {
		t.Error("error reading the response from the server", err)
	}

	if string(data) != expectedData {
		t.Error("the response is different from the expected", string(data))
	}

}

var schema_valid = `
<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">

<channel>
  <title>W3Schools Home Page</title>
  <link>https://www.w3schools.com</link>
  <description>Free web building tutorials</description>
  <item>
    <title>RSS Tutorial</title>
    <link>https://www.w3schools.com/xml/xml_rss.asp</link>
    <description>New RSS tutorial on W3Schools</description>
  </item>
</channel>

</rss>
`

var expectedData = `{"items":[{"title":"RSS Tutorial","source":"","source_url"` +
	`:"","link":"https://www.w3schools.com/xml/xml_rss.asp","publish_date":"","de` +
	`scription":"New RSS tutorial on W3Schools"},{"title":"RSS Tutorial","source":"","source_url"` +
	`:"","link":"https://www.w3schools.com/xml/xml_rss.asp","publish_date":"","de` +
	`scription":"New RSS tutorial on W3Schools"}]}
`
