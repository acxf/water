import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonSegment,
  IonSegmentButton,
  IonLabel,
} from '@ionic/react';

import Page from '../components/Page';

import './styles.css';

const Learn: React.FC = () => {
  return (
    <Page name="Learn">
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Where does water come from?</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
          Water seems like its everywhere. But how does water get to our homes,
          and how do we know it's safe to use?
        </IonCardContent>
      </IonCard>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Household Tips</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
          There are many simple ways you can reduce your water usage in your
          household. We have some tips that can help you save a lot of water!
        </IonCardContent>
      </IonCard>
    </Page>
  );
};

export default Learn;
