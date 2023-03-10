import { request } from 'graphql-request';
import {
    GET_REGISTRATIONS,
    GET_DOMAINS,
    GET_DOMAINS_BY_LABELHASH,
} from '../service/subgraph';

const SUBGRAPH_URL = "https://graphql-replica.swappi.io/subgraphs/name/graphprotocol/ens"//'https://thegraph.conflux123.xyz/subgraphs/name/graphprotocol/ens'//"https://thegraph-mainnet.conflux123.xyz/subgraphs/name/graphprotocol/ens"//"https://graphql-replica.swappi.io/subgraphs/name/graphprotocol/ens"
const hexId = "0x000570736c004a8d29899cd27ab192649504b5ddbf822ac96989b4c33990796b"

console.log({ SUBGRAPH_URL, GET_DOMAINS, hexId })

request(SUBGRAPH_URL, GET_DOMAINS, { tokenId: hexId })
    .then(console.log)
    .catch(console.error)