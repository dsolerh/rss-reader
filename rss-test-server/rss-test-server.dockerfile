# build a tiny docker image
FROM alpine:latest

RUN mkdir /app

COPY rssTestServer /app

CMD [ "/app/rssTestServer" ]
