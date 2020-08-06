import React, {
  useCallback, useContext, useEffect, useReducer,
} from 'react';
import { useParams } from 'react-router-dom';
import Property from '../../models/Property';
import Header from '../App/Header/Header';
import Beer from '../../models/Beer';
import DetailsPageContext from '../../contexts/DetailsPageContext';
import AppContext from '../../contexts/AppContext';
import { SET_BEER } from '../../constants/actionTypes';
import PropertyItem from './PropertyItem/PropertyItem';
import styles from './BeerDetails.module.css';
import FoodPairingItem from './FoodPairingItem/FoodPairingItem';

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

  const properties = [
    new Property({ name: 'abv', value: state.beer.abv }),
    new Property({ name: 'ebc', value: state.beer.ebc }),
    new Property({ name: 'ibu', value: state.beer.ibu }),
    new Property({ name: 'ph', value: state.beer.ph }),
    new Property({ name: 'srm', value: state.beer.srm }),
  ];

  return (
    <DetailsPageContext.Provider value={{ ...state, detailsPageDispatch }}>
      <Header />
      <div className={styles.beerDetails}>
        <div className={styles.right}>
          <div className={styles.image}>
            <img src={state.beer.imageUrl} alt={state.beer.name} />
          </div>
          <div className={styles.foodPairingWrapper}>
            <div className={styles.foodPairingTitle}>
              Food Pairing:
            </div>
            {state.beer.food_pairing.map((f) => <FoodPairingItem key={f}>{f}</FoodPairingItem>)}
          </div>
        </div>
        <div className={styles.left}>
          <div className={styles.title}>
            <div className={styles.name}>{state.beer.name}</div>
            <div className={styles.tagline}>{`Tagline: ${state.beer.tagline}`}</div>
            <div className={styles.firstBrewed}>{`First Brewed: ${state.beer.first_brewed}`}</div>
          </div>
          <div className={styles.properties}>
            {properties.map((p) => <PropertyItem key={p.name} property={p} />)}
          </div>
          <div className={styles.descriptionWrapper}>
            <div className={styles.descrTitle}>Description:</div>
            <div className={styles.description}>
              {state.beer.description}
            </div>
            <div className={styles.contributedWrapper}>
              <div className={styles.contributedTitle}>
                Contributed By:
              </div>
              <div className={styles.contributed}>
                {state.beer.contributed_by}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DetailsPageContext.Provider>
  );
}
