const path = require('path');
require('dotenv').config();

const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || 'localhost';
const ENV = process.env.ENV || 'local'; // local/prod

const FONT_FOLDER = path.join((ENV === 'local' ? 'src' : 'dist'), 'assets');
const CANVAS_FONT_PATH = path.join(FONT_FOLDER, 'Satoshi-Bold.ttf');
const CANVAS_EMOJI_FONT_PATH = path.join(FONT_FOLDER, 'NotoColorEmoji.ttf');
const INAMEWRAPPER = process.env.INAMEWRAPPER || '0xe89c48dc';

const IPFS_GATEWAY = 'https://cloudflare-ipfs.com/';
const INFURA_API_KEY = process.env.INFURA_API_KEY || '';

const ADDRESS_ETH_REGISTRAR = process.env.ADDRESS_ETH_REGISTRAR || '0x8a06b2a43adec692cf39bd3e8d960225a53b38f3';//'0x57f1887a8BF19b14fC0dF6Fd9B2acc9Af147eA85';
const ADDRESS_ETH_REGISTRY = process.env.ADDRESS_ETH_REGISTRY || '0x88a6c3a585e1e0b5f45e4ed78097ea4221e983fc'//'0x00000000000c2e074ec69a0dfb2997ba6c7d2e1e'
const ADDRESS_NAME_WRAPPER = process.env.ADDRESS_NAME_WRAPPER || '0x80c166984740f5132104a2024efe3bb3c7af5684'//'0x582224b8d4534F4749EFA4f22eF7241E0C56D4B8';

const SERVER_URL =
  ENV === 'local' ? `http://localhost:${PORT}` : `${HOST}`;
const APP_URL = 'https://app.web3verse.space'

const ETH_REGISTRY_ABI = [
  'function recordExists(bytes32 node) external view returns (bool)'
];

// response timeout: 1 min
const RESPONSE_TIMEOUT = 60 * 1000;

export {
  ADDRESS_ETH_REGISTRAR,
  ADDRESS_ETH_REGISTRY,
  ADDRESS_NAME_WRAPPER,
  CANVAS_FONT_PATH,
  CANVAS_EMOJI_FONT_PATH,
  ETH_REGISTRY_ABI,
  INAMEWRAPPER,
  IPFS_GATEWAY,
  INFURA_API_KEY,
  RESPONSE_TIMEOUT,
  SERVER_URL,
  APP_URL
};

// ENS_REGISTRY=cfxtest:acemru7fu1u8brtyn3hrtae17kbcd4pd9u2m761bta  0x88a6c3a585e1e0b5f45e4ed78097ea4221e983fc
// REVERSE_REGISTRAR=cfxtest:acfarpzehntpre0thg8x7dp0ajw4ms328pe1mm17vd  0x8a06b2a43adec692cf39bd3e8d960225a53b38f3
// BASE_REGISTRAR=cfxtest:acg08bujp0kmsup1zk11c9mad7zd6648eynbcjtndm  0x8d6f06086592a74197aa6f717d401f6a3e735e25
// STATIC_METADATA_SERVICE=cfxtest:acabg4pkfentf6pugssc10e3jdvn6r4u2pz27nwne3
// NAME_WRAPPER=cfxtest:acapc3y2j7atme3bawvaex18hs36tn40uu5h6j3mtu  0x80c166984740f5132104a2024efe3bb3c7af5684
// CFX_PRICE_ORACLE=cfxtest:acd5ganc3tmc8p2935u1rbz6fp207gm59ybd8rxxnx
// STABLE_ORACLE=cfxtest:acdeywdrjb48ast7e4gug5pv3t30t4h1wam6mnggs6
// WEB3_CONTROLLER=cfxtest:aca1858y5a9fnyx9rxd1c9knr517cd0e6afzzhgj01
// PUBLIC_RESOLVER=cfxtest:acbfyf69zaxau5a23w10dgyrmb0hrz4p9pewn6sejp
// NAME_WHITELIST=cfxtest:acex1d5fm2tcd2s9wd7p1ak9t47advbwvud2yhjw3v
// FIFS_REGISTRAR=cfxtest:achbbpdja6c3f4s6efuh7ckr85p5pf8xhesep50jv6
// REVERSE_RECORDS=cfxtest:acgddsj3kah2f4f4c6959bvc4732f4juyj90h0zmg2
// CNS_UTIL=cfxtest:aca4w63ypgup8tryphprzfcrh5kh0hpbgasb2z3s0j