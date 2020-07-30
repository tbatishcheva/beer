import React, {
  useCallback, useContext, useEffect, useReducer,
} from 'react';
import { useParams } from 'react-router-dom';
import Header from '../App/Header/Header';
import Beer from '../../models/Beer';
import DetailsPageContext from '../../contexts/DetailsPageContext';
import styles from './BeerDetails.module.css';
import AppContext from '../../contexts/AppContext';
import { SET_BEER } from '../../constants/actionTypes';

const detailsPageState = {
  beer: null,
};

const detailsPageReducer = (state, action) => {
  switch (action.type) {
    case SET_BEER:
      return { ...state, beer: action.beer };
    default:
      return 'Error!';
  }
};

function BeerDetails() {
  const [state, detailsPageDispatch] = useReducer(detailsPageReducer, detailsPageState);
  const { beerApi } = useContext(AppContext);
  const { id } = useParams();

  const setBeer = useCallback((beer) => {
    detailsPageDispatch(
      {
        type: SET_BEER,
        beer,
      },
    );
  }, [detailsPageDispatch]);

  useEffect(() => {
    beerApi.fetchBeerById(id).then((res) => setBeer(new Beer(res[0])));
  }, [beerApi, id, setBeer]);

  return (
    <DetailsPageContext.Provider value={{ ...state, detailsPageDispatch }}>
      <Header />
      {state.beer && (
        <div className={styles.beerDetails}>
          <div className={styles.image}>
            <img src={state.beer.imageUrl} alt={state.beer.name} />
          </div>
          <div className={styles.info}>
            {state.beer.name}
          </div>
          <div className={styles.description}>
            {state.beer.description}
          </div>
        </div>
      )}
    </DetailsPageContext.Provider>
  );
}

export default BeerDetails;
