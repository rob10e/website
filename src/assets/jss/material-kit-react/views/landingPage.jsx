// @flow
import { container, title } from '../../../../assets/jss/material-kit-react';
import type { ContainerType, TitleType } from '../../../../assets/jss/material-kit-react';

export type Container = ContainerType & {
  zIndex: string,
  color: string,
};

export type Main = {
  background: string,
  position: string,
  zIndex: string,
};

export type MainRaised = {
  margin: string,
  borderRadius: string,
  boxShadow: string,
};

export type Subtitle = {
  fontSize: string,
  maxWidth: string,
  margin: string,
};

export type Title = TitleType & {
  display: string,
  position: string,
  marginTop: string,
  minHeight: string,
  color: string,
  textDecoration: string,
};

export type LandingPageStyleType = {
  container: Container,
  title: Title,
  subtitle: Subtitle,
  main: Main,
  mainRaised: MainRaised,
};

const landingPageStyle: LandingPageStyleType = {
  container: {
    zIndex: '1',
    color: '#FFFFFF',
    ...container,
  },
  title: {
    ...title,
    display: 'inline-block',
    position: 'relative',
    marginTop: '30px',
    minHeight: '32px',
    color: '#FFFFFF',
    textDecoration: 'none',
  },
  subtitle: {
    fontSize: '1.313rem',
    maxWidth: '500px',
    margin: '10px auto 0',
  },
  main: {
    background: '#FFFFFF',
    position: 'relative',
    zIndex: '3',
  },
  mainRaised: {
    margin: '-60px 30px 0px',
    borderRadius: '6px',
    boxShadow:
      '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
  },
};

export default landingPageStyle;
