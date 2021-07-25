import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
} from '@ionic/react';

import Page from '../components/Page';
import Section from '../components/Section';

import './styles.css';

const Compete: React.FC = () => {
  return (
    <Page name="Compete">
      <Section title="Household">
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>You</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <h1>
              <b>#1</b>
            </h1>
            36.5 Litres saved this week.
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Leaderboard</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <b style={{ fontSize: 18 }}>1. You</b>
            <br />
            <b style={{ fontSize: 18, display: 'inline-block', width: 100 }}>
              2. Austin
            </b>{' '}
            +30.3L
            <br />
            <b style={{ fontSize: 18, display: 'inline-block', width: 100 }}>
              3. Clara
            </b>{' '}
            +28.7L
            <br />
            <b style={{ fontSize: 18, display: 'inline-block', width: 100 }}>
              4. Mahi
            </b>{' '}
            +22.0L
            <br />
            <b style={{ fontSize: 18, display: 'inline-block', width: 100 }}>
              5. Lucas
            </b>{' '}
            +14.2L
            <br />
            <b style={{ fontSize: 18, display: 'inline-block', width: 100 }}>
              6. Gratiana
            </b>{' '}
            +12.7L
            <br />
          </IonCardContent>
        </IonCard>
      </Section>

      <Section title="Neighborhood">
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Your Household</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <h1>
              <b>#2</b>
            </h1>
            144.4 Litres saved this week.
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Leaderboard</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <b style={{ fontSize: 18, display: 'inline-block', width: 100 }}>
              1. Sara
            </b>{' '}
            +170.6L
            <br />
            <b style={{ fontSize: 18, display: 'inline-block', width: 100 }}>
              2. You
            </b>
            <br />
            <b style={{ fontSize: 18, display: 'inline-block', width: 100 }}>
              3. Jayson
            </b>{' '}
            +96.0L
            <br />
            <b style={{ fontSize: 18, display: 'inline-block', width: 100 }}>
              3. Phoebe
            </b>{' '}
            +38.4L
            <br />
            <b style={{ fontSize: 18, display: 'inline-block', width: 100 }}>
              4. Brian
            </b>{' '}
            -20.1L
            <br />
          </IonCardContent>
        </IonCard>
      </Section>
    </Page>
  );
};

export default Compete;
