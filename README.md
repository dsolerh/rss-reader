# RSS Reader App

This is a simple app to help manage RSS feed content. The application is build using
[Go (golang)](https://go.dev/) programing language for the Back-end and 
[React (typescript)](https://reactjs.org/) for the Front-end. It uses 
[go-rrs-reader](https://github.com/dsolerh/go-rss-reader) package for fetching and reading the
feed information on the Back-end. Also is style using [Bootstrap](https://getbootstrap.com/) on the
user interface.

## Install

(On unix based OS)
**Note:** make sure you have docker installed

```shell
git clone https://github.com/dsolerh/rss-reader.git
cd rss-reader
make up_build
```

The application it's compose of two services. After running the `make up_build` 
you can visit [localhost:8080](http://localhost:8080) and will se the user interface. 
for trial RSS feed you can use these:

- https://news.un.org/feed/subscribe/en/news/all/rss.xml

## License

Copyright (c) 2023-present [Daniel Soler](https://github.com/dsolerh)

Licensed under [MIT License](./LICENSE)
