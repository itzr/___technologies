OBJECTIVE: Get solc on the container

## BAD APPROAACH
- Try to install Brew first.
- Then solc

## GOOD APPROACH
- What are the options?
- What's the probability of each on working?
- What are pros/cons risks?
- Pick a route.

Option 1: use the solc container build and then build ontop of that

'docker run ethereum/solc:stable --version'
 
or 'docker pull ethereum/solc'

Option 2: Build a node based container and then add on solc via Brew.

## INVESTIGATION

ethereum/solc Dockerfile:

FROM alpine
MAINTAINER chriseth <chris@ethereum.org>

RUN \
  apk --no-cache --update add build-base cmake boost-dev git                                                && \
  sed -i -E -e 's/include <sys\/poll.h>/include <poll.h>/' /usr/include/boost/asio/detail/socket_types.hpp  && \
  git clone --depth 1 --recursive -b release https://github.com/ethereum/solidity                           && \
  cd /solidity && cmake -DCMAKE_BUILD_TYPE=Release -DTESTS=0 -DSTATIC_LINKING=1                             && \
  cd /solidity && make solc && install -s  solc/solc /usr/bin                                               && \
  cd / && rm -rf solidity                                                                                   && \
  apk del sed build-base git make cmake gcc g++ musl-dev curl-dev boost-dev                                 && \
  rm -rf /var/cache/apk/*

### What does #(nop) mean in docker history?
NOP stands for "no operation".
The # sign marks the start of the comment and anything after that will be skipped by the /bin/sh. 

