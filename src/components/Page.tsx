import React from 'react';

import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

interface PageProps {
  name: string;
}

const Page: React.FC<PageProps> = ({ name, children }) => {
  return (
    <IonPage>
      <IonHeader>
        {/* <IonToolbar>
          <IonTitle>{name}</IonTitle>
        </IonToolbar> */}
      </IonHeader>

      <IonContent fullscreen>
        <div style={{ height: 75 }}></div>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>

        {children}
      </IonContent>
    </IonPage>
  );
};

export default Page;
