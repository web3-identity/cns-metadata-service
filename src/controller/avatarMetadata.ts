import { Request, Response } from 'express';
import { FetchError } from 'node-fetch';
import {
  CallRevert,
  NFTURIParsingError,
  ResolverNotFound,
  RetrieveURIFailed,
  TextRecordNotFound,
  UnsupportedNamespace,
  UnsupportedNetwork,
} from '../base';
import { RESPONSE_TIMEOUT } from '../config';
import { getAvatarMeta } from '../service/avatar';
import getNetwork from '../service/network';
import { debug } from 'debug';
var _debug = debug("avatarMetadata");

export async function avatarMetadata(req: Request, res: Response) {
  // #swagger.description = 'CNS avatar metadata'
  // #swagger.parameters['networkName'] = { schema: { $ref: '#/definitions/networkName' } }
  // #swagger.parameters['name'] = { description: 'CNS name', schema: { $ref: '#/definitions/cnsName' } }
  res.setTimeout(RESPONSE_TIMEOUT, () => {
    res.status(504).json({ message: 'Timeout' });
  })

  const { name, networkName } = req.params;
  try {
    const { provider } = getNetwork(networkName);
    const meta = await getAvatarMeta(provider, name, networkName);
    if (meta) {
      /* #swagger.responses[200] = { 
             description: 'Metadata object',
             schema: { $ref: '#/definitions/AvatarMetadata' }
      } */
      res.status(200).json(meta);
    } else {
      /* #swagger.responses[404] = { 
             description: 'No results found' 
      } */
      res.status(404).json({
        message: 'No results found.',
      });
    }
  } catch (error: any) {
    _debug("failed to getAvatarMeta",error)
    const errCode = (error?.code && Number(error.code)) || 500;
    if (
      error instanceof FetchError ||
      error instanceof NFTURIParsingError ||
      error instanceof ResolverNotFound ||
      error instanceof RetrieveURIFailed ||
      error instanceof TextRecordNotFound ||
      error instanceof UnsupportedNamespace||
      error instanceof CallRevert
    ) {
      res.status(errCode).json({
        message: error.message,
      });
      return;
    }
    /* #swagger.responses[501] = { 
          description: 'Unsupported network' 
    } */
    if (error instanceof UnsupportedNetwork) {
      res.status(501).json({
        message: error.message,
      });
    }
  }
}
