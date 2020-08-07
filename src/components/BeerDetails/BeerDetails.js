import React, {
  useContext, useEffect, useState,
} from 'react';
import { useParams } from 'react-router-dom';
import Header from '../App/Header/Header';
import Beer from '../../models/Beer';
import AppContext from '../../contexts/AppContext';
import PropertyItem from './PropertyItem/PropertyItem';
import styles from './BeerDetails.module.css';
import FoodPairingItem from './FoodPairingItem/FoodPairingItem';

export default function BeerDetails() {
  const { beerApi } = useContext(AppContext);
  const { id } = useParams();
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    beerApi.fetchBeerById(id).then((res) => setBeer(new Beer(res[0])));
  }, [beerApi, id, setBeer]);

  if (!beer) {
    return null;
  }

  const properties = beer.getProperties();

  return (
    <>
      <Header />
      <div className={styles.beerDetails}>
        <div className={styles.right}>
          <div className={styles.image}>
            <img src={beer.imageUrl} alt={beer.name} />
          </div>
          <div className={styles.foodPairingWrapper}>
            <div className={styles.foodPairingTitle}>
              Food Pairing:
            </div>
            {beer.food_pairing.map((f) => <FoodPairingItem key={f}>{f}</FoodPairingItem>)}
          </div>
        </div>
        <div className={styles.left}>
          <div className={styles.title}>
            <div className={styles.name}>{beer.name}</div>
            <div className={styles.tagline}>{`Tagline: ${beer.tagline}`}</div>
            <div className={styles.firstBrewed}>{`First Brewed: ${beer.first_brewed}`}</div>
          </div>
          <div className={styles.properties}>
            {properties.map((p) => <PropertyItem key={p.name} property={p} />)}
          </div>
          <div className={styles.descriptionWrapper}>
            <div className={styles.descrTitle}>Description:</div>
            <div className={styles.description}>
              {beer.description}
            </div>
            <div className={styles.contributedWrapper}>
              <div className={styles.contributedTitle}>
                Contributed By:
              </div>
              <div className={styles.contributed}>
                {beer.contributed_by}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
