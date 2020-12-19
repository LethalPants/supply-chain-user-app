import React, { useState } from 'react';
import { IonContent, IonIcon, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react';
// import './Login.css'

const Login: React.FC = () => {
    const [mobileno, setmobileno] = useState('');
    const [password, setPassword] = useState('');
  
    function loginUser() {
        // send to backend
        console.log(`mobileno is = ${mobileno} and password is = ${password}`);
    }

    return (
    <IonPage>
        <IonContent className='ion-padding'>
            <IonCard>
                <IonCardHeader>
                    <IonCardTitle>Login</IonCardTitle>
                </IonCardHeader>

                <IonCardContent>
                    <IonInput placeholder="Mobile Number" onIonChange={(e: any)=> setmobileno(e.target.value)} required/>
                    <IonInput placeholder="Password" type="password" onIonChange={(e: any)=> setPassword(e.target.value)} required/>
                    <IonButton onClick={loginUser}>Login</IonButton>
                </IonCardContent>
            </IonCard>
        </IonContent>
    </IonPage>
  );
};

export default Login;
