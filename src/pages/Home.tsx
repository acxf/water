import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
} from '@ionic/react';

import Page from '../components/Page';
import Section from '../components/Section';

import './styles.css';

import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <Page name="Home">
      <Section title="Tips">
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Reduce Shower Usage</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            Showers use a lot of water! Reducing your shower by just a minute or
            two can save a lot of water.
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Reduce Tap Usage</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            We've detected that you have turned on the bathroom tap for more
            than 30 seconds. Make sure you turn off the tap!
          </IonCardContent>
        </IonCard>
      </Section>

      <Section title="Usage">
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Kitchen Tap</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <b>23.3 Litres</b>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Bathroom Tap</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <b>6.9 Litres</b>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Bathroom Toilet</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <b>5 Flushes</b> (about 27.5 Litres)
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Shower</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <b>119.6 Litres</b>
          </IonCardContent>
        </IonCard>
      </Section>
    </Page>
  );
};

export default Home;
