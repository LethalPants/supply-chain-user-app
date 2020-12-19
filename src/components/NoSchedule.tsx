import React, { FC } from "react";
import { IonItem, IonLabel, IonInput, IonText } from "@ionic/react";
import './NoSchedule.css'

const NoSchedule: FC = () => {
  return (
    <>
      <IonText className="no-vaccine-class">You have no vaccinations scheduled.</IonText>
    </>
  );
};

export default NoSchedule;