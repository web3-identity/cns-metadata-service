import { Express } from 'express';

import { ensMetadata } from './controller/ensMetadata';
import { ensImage } from './controller/ensImage';
import { ensRasterize } from './controller/ensRasterize';
import { avatarMetadata } from './controller/avatarMetadata';
import { avatarImage } from './controller/avatarImage';
import { queryNFTep } from './controller/queryNFT';

export default function (app: Express) {
  // #swagger.ignore = true
  app.get('/', (_req, res) => {
    res.send('Well done mate To see more go to "/docs"!');
  });

  // (0x[a-fA-F0-9]{40}|(cfx|cfxtest|net\d+):(type\.user:|type\.builtin:|type\.contract:|type\.null:|)\w{42})
  app.get(
    '/:networkName/:contractAddress/:tokenId',
    ensMetadata
  );

  app.get(
    '/:networkName/:contractAddress/:tokenId/image',
    ensImage
  );

  app.get(
    '/:networkName/:contractAddress/:tokenId/rasterize',
    ensRasterize
  );

  app.get('/:networkName/avatar/:name/meta', avatarMetadata);

  app.get('/:networkName/avatar/:name', avatarImage);

  app.get('/queryNFT', queryNFTep);
}
