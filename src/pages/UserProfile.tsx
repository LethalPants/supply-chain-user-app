import { IonContent, IonHeader, IonImg, IonItem, IonLabel, IonPage, IonText, IonTitle, IonToolbar, useIonViewWillEnter } from '@ionic/react';
import axios from 'axios';
import React, { useState } from 'react';
import './UserProfile.css';

const UserProfile: React.FC = () => {

    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ occupation, setOccupation ] = useState('');
    const [ aadhaarNo, setAadhaarNo ] = useState('');
    const [ mobileNo, setMobileNo ] = useState('');
    const [ address, setAddress ] = useState('');
    const [ status, setStatus ] = useState('');

    useIonViewWillEnter(() => {
        console.log('ionViewWillEnter event fired!');
        axios.get('http://localhost:3000/user/profile')
            .then((response) => {
                console.log(response.data);
                setFirstName(response.data.first_name);
                setLastName(response.data.last_name);
                setOccupation(response.data.occupation);
                setAadhaarNo(response.data.aadharNumber);
                setMobileNo(response.data.phone_number);
                setAddress(response.data.current_address);
                setStatus(response.data.status);
            });
      });
      
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                <IonTitle>Profile</IonTitle>
                </IonToolbar>
            </IonHeader>
        <IonContent fullscreen>
            <IonHeader collapse="condense">
            <IonToolbar>
                <IonTitle size="large">Profile</IonTitle>
            </IonToolbar>
            </IonHeader>
            <IonImg className="profile-picture" src="https://www.vivahonline.com/profileimages/profile_IMG_20170707_034945_547.jpg" />
            <IonText className="username-heading"><h2>{firstName} {lastName}</h2></IonText>
            <IonText className="username-occupation"><em><h5>{occupation}</h5></em></IonText>

            <IonItem>
                <IonLabel>Aadhaar Number</IonLabel>
                <IonText>{aadhaarNo}</IonText>
            </IonItem>
            <IonItem>
                <IonLabel>Mobile Number</IonLabel>
                <IonText>{mobileNo}</IonText>
            </IonItem>
            <IonItem>
                <IonLabel>Address</IonLabel>
                <IonText>{address}</IonText>
            </IonItem>
            <IonItem>
                <IonLabel>Status</IonLabel>
                <IonText>{status}</IonText>
            </IonItem>
        </IonContent>
        </IonPage>
  );
};

export default UserProfile;
