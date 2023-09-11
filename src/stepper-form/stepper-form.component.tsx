import { JsonForms } from '@jsonforms/react';
import React, { Fragment, useEffect, useState } from 'react';
import schema from './_schema.json';
import uischema from './_uischema.json';
import { materialCells, materialRenderers } from '@jsonforms/material-renderers';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import { makeStyles } from '@mui/styles';
import CardContent from '@mui/material/CardContent';

// styles
const useStyles = makeStyles({
    container: {
        padding: '1em',
        width: '100%',
    },
    title: {
        textAlign: 'center',
        padding: '0.25em',
    },
});


const initialData = {
    "provideAddress": true,
    "vegetarian": false
};

function StepperForm(props: any) {
    const classes = useStyles();
    const [data, setData] = useState(initialData);

    useEffect(() => {
        console.log("data : ", data);
    })

    const handleChange = (formData: any) => {
        setData(formData);
    }

    const renderers = [
        ...materialRenderers,
    ]

    return (
        <Fragment>
            <Grid
                container
                justifyContent={'center'}
                spacing={1}
                className={classes.container}
            >
                <Grid item sm={12} md={6}>
                    <Card variant="outlined">
                        <CardContent>
                            <Typography variant={'h5'} className={classes.title}>
                                Stepper Form Demo
                            </Typography>
                            <div>
                                <JsonForms
                                    data={initialData}
                                    schema={schema}
                                    uischema={uischema}
                                    renderers={renderers}
                                    cells={materialCells}
                                    onChange={(formData) => handleChange(formData)}
                                />
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Fragment>

    );
}

export default StepperForm;