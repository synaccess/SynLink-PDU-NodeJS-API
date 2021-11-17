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

[How to generate a PAT (Personal Access Token)](https://synaccess.com/support/webapi#personal-access-token-based)

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

### Get Device Information

[Device API Information](https://synaccess.com/support/webapi#get-device-info)

```js
SynLinkPDU.get_device(pduConfiguration, (error, data) => {
  if (error) {
    // error occurred:
    console.log(error);
  } else {
    console.log(data);
  }
})
```

### Get Outlet Information
[Outlet API Information](https://synaccess.com/support/webapi#outlets)
```js
SynLinkPDU.get_outlets(pduConfiguration, (error, data) => {
  if (error) {
    // error occurred:
    console.log(error);
  } else {
    console.log(data);
  }
})
```

## Get Circuit/Bank Information
[Bank API Information](https://synaccess.com/support/webapi#banks)
```js
SynLinkPDU.get_banks(pduConfiguration, (error, data) => {
  if (error) {
    // error occurred:
    console.log(error);
  } else {
    console.log(data);
  }
})
```

## Get Inlet Information
[Inlet API Information](https://synaccess.com/support/webapi#inlets)
```js
SynLinkPDU.get_inlets(pduConfiguration, (error, data) => {
  if (error) {
    // error occurred:
    console.log(error);
  } else {
    console.log(data);
  }
})
```

## Modify Outlet Information
[Modify Outlet API Information](https://synaccess.com/support/webapi#modify-outlet)
```js
SynLinkPDU.set_outlets(pduConfiguration, {
  id: "1-2001399", // can be outlet ID or outlet index
  state: "ON"
},
(error, data) => {
  if (error) {
    // error occurred:
    console.log(error);
  } else {
    console.log(data);
  }
})
```