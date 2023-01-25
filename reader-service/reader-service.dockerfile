# bring the env variables from the configuration
ARG PORT=8080

# build a tiny docker image

FROM alpine:latest

RUN mkdir /app

COPY readerApp /app

CMD [ "/app/readerApp -p $PORT" ]
