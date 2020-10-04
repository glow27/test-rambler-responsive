import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import SmallScreenCard from './smallScreen';
import BigScreenCard from './bigScreen';

function Card(props) {
  const matches = useMediaQuery('(max-width:768px)');

  return (
    <>
      {matches ? (
        <SmallScreenCard info={props.info} />
      ) : (
        <BigScreenCard info={props.info} />
      )}
    </>
  );
}

export default Card;
