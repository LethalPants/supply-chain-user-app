import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonSelect, IonSelectOption, IonItem, IonLabel, IonCheckbox } from '@ionic/react';
// import './Login.css'
import { useForm } from "react-hook-form";
import { object, string, date, number } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Input, { InputProps } from "../components/Input"

const Register: React.FC = () => {

    // const [gender, setGender] = useState<string>();
    // const [occupation, setOccupation] = useState('');
    // const [firstName, setFirstName] = useState<string>('');
    // const [lastName, setLastName] = useState('');
    // const [middleName, setMiddleName] = useState('');
    // const [dateOfBirth, setDOB] = useState('');
    // const [pan, setPAN] = useState('');
    // const [aadhaarNumber, setAadhaarNumber] = useState('');
    // const [state, setState] = useState('');
    // const [cityTown, setCityTown] = useState('');
    // const [zipCode, setZipCode] = useState('');
    // const [currentAddress, setCurrentAddress] = useState('');
    // const [permanentAddress, setPermanentAddress] = useState('');
    // const [telephoneNumber, setTelephoneNumber] = useState('');
    // const [mobileNumber, setMobileNumber] = useState('');
    // const [altMobile, setaltMobile] = useState('');
    // const [emailAddress, setemailAddress] = useState('');
    // const [passportPhoto, setPassportPhoto] = useState('');
    

    // const validationSchema = object().shape({
    //     firstName: string().required('First name is a required field.').min(1).max(40),
    //     middleName: string().required('Middle name is a required field.').min(1).max(40),
    //     lastName: string().required('Last name is a required field.').min(1).max(40),
    //     dateOfBirth: date().required('DOB is a required field.'),
    //     genderSelect: string().required('Gender is a required field.'),
    //     pan: string().required('PAN is a required field.').min(10).max(10),
    //     aadhaarNumber: number().required('Aadhaar Number is a required field.').min(12).max(12).positive().integer(),
    //     state: string().required('State is a required field.').min(1).max(40),
    //     cityTown: string().required('City/Town is a required field.').min(1).max(40),
    //     zipCode: number().required('ZIP is a required field.').min(6).max(6).positive().integer(),
    //     currentAddress: string().required('Address is a required field.').min(1).max(40),
    //     permanentAddress: string().required('Permanent Address is a required field.').min(1).max(40),
    //     telephoneNumber: number().required('Telephone Number is a required field.').min(10).max(11).positive().integer(),
    //     mobileNumber: number().required('Mobile Number is a required field.').min(10).max(10).positive().integer(),
    //     altMobile: number().required('Alternate mobile number is a required field.').min(10).max(10).positive().integer(),
    //     emailAddress: string().required('Email ID is a required field.').email('Please provide a valid email address'),
    //     occupation: string().required('Occupation is a required field.'),
    // });
    
    const { register, control, handleSubmit } = useForm();
    

    const formFields: InputProps[] = [
        {
          name: "firstName",
          component: <IonInput type="text" name="firstName" ref={register} />,
          label: "First Name",
        },
        {
            name: "middleName",
            component: <IonInput type="text" />,
            label: "Middle Name",
        },
        {
            name: "lastName",
            component: <IonInput type="text" />,
            label: "Last Name",
        },
        {
            name: "dateOfBirth",
            component: <IonInput placeholder="Date of Birth" type="date" />,
            label: "DOB",
        },
        {
            name: "genderSelect",
            component:  <IonSelect value="genderSelect">
                            <IonSelectOption value="female">Male</IonSelectOption>
                            <IonSelectOption value="male">Female</IonSelectOption>
                            <IonSelectOption value="other">Other</IonSelectOption>
                        </IonSelect>,
            label: "Gender",
        },
        {
            name: "pan",
            component: <IonInput type="text" />,
            label: "PAN",
        },
        {
            name: "aadhaarNumber",
            component: <IonInput type="number" />,
            label: "Aadhaar Number",
        },
        {
            name: "state",
            component: <IonInput type="text" />,
            label: "State",
        },
        {
            name: "cityTown",
            component: <IonInput type="text" />,
            label: "City/Town",
        },
        {
            name: "zipCode",
            component: <IonInput type="number" />,
            label: "ZIP Code",
        },
        {
            name: "currentAddress",
            component: <IonInput type="text" />,
            label: "Current Address",
        },
        {
            name: "permanentAddress",
            component: <><IonInput type="text" /><IonItem lines="none">
            <IonLabel>Same as above</IonLabel>
            <IonCheckbox defaultChecked={false} slot="start" />
          </IonItem></>,
            label: "Permanent Address",
        },
        {
            name: "telephoneNumber",
            component: <IonInput type="number" />,
            label: "Telephone Number",
        },
        {
            name: "mobileNumber",
            component: <IonInput type="number" />,
            label: "Mobile Number",
        },
        {
            name: "altMobile",
            component: <IonInput type="number" />,
            label: "Alternate Mobile Number",
        },
        {
            name: "emailAddress",
            component: <IonInput type="text" />,
            label: "Email ID",
        },
        {
            name: "occupation",
            component:  <IonSelect value="occupation">
                            <IonSelectOption value="medical">Medical</IonSelectOption>
                            <IonSelectOption value="retired">Retired</IonSelectOption>
                            <IonSelectOption value="other">Other</IonSelectOption>
                        </IonSelect>,
            label: "Occupation",
        }
      ];

    // const { register, handleSubmit, watch, errors } = useForm();
    
    
  
    const registerUser = (data: any) => {
        // send to backend
        console.log('creating a new user account with: ', data);
    }

    return (
    <IonPage>
        <IonContent className="ion-padding">
            <IonCard>
                <IonCardHeader>
                    <IonCardTitle color="muted"><h2>Register</h2></IonCardTitle>
                </IonCardHeader>

                <IonCardContent>
                    <form onSubmit={handleSubmit(registerUser)}>
                        {formFields.map((field, index) => (
                            <Input {...field} control={control} key={index} />
                        ))}
                        <input placeholder="Upload your passport sized photograph (up to 3 MB)" name="passportPhoto" type="file" accept="image/*" />
                        <IonButton expand="block" type="submit" className="ion-margin-top" onClick={registerUser}>Register</IonButton>
                    </form>
                    
                </IonCardContent>
            </IonCard>
        </IonContent>
    </IonPage>
  );
};

export default Register;
