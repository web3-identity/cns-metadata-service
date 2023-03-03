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

https://app.web3verse.space/metadata/cfxmainnet/0x57f1887a8BF19b14fC0dF6Fd9B2acc9Af147eA85/0x5a907a3e636d6d6b587f784e23b74c6534793e8abcb2a1e5216edb4abb5a8c66

### Response (example)

```json
{
  "is_normalized": true,
  "name": "test1.web3",
  "description": "test1.web3, an CNS name.",
  "attributes": [
    {
      "trait_type": "Created Date",
      "display_type": "date",
      "value": 1677565588000
    },
    {
      "trait_type": "Length",
      "display_type": "number",
      "value": 5
    },
    {
      "trait_type": "Segment Length",
      "display_type": "number",
      "value": 5
    },
    {
      "trait_type": "Character Set",
      "display_type": "string",
      "value": "alphanumeric"
    },
    {
      "trait_type": "Registration Date",
      "display_type": "date",
      "value": 1677565588000
    },
    {
      "trait_type": "Expiration Date",
      "display_type": "date",
      "value": 1709101588000
    }
  ],
  "name_length": 5,
  "segment_length": 5,
  "url": "https://app.web3verse.space/setting/test1.web3",
  "version": 3,
  "background_image": "https://app.web3verse.space/metadata/cfxmainnet/avatar/test1.web3",
  "image": "https://app.web3verse.space/metadata/cfxmainnet/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/0x5a907a3e636d6d6b587f784e23b74c6534793e8abcb2a1e5216edb4abb5a8c66/image",
  "image_url": "https://app.web3verse.space/metadata/cfxmainnet/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/0x5a907a3e636d6d6b587f784e23b74c6534793e8abcb2a1e5216edb4abb5a8c66/image"
}

```

More info and list of all endpoints: https://metadata.cns.domains/docs


## How to setup

```
git clone https://github.com/web3-identity/cns-metadata-service.git
cd cns-metadata-service
cp .env.org .env // Fill in Vars
yarn
```

## How to deploy (local enviorment)
```
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