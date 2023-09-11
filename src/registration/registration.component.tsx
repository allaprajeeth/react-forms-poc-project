import React, { Fragment, useEffect, useState } from 'react';
import { JsonForms } from '@jsonforms/react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import schema from './_schema.json';
import uischema from './_ui-schema.json';
import {
  materialCells,
  materialRenderers,
} from '@jsonforms/material-renderers';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


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

const renderers = [
  ...materialRenderers,
]

const Registration = () => {
  const classes = useStyles();
  const [data, setData] = useState<any>(initialData);

  useEffect(() => {
    console.log("data : ", data);
  })

  const handleChange = (formData: any) => {
    console.log(formData);

    setData(formData);
  };

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
              <div>
                <JsonForms
                  schema={schema}
                  uischema={uischema}
                  data={initialData}
                  renderers={renderers}
                  cells={materialCells}
                  onChange={(formData) => {
                    handleChange(formData)
                  }}

                />
              </div>
            </CardContent>
          </Card>

        </Grid>
      </Grid>
    </Fragment>
  );
}

export default Registration;