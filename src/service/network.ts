import { ethers } from 'ethers';
import { UnsupportedNetwork } from '../base';
import { INFURA_API_KEY } from '../config';
import { debug } from 'debug';
var _debug = debug("domains")

const WEB3_API = {
  INFURA: 'https://infura.io/v3/',
  CLOUDFLARE: 'https://web3metadata.ens.domains/v1',
  CONFURA: 'https://confluxrpc.com',
  CFXBRIDGE: 'http://127.0.0.1:8545',//'http://149.129.36.242:11451/bridge',//'https://cfx2eth.conflux123.xyz'
}

const NETWORK = {
  LOCAL: 'local',
  RINKEBY: 'rinkeby',
  ROPSTEN: 'ropsten',
  GOERLI: 'goerli',
  MAINNET: 'mainnet',
  TESTNET: 'testnet',
};

function getWeb3URL(api: string, network: string) {
  switch (api) {
    case WEB3_API.CONFURA:
      return `${WEB3_API.CONFURA.replace('https://', `https://${network}.`)}`
    case WEB3_API.CFXBRIDGE:
      return WEB3_API.CFXBRIDGE
    // case WEB3_API.INFURA:
    //   return `${WEB3_API.INFURA.replace('https://', `https://${network}.`)}${INFURA_API_KEY}`;
    // case WEB3_API.CLOUDFLARE:
    //   return `${WEB3_API.CLOUDFLARE}/${network}`
    default:
      throw Error('');
  }
}

export default function getNetwork(network: string): any {
  // currently subgraphs used under this function are outdated,
  // we will have namewrapper support and more attributes when latest subgraph goes to production
  let SUBGRAPH_URL: string;
  let WEB3_URL = WEB3_API.INFURA;
  switch (network) {
    case NETWORK.TESTNET:
      SUBGRAPH_URL = 'http://101.42.88.184:8100/subgraphs/name/graphprotocol/ens';//'https://thegraph.conflux123.xyz/subgraphs/name/graphprotocol/ens';
      WEB3_URL = getWeb3URL(WEB3_API.CFXBRIDGE, NETWORK.TESTNET);
      break;
    // case NETWORK.LOCAL:
    //   SUBGRAPH_URL = 'http://127.0.0.1:8000/subgraphs/name/graphprotocol/ens';
    //   WEB3_URL = getWeb3URL(WEB3_URL, NETWORK.RINKEBY);
    //   break;
    // case NETWORK.RINKEBY:
    //   SUBGRAPH_URL =
    //     'https://api.thegraph.com/subgraphs/name/makoto/ensrinkeby';
    //   WEB3_URL = getWeb3URL(WEB3_URL, NETWORK.RINKEBY);
    //   break;
    // case NETWORK.ROPSTEN:
    //   SUBGRAPH_URL =
    //     'https://api.thegraph.com/subgraphs/name/ensdomains/ensropsten';
    //   WEB3_URL = getWeb3URL(WEB3_URL, NETWORK.ROPSTEN);
    //   break;
    // case NETWORK.GOERLI:
    //   SUBGRAPH_URL =
    //     'https://api.thegraph.com/subgraphs/name/ensdomains/ensgoerli';
    //   WEB3_URL = getWeb3URL(WEB3_URL, NETWORK.GOERLI);
    //   break;
    // case NETWORK.MAINNET:
    //   SUBGRAPH_URL = 'https://api.thegraph.com/subgraphs/name/ensdomains/ens';
    //   WEB3_URL = getWeb3URL(WEB3_URL, NETWORK.MAINNET);
    //   break;
    default:
      throw new UnsupportedNetwork(`Unknown network '${network}'`, 400);
  }
  const provider = new ethers.providers.StaticJsonRpcProvider(WEB3_URL);

  provider.on('debug', (info) => {
    // console.log(info.action);
    _debug('=>', info.request);
    _debug('<=', {
      request: info.request,
      response: info.response,
      error:  info.error,
      provider: info.provider.connection,
    });
    // console.log(info.provider);
  });
  return { WEB3_URL, SUBGRAPH_URL, provider };
}
