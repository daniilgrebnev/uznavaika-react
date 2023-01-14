import React from 'react';

import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const MapBlock = () => {
const defaultState = {
    center: [51.670395, 39.165117],
    zoom: 17,
  };

  return (
      <>
          <div className="container">
              {/* eslint-disable-next-line react/style-prop-object */}
              <YMaps>
                  <Map defaultState={defaultState} width='100%' height='500px'>
                    <Placemark geometry={[51.670495, 39.164937]} />
                  </Map>
              </YMaps>
          </div>
      </>
  );
};

export default MapBlock;
