import {
    IonApp,
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle, personCircleOutline, medkitOutline } from 'ionicons/icons';
import React from 'react';
import { Route } from 'react-router-dom';
import Tab1 from '../../pages/Tab1';
import Tab2 from '../../pages/Tab2';
import Tab3 from '../../pages/Tab3';
import UserProfile from '../../pages/UserProfile';
import VaccinationHistory from '../../pages/VaccinationHistory';

const Layout: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/app/tab1" component={Tab1} exact={true} />
          <Route path="/app/tab2" component={Tab2} exact={true} />
          <Route path="/app/tab3" component={Tab3} />
          <Route path="/app/userProfile" component={UserProfile} exact={true} />
          <Route path="/app/vaccinationHistory" component={VaccinationHistory} exact={true} />

        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="Profile" href="/app/userProfile">
            <IonIcon icon={personCircleOutline} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/app/vaccinationHistory">
            <IonIcon icon={medkitOutline} />
            <IonLabel>Vaccination Schedule</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default Layout;
