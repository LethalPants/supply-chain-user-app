import React, { useState } from 'react';
import { IonButton, IonContent, IonDatetime, IonHeader, IonImg, IonItem, IonLabel, IonModal, IonPage, IonSelect, IonSelectOption, IonText, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import './UserProfile.css'
import NoSchedule from '../components/NoSchedule';
import VaccinationDeets, { InputProps } from "../components/VaccinationDeets"

const VaccinationHistory: React.FC = () => {

    const [date, setDate] = useState<string>('');
    const [time, setTime] = useState<string>();
    const [center, setCenter] = useState<string>('');
    const [showModal, setShowModal] = useState(false);
    const [isRegistered, setRegistered] = useState(false);

    const formFields: InputProps[] = [
        {date, center}
    ];

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Vaccination Schedule</IonTitle>
                </IonToolbar>
            </IonHeader>
        <IonContent fullscreen>
            <IonHeader collapse="condense">
                <IonToolbar>
                    <IonTitle size="small">Your Vaccination Schedule</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonModal isOpen={showModal} cssClass='my-custom-class' animated={true} onDidDismiss={() => setShowModal(false)}>
                <IonItem>
                    {!!(date)?<></> : <IonLabel className="select-date-class">Select your preferred date</IonLabel>}
                    <IonDatetime class="ion-text-centre" mode="ios" id="dynamicDisabled" displayFormat="DD MMMM, YYYY" value={date} min={new Date().toISOString()} max="2025" onIonChange={e => setDate(e.detail.value!)}></IonDatetime>
                </IonItem>
                <IonItem>
                    {/* {!!(center)?<></> : <IonLabel>Select your preferred centre</IonLabel>} */}
                    <IonSelect mode="ios" placeholder="Select your preferred centre" value={center} interface="action-sheet" onIonChange={e => setCenter(e.detail.value!)}>
                            <IonSelectOption value="Columbia Asia Hospital">Columbia Asia Hospital</IonSelectOption>
                            <IonSelectOption value="Noble Hospital">Noble Hospital</IonSelectOption>
                            <IonSelectOption value="Sahayadri Super Specialty Hospital">Sahayadri Super Specialty Hospital</IonSelectOption>
                            <IonSelectOption value="Jehangir Hospital">Jehangir Hospital</IonSelectOption>
                            <IonSelectOption value="Sai Multi Specialty Hospital">Sai Multi Specialty Hospital</IonSelectOption>
                            <IonSelectOption value="Ruby Hall Clinic">Ruby Hall Clinic</IonSelectOption>
                    </IonSelect>
                </IonItem>
                <IonButton className="modal-register-button" mode="ios" color="success" onClick={() => {
                    setRegistered(true)
                    setShowModal(false)}}>Register</IonButton>
            </IonModal>
            {!!(isRegistered)?<VaccinationDeets {...formFields[0]}></VaccinationDeets> : <><NoSchedule></NoSchedule></> }
            <IonButton mode="ios" className="register-button" color="success" expand="block" onClick={() => setShowModal(true)}>Register for a vaccine now</IonButton>
        </IonContent>
        </IonPage>
  );
};

export default VaccinationHistory;
