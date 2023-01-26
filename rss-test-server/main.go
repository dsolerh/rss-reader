package main

import (
	"net/http"
	"time"
)

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		switch r.URL.Query().Get("id") {
		case "valid":
			w.Write([]byte(schema_valid))
		case "valid-source":
			w.Write([]byte(schema_valid_source))
		case "valid-no-item":
			w.Write([]byte(schema_valid_no_item))
		case "multi-items":
			time.Sleep(1 * time.Minute)
			w.Write([]byte(schema_multi_items))
		case "invalid":
			w.Write([]byte(schema_invalid))
		case "invalid-date":
			w.Write([]byte(schema_invalid_date))
		}
	})
	http.ListenAndServe(":3001", nil)
}

var schema_valid = `
<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">

<channel>
  <title>First Schema</title>
  <link>https://www.w3schools.com</link>
  <description>Free web building tutorials</description>
  <item>
    <title>First Schema</title>
    <link>https://www.w3schools.com/xml/xml_rss.asp</link>
    <description>New RSS tutorial on W3Schools</description>
    <pubDate>Thu, 21 Apr 2006</pubDate>
  </item>
</channel>

</rss>
`

var schema_multi_items = `
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
    <pubDate>Thu, 02 Apr 2006</pubDate>
  </item>
  <item>
    <title>RSS Tutorial</title>
    <link>https://www.w3schools.com/xml/xml_rss.asp</link>
    <description>New RSS tutorial on W3Schools</description>
    <pubDate>Thu, 19 Apr 2006</pubDate>
  </item>
</channel>

</rss>
`

var schema_valid_source = `
<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">

<channel>
  <title>W3Schools Home Page</title>
  <link>https://www.w3schools.com</link>
  <description>Free web building tutorials</description>
  <item>
    <title>Valid source</title>
    <link>https://www.w3schools.com/xml/xml_rss.asp</link>
    <description>New RSS tutorial on W3Schools</description>
    <source url="https://www.w3schools.com">W3Schools.com</source>
    <pubDate>Thu, 20 Apr 2006</pubDate>
  </item>
</channel>

</rss>
`
var schema_invalid = ""

var schema_invalid_date = `
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
    <pubDate></pubDate>
  </item>
</channel>

</rss>
`

var schema_valid_no_item = `
<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">

<channel>
</channel>

</rss>
`
