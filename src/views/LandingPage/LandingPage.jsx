// @flow
import * as React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// material-ui components
import withStyles from 'material-ui/styles/withStyles';

// @material-ui/icons

// core components
import * as Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
// import Button from '../../components/CustomButtons/Button';
import HeaderLinks from '../../components/Header/HeaderLinks';
import Parallax from '../../components/Parallax/Parallax';

import * as landingPageStyle from '../../assets/jss/material-kit-react/views/landingPage';
import type { LandingPageStyleType } from '../../assets/jss/material-kit-react/views/landingPage';
// Sections for this page
import ProductSection from './Sections/ProductSection';
import TeamSection from './Sections/TeamSection';
import WorkSection from './Sections/WorkSection';

const dashboardRoutes = [];

type Props = {
  classes: LandingPageStyleType,
};

const LandingPage = (props: Props) => {
  const { classes, ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Tenney Software"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: 'white',
        }}
        {...rest}
      />
      {/* eslint-disable global-require */}
      <Parallax filter image={require('../../assets/img/landing-bg.jpg')}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Modern Applications for the Modern Internet.</h1>
              <h4>
                Utilizing years of experience for the government, we can bring you the latest in
                modern web application development.
              </h4>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
          <TeamSection />
          <WorkSection />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default withStyles(landingPageStyle)(LandingPage);
