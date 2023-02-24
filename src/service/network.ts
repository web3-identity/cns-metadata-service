import { ethers } from 'ethers';
import { UnsupportedNetwork } from '../base';
import { INFURA_API_KEY, ADDRESS_ETH_REGISTRY, SERVER_URL } from '../config';
import { debug } from 'debug';

var _debug = debug("network")

enum NetworkType {
  local,
  testnet,
  mainnet
}

class NetworkInfo {
  chainID: number;
  networkName: string;
  scan: string;
  confura: string;
  cfxBridge: string;
  subGraph: string;
  provider: ethers.providers.BaseProvider

  constructor(_chainID: number, _networkName: string, _scan: string, _confura: string, _cfxBridge: string) {
    this.chainID = _chainID;
    this.networkName = _networkName;
    this.scan = _scan
    this.confura = _confura
    this.cfxBridge = _cfxBridge
    this.subGraph = "https://thegraph.conflux123.xyz/subgraphs/name/graphprotocol/ens"
    this.provider = new ethers.providers.StaticJsonRpcProvider(this.cfxBridge, { name: this.networkName, chainId: this.chainID, ensAddress: ADDRESS_ETH_REGISTRY });
  }
}

var NetworkInfos = new Map<NetworkType, NetworkInfo>([
  [NetworkType.testnet, new NetworkInfo(1, 'cfxtestnet', 'https://testnet.confluxscan.io/nft/', 'https://testnet.confluxrpc.com', 'https://cfx2ethtest.nftrainbow.cn')],
  [NetworkType.mainnet, new NetworkInfo(1029, 'cfxmainnet', 'https://mainnet.confluxscan.io/nft/', 'https://mainnet.confluxrpc.com', 'https://cfx2eth.nftrainbow.cn')],
])

function getNetworkType(newtork: string): NetworkType {
  for (const [k, v] of NetworkInfos) {
    if (v.networkName == newtork) {
      return k;
    }
  }
  throw new UnsupportedNetwork("unsupported network")
}

export default function getNetwork(network: string): NetworkInfo {
  // currently subgraphs used under this function are outdated,
  // we will have namewrapper support and more attributes when latest subgraph goes to production
  const networkType = getNetworkType(network);
  const networkInfo = NetworkInfos.get(networkType);

  if (!networkInfo) {
    throw new UnsupportedNetwork("unsupported network")
  }

  networkInfo?.provider.on('debug', (info) => {
    _debug('=>', info.request);
    _debug('<=', {
      request: info.request,
      response: info.response,
      error: info.error,
      provider: info.provider.connection,
    });
  });
  return networkInfo;
}