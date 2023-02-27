# ens-metadata-service

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![License][license-shield]][license-url]
[![Travis][travis-shield]][travis-url]

## API


### Request
- __network:__ Name of the chain to query for. (testnet|mainnet)
- __contactAddress:__ accepts contractAddress of the NFT which represented by the tokenId
- __NFT v1 - tokenId:__ accepts labelhash of CNS name in both hex and int format
- __NFT v2 - tokenId:__ accepts namehash of CNS name in both hex and int format

```
/{networkName}/{contractAddress}/{tokenId}
```

Request (example)

https://metadata.cns.domains/mainnet/0x57f1887a8BF19b14fC0dF6Fd9B2acc9Af147eA85/42219085255511335250589442208301538195142221433306354426240614732612795430543/

### Response (example)

```json
{
  "name": "nick.web3",
  "description": "nick.web3, an CNS name.",
  "attributes": [
    {
      "trait_type": "Created Date",
      "display_type": "date",
      "value": 1580803395000
    },
    {
      "trait_type": "Registration Date",
      "display_type": "date",
      "value": 1580803395000
    },
    {
      "trait_type": "Expiration Date",
      "display_type": "date",
      "value": 1698131707000
    }
  ],
  "name_length": 4,
  "short_name": null,
  "length": 0,
  "url": "https://app.cns.domains/name/nick.web3",
  "version": 0,
  "background_image": "https://metadata.cns.domains/mainnet/avatar/nick.web3",
  "image_url": "https://metadata.cns.domains/mainnet/0x57f1887a8BF19b14fC0dF6Fd9B2acc9Af147eA85/0x5d5727cb0fb76e4944eafb88ec9a3cf0b3c9025a4b2f947729137c5d7f84f68f/image"
}

```

More info and list of all endpoints: https://metadata.cns.domains/docs


## How to setup

```
git clone https://github.com/web3-identity/cns-metadata-service.git
cd cns-metadata-service
cp .env.org .env // Fill in Vars
yarn
yarn dev
```


## How to deploy (production environment)

```
HOST=your_server_base_url yarn start:prod
```


## How to test

Regular unit test;
```
yarn test
```

Unit test + coverage;
```
yarn test:cov
```


## Environment Variables

| Name | Description | Default value | Options |
| ---- | ----------- | ------------- | ------- |
| HOST | Host (ip/domain) address of the running service | localhost | - | No |
| ENV | Project scope | local | local/prod |
| INAMEWRAPPER | InterfaceId of NameWrapper Contract | 0xe89c48dc | - |
| ADDRESS_CFX_REGISTRAR | Conflux address of CNSBaseRegistrar Contract | cfxtest:acg08bujp0kmsup1zk11c9mad7zd6648eynbcjtndm | - |
| ADDRESS_NAME_WRAPPER | Conflux address of NameWrapper Contract | cfxtest:acapc3y2j7atme3bawvaex18hs36tn40uu5h6j3mtu | - |