import React, { FC } from "react";
import { IonItem, IonLabel, IonInput, IonText, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonDatetime } from "@ionic/react";
import './VaccinationDeets.css'

export interface InputProps {
    date: string;
    center: string;
}

const VaccinationDeets: FC<InputProps> = ({
    date,
    center,
}) => {
  return (
    <>
        <IonCard className="vaccination-deets-card" mode="ios">
            {/* <IonCardHeader>
                <IonCardSubtitle>Date</IonCardSubtitle>
                <IonCardSubtitle>Centre</IonCardSubtitle>
            </IonCardHeader> */}

            <IonCardContent>
                <IonText className="deets-card-heading">Date - </IonText> {date}
                <div>
                    <IonText className="deets-card-heading">Center - </IonText> {center}
                </div>
                
            </IonCardContent>
        </IonCard>    
    </>
  );
};

export default VaccinationDeets;