const swaggerAutogen = require('swagger-autogen')({ openapi: '3.0.0' });

const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || 'localhost';
const ENV = process.env.ENV || 'local'; // local/prod
const SERVER_URL =
  ENV === 'local' ? `http://localhost:${PORT}` : `${HOST}`;
const APP_URL = 'https://app-test.web3verse.space'

const outputFile = './src/assets/doc_output.json';
const endpointsFiles = ['./src/endpoint.ts'];

const doc = {
  info: {
    version: '0.0.1-alpha.1',
    title: 'CNS Metadata Service',
    description: 'Set of endpoints to query CNS metadata and more',
    contact: 'contact@cns.domains',
    liccnse: 'MIT Liccnse',
    x_logo: {
      url: './src/assets/logo.svg',
      backgroundColor: '#FFFFFF',
    },
  },
  host: SERVER_URL,
  definitions: {
    AvatarMetadata: {
      $uri: 'CNS name of avatar holder',
      is_owner: 'Ownership verification of NFT',
      host_meta: {
        chain_id: 'Chain ID where NFT resides',
        namespace: 'Type of NFT contract',
        contract_address: 'Contract address of NFT',
        token_id: 'Token ID of NFT',
        reference_url:
          'Marketplace URL of NFT',
        },
        $name: 'Name of NFT',
        $description:
          "Description of NFT",
        $attributes: 'Attributes of NFT',
        $image: 'Image data/URL of NFT',
        image_url: 'Image data/URL of NFT',
        image_data: 'Image data of NFT',
        background_color: 'Background color of NFT',
        youtube_url: 'Youtube URL of NFT'
    },
    CNSMetadata: {
      $name: 'CNS name',
      $description: 'Short CNS name description',
      $attributes: 'Custom traits about CNS',
      $name_length: 'Character length of cns name',
      $url: 'CNS App URL of the name',
      $version: 'CNS NFT version',
      $background_image: 'Origin URL of avatar image',
      $image_url: 'URL of CNS NFT image',
    },
    contractAddress: '0x57f1887a8BF19b14fC0dF6Fd9B2acc9Af147eA85',
    cnsName: 'nick.web3',
    tokenId: '4221908525551133525058944220830153...',
    networkName: {
      description: 'Name of the chain to query for.',
      '@enum': ['mainnet', 'testnet'],
    },
  },
  components: {
    examples: {
      AvatarMetadata: {
        $uri: 'matoken.web3',
        is_owner: true,
        host_meta: {
          chain_id: 1,
          namespace: 'erc721',
          contract_address: '0x31385d3520bced94f77aae104b406994d8f2168c',
          token_id: '9421',
          reference_url:
            'https://opcnsea.io/assets/0x31385d3520bced94f77aae104b406994d8f2168c/9421',
        },
        $name: 'BASTARD GAN PUNK V2 #9421',
        $description:
          "FOR THE CHANCES\nI HAVEN'T GOT A BURIAL IN MY ARMS\nAND I'VE HAD ENOUGH\nTIME IS NOW\nIT'S TIME\nI'VE GOT NOTHING TO PROVE\nI'VE GOT NOTHING TO LOSE\n",
        $attributes: [
          {
            trait_type: 'HYPE TYPE',
            value: 'CALM AF (STILL)',
          },
          {
            trait_type: 'BASTARDNESS',
            value: 'FOMBOI BASTARD',
          },
          {
            trait_type: 'TYPE',
            value: 'LARGE',
          },
        ],
        image:
          'https://ipfs.io/ipfs/QmRagxjj2No4T8gNCjpM42mLZGQE3ZwMYdTFUYe6e6LMBG',
      },
      CNSMetadata: {
        $name: 'nick.web3',
        $description: 'nick.web3, an CNS name.',
        $attributes: [
          {
            trait_type: 'Created Date',
            display_type: 'date',
            value: null,
          },
          {
            trait_type: 'Length',
            display_type: 'number',
            value: 4,
          },
          {
            trait_type: 'Registration Date',
            display_type: 'date',
            value: 1580803395000,
          },
          {
            trait_type: 'Expiration Date',
            display_type: 'date',
            value: 1698131707000,
          },
        ],
        name_length: 4,
        url: `${APP_URL}/name/nick.web3`,
        version: 0,
        background_image:
          `${SERVER_URL}/mainnet/avatar/nick.web3`,
        image_url:
          `${SERVER_URL}/mainnet/0x57f1887a8BF19b14fC0dF6Fd9B2acc9Af147eA85/0x5d5727cb0fb76e4944eafb88ec9a3cf0b3c9025a4b2f947729137c5d7f84f68f/image`,
      },
    },
  },
};

swaggerAutogen(outputFile, endpointsFiles, doc);
