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
git clone xxx
cd xx
make up_build
```

The application it's compose of two services (plus a third one for testing).
After running the `make up_build` you can visit [localhost:8080](http://localhost:8080)
and will se the user interface. for trial RSS feed you can use the ones included in the
test server:

- http://localhost:5001/?id=valid
- http://localhost:5001/?id=valid-source
- http://localhost:5001/?id=multi-items (this one has 1 min delay for you to see a slow request)
- http://localhost:5001/?id=valid-no-item (this one is a valid feed with no items)
- http://localhost:5001/?id=invalid (this one is an invalid feed)

## License

Copyright (c) 2023-present [Daniel Soler](https://github.com/dsolerh)

Licensed under [MIT License](./LICENSE)
