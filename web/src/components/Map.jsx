import React from 'react';
import {
  withScriptjs, withGoogleMap, GoogleMap, Marker,
} from 'react-google-maps';
import styles from './Map.module.css';

const Map = ({ markers }) => (
  <GoogleMap
    defaultZoom={15}
    defaultCenter={{
      lat: 1.294649,
      lng: 103.776287,
    }}
  >
    {markers.map(marker => (
      <Marker key={marker.id} position={marker.position} />
    ))}
  </GoogleMap>
);

const ConnectedMaps = withScriptjs(withGoogleMap(Map));

const MapWithProps = props => (
  <ConnectedMaps
    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
      process.env.REACT_APP_GOOGLE_API_KEY
    }`}
    loadingElement={<div className={styles.others} />}
    containerElement={<div className={styles.map} />}
    mapElement={<div className={styles.others} />}
    {...props}
  />
);

export default MapWithProps;
