import React, { Fragment, useEffect, useState } from 'react';
import { JsonForms } from '@jsonforms/react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import jsonSchema from './_schema.json';
import uiSchema from './_ui-schema.json';
import { addDoc, collection, query, where } from '@firebase/firestore';
import {
  materialCells,
  materialRenderers,
} from '@jsonforms/material-renderers';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';
import { db } from '../config/firebase';
import { getDocs } from 'firebase/firestore';
import { BaseSchema } from '../common/models/schema.model';
import { getCollectionData } from '../common/services/firebase-query';

const useStyles = makeStyles({
  container: {
    padding: '1em',
    width: '100%',
  },
  title: {
    textAlign: 'center',
    padding: '0.25em',
  }
});
const initialData = {
  name: '',
  countryCode: '+91',
  mobile: '',
  email: '',
  password: '',
  gender: 'Male'
}

interface userDataType {
  data: {
    name: string;
    countryCode: string;
    mobile: string;
    email: string;
    password: string;
    gender: string;
  };
  errors: any[];
}

const renderers = [
  ...materialRenderers,
]

const Registration = () => {
  const classes = useStyles();
  const [schemaData, setSchemaData] = useState<BaseSchema>();
  const [data, setData] = useState<userDataType>({
    data: initialData,
    errors: []
  });

  const getRegistrationSchemas = async () => {
  let schemaDoc = await getCollectionData('schemas', 'registration') as BaseSchema;
    console.log(schemaDoc);
    if(!!schemaDoc){
      setSchemaData(schemaDoc);
    }
    //var schema=schemaDoc.jsonSchema;

  }

  useEffect(() => {
    getRegistrationSchemas()
    // console.log("data : ", data);
  }, []);
  const isEmailUnique = async (email: string) => {
    const q = query(collection(db, 'users'), where('email', '==', email));
    const querySnapshot = await getDocs(q);
    return querySnapshot.empty; // Returns true if email is unique
  };

  const handleChange = (formData: any) => {
    // console.log(formData);

    setData(formData);
  };
  const handleSubmit = async () => {
    if (data.errors.length > 0) {
      alert("errors in form");
      return;
    }
    try {
      const email = data.data.email;
      if (await isEmailUnique(email)) {
        await addDoc(collection(db, "users"), {
          ...data.data,
        });
        console.log("Document successfully written!");
      }
      else {
        console.log("Email already in use");
        return
      }
    } catch (err) {
      console.error(err)
    }
    console.log(data);
  }

  return (
    <Fragment>
      <Grid
        container
        justifyContent={'center'}
        spacing={1}
        className={classes.container}
      >
        <Grid item sm={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant={'h5'} className={classes.title}>
                Create Account
              </Typography>
              <div>{
                schemaData?.jsonSchema && schemaData?.uiSchema &&
                <JsonForms
                  schema={schemaData?.jsonSchema}
                  uischema={schemaData?.uiSchema}
                  data={initialData}
                  renderers={renderers}
                  cells={materialCells}
                  onChange={(formData) => {
                  handleChange(formData)
                  }}

                />
                }

              </div>
              <Button  variant="contained" onClick={handleSubmit}>Register</Button>
            </CardContent>
          </Card>

        </Grid>
      </Grid>
    </Fragment>
  );
}

export default Registration;