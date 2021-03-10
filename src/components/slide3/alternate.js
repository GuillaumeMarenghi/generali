import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  link: {
    margin: theme.spacing(0,0),
  },
  heroContent: {
    padding: theme.spacing(0, 0, 0),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  garContent: {
      marginBottom : "3em",
      marginTop : "1.2em"
  }
}));

const garDescript = ["Remboursement des frais médicaux", "Forfait prévention", "Garantie d'assistance","Franchise","Capital décès"]

const tiers = [
  {
    title: 'Prudente',
    price: '60%',
    description: ['30€ par an', 'oui', '0€ par an', '200€'],
    buttonText: 'Choisir',
    buttonVariant: 'outlined',
  },
  {
    title: 'Rusée',
    price: '80%',
    description: [
      '40 € par an',
      'oui',
      '20 € par an',
      '400 €',
    ],
    buttonText: 'Choisir',
    buttonVariant: 'outlined',
  },
  {
    title: 'Avisée',
    price: '90%',
    description: [
      '60 € par an',
      'oui',
      '60 € par an',
      '600 €',
    ],
    buttonText: 'choisir',
    buttonVariant: 'outlined',
  },
];


export default function Pricing({nextPage}) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Les Formules
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={1} alignItems="flex-end">
        <Grid item key="garantie" xs={12} sm={6} md={3}>
            <Card>
                <CardHeader
                  title="Garantie"
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  className={classes.cardHeader}
                />
                <CardContent className={classes.garContent}>
                  <ul>
                    {garDescript.map((line) => (
                      <Typography component="li" variant="subtitle1" align="center" key={line}>
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
            </Card>
        </Grid>
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={3}>
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h3" color="textPrimary">
                      {tier.price}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                      /an
                    </Typography>
                  </div>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography component="li" variant="subtitle1" align="center" key={line}>
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant} color="primary" onClick={nextPage}>
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* Footer */}
      {/* End footer */}
    </React.Fragment>
  );
}