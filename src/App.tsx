import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { school, barChart, home, ribbon } from 'ionicons/icons';

import Home from './pages/Home';
import Compete from './pages/Compete';
import Learn from './pages/Learn';
import Report from './pages/Report';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/home">
            <Home />
          </Route>

          <Route exact path="/compete">
            <Compete />
          </Route>

          <Route path="/report">
            <Report />
          </Route>

          <Route exact path="/learn">
            <Learn />
          </Route>

          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>

          <IonTabButton tab="compete" href="/compete">
            <IonIcon icon={ribbon} />
            <IonLabel>Compete</IonLabel>
          </IonTabButton>

          <IonTabButton tab="report" href="/report">
            <IonIcon icon={barChart} />
            <IonLabel>Report</IonLabel>
          </IonTabButton>

          <IonTabButton tab="learn" href="/learn">
            <IonIcon icon={school} />
            <IonLabel>Learn</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
