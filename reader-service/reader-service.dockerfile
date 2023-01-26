# build a tiny docker image

FROM alpine:latest

RUN mkdir /app

COPY readerApp /app

CMD ["/app/readerApp"] 
