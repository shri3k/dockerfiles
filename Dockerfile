FROM ubuntu:latest
RUN apt-get update && apt-get -y upgrade
RUN apt-get install -y build-essential
RUN apt-get -y install neovim
RUN apt-get -y install curl
