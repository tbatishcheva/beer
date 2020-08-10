import React, {
  useCallback, useContext, useEffect, useReducer,
} from 'react';
import { useParams } from 'react-router-dom';
import BeerDescription from './BeerDescription/BeerDescription';
import BeerTitle from './BeerTitle/BeerTitle';
import FoodPairing from './FoodPairing/FoodPairing';
import Header from '../App/Header/Header';
import Beer from '../../models/Beer';
import AppContext from '../../contexts/AppContext';
import PropertyItem from './PropertyItem/PropertyItem';
import { SET_BEER } from '../../constants/actionTypes';
import DetailsPageContext from '../../contexts/DetailsPageContext';
import styles from './BeerDetails.module.css';

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

export default function BeerDetails() {
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

  if (!state.beer) {
    return null;
  }

  const properties = state.beer.getProperties();

  return (
    <DetailsPageContext.Provider value={{ ...state, detailsPageDispatch }}>
      <Header />
      <div className={styles.beerDetails}>
        <div className={styles.right}>
          <div className={styles.image}>
            <img src={state.beer.imageUrl} alt={state.beer.name} />
          </div>
          <div className={styles.foodPairingWrapper}>
            <FoodPairing foodPairing={state.beer.food_pairing} />
          </div>
        </div>
        <div className={styles.left}>
          <BeerTitle beer={state.beer} />
          <div className={styles.properties}>
            {properties.map((p) => <PropertyItem key={p.name} property={p} />)}
          </div>
          <div className={styles.descriptionWrapper}>
            <BeerDescription beer={state.beer} />
          </div>
        </div>
      </div>
    </DetailsPageContext.Provider>
  );
}
