# NodeJS SynLink PDU API Wrapper

The SynLink PDU API Wrapper for NodeJS provides convenient access to the SynLInk HTTP API from applications written in server-side JavaScript.

## Documentation

See the [SynLink API Documentation](https://synaccess.com/support/webapi) 

## Requirements

Node 8, 10 or higher

## Installation
Install the package with: 

```sh
npm install synlink-pdu --save
# or
yarn add synlink-pdu
```

## Usage

Each request requires a `pduConfiguration` object:


```js
const SynLinkPDU = require("synlink-pdu");
const pduConfiguration = {
  ip: "http://192.168.1.100",
  pat: "mr0dGGdFKKyBzbIgBlA"
};

SynLinkPDU.get_outlets(pduConfiguration, (error, data) => {
  if (error) {
    // error occurred:
    console.log(error);
  } else {
    console.log(data);
  }
})

```