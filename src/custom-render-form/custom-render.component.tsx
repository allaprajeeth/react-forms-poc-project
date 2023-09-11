import { Fragment, useState, useMemo } from 'react';
import { JsonForms } from '@jsonforms/react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import schema from './schema.json';
import uischema from './uischema.json';
import {
    materialCells,
    materialRenderers,
} from '@jsonforms/material-renderers';
import RatingControl from './RatingControl';
import ratingControlTester from './ratingControlTester';
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
    },
    dataContent: {
        display: 'flex',
        justifyContent: 'center',
        borderRadius: '0.25em',
        backgroundColor: '#cecece',
        marginBottom: '1rem',
    },
    resetButton: {
        margin: 'auto !important',
        display: 'block !important',
    },
    demoform: {
        margin: 'auto',
        padding: '1rem',
    },
});

const initialData = {
    name: 'Send email to Adrian',
    description: 'Confirm if you have passed the subject\nHereby ...',
    done: true,
    recurrence: 'Daily',
    rating: 3,
};

const renderers = [
    ...materialRenderers,
    //register custom renderers
    { tester: ratingControlTester, renderer: RatingControl },
];

function CustomRender(props: any) {
    const classes = useStyles();
    const [data, setData] = useState<any>(initialData);
    const stringifiedData = useMemo(() => JSON.stringify(data, null, 2), [data]);

    const clearData = () => {
        setData({});
    };

    return (
        <Fragment>
            <Grid
                container
                justifyContent={'center'}
                spacing={1}
                className={classes.container}
            >
                <Grid item md={6} sm={12}>
                    <Typography variant={'h5'} className={classes.title}>
                        Rendered form
                    </Typography>
                    <div className={classes.demoform}>
                        <JsonForms
                            schema={schema}
                            uischema={uischema}
                            data={data}
                            renderers={renderers}
                            cells={materialCells}
                            onChange={({ errors, data }) => setData(data)}
                        />
                    </div>
                </Grid>
                <Grid item md={6} sm={12}>
                    <Typography variant={'h5'} className={classes.title}>
                        Bound data
                    </Typography>
                    <Card variant='outlined'  >
                        <CardContent>
                            <Typography variant={'h6'} id='boundData'>{stringifiedData}</Typography>
                        </CardContent>
                    </Card>
                    <Button
                        className={classes.resetButton}
                        onClick={clearData}
                        color='primary'
                        variant='contained'
                    >
                        Clear data
                    </Button>
                </Grid>

            </Grid>
        </Fragment>
    );
}

export default CustomRender;

