// @flow
/*!

 =========================================================
 * Material Kit React - v1.0.0 based on Material Kit - v2.0.2
 =========================================================

 * Product Page: http://www.creative-tim.com/product/material-kit-react
 * Copyright 2018 Creative Tim (http://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/material-kit-react/blob/master/LICENSE.md)

 =========================================================

 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.

 */

// ##############################
// // // Variables - Styles that are used on more than one component
// #############################

const drawerWidth: number = 260;

export type TransitionType = {
  transition: string;
}

const transition: TransitionType = {
  transition: 'all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)',
};

export type ContainerFluidType = {
  paddingRight: string,
  paddingLeft: string,
  marginRight: string,
  marginLeft: string,
  width: string,
}

const containerFluid: ContainerFluidType = {
  paddingRight: '15px',
  paddingLeft: '15px',
  marginRight: 'auto',
  marginLeft: 'auto',
  width: '100%',
};

export type MaxWidthType = {
  maxWidth: string,
}

export type ContainerType = ContainerFluidType & {
  '@media (min-width: 576px)': MaxWidthType,
  '@media (min-width: 768px)': MaxWidthType,
  '@media (min-width: 992px)': MaxWidthType,
  '@media (min-width: 1200px)': MaxWidthType,
}

const container: ContainerType = {
  ...containerFluid,
  '@media (min-width: 576px)': {
    maxWidth: '540px',
  },
  '@media (min-width: 768px)': {
    maxWidth: '720px',
  },
  '@media (min-width: 992px)': {
    maxWidth: '960px',
  },
  '@media (min-width: 1200px)': {
    maxWidth: '1140px',
  },
};

export type BoxShadowType = {
  boxShadow: string
}

const boxShadow: BoxShadowType = {
  boxShadow:
    '0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
};

export type CardType = {
  display: string,
  position: string,
  width: string,
  margin: string,
  boxShadow: string,
  borderRadius: string,
  color: string,
  background: string
};

const card: CardType = {
  display: 'inline-block',
  position: 'relative',
  width: '100%',
  margin: '25px 0',
  boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.14)',
  borderRadius: '3px',
  color: 'rgba(0, 0, 0, 0.87)',
  background: '#fff',
};

export type DefaultFontType = {
  fontFamily: string,
  fontWeight: string,
  lineHeight: string
};

const defaultFont: DefaultFontType = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: '300',
  lineHeight: '1.5em',
};

const primaryColor: string = '#9c27b0';
const warningColor: string = '#ff9800';
const dangerColor: string = '#f44336';
const successColor: string = '#4caf50';
const infoColor: string = '#00acc1';
const roseColor: string = '#e91e63';
const grayColor: string = '#999999';

const primaryBoxShadow: BoxShadowType = {
  boxShadow:
    '0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)',
};
const infoBoxShadow: BoxShadowType = {
  boxShadow:
    '0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2)',
};
const successBoxShadow: BoxShadowType = {
  boxShadow:
    '0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2)',
};
const warningBoxShadow: BoxShadowType = {
  boxShadow:
    '0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2)',
};
const dangerBoxShadow: BoxShadowType = {
  boxShadow:
    '0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2)',
};
const roseBoxShadow: BoxShadowType = {
  boxShadow: '0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(233, 30, 99, 0.4)',
};

export type CardHeaderTemplateType = BoxShadowType & {
  color: string,
  background: string
}

const warningCardHeader: CardHeaderTemplateType = {
  color: '#fff',
  background: 'linear-gradient(60deg, #ffa726, #fb8c00)',
  ...warningBoxShadow,
};
const successCardHeader: CardHeaderTemplateType = {
  color: '#fff',
  background: 'linear-gradient(60deg, #66bb6a, #43a047)',
  ...successBoxShadow,
};
const dangerCardHeader: CardHeaderTemplateType = {
  color: '#fff',
  background: 'linear-gradient(60deg, #ef5350, #e53935)',
  ...dangerBoxShadow,
};
const infoCardHeader: CardHeaderTemplateType = {
  color: '#fff',
  background: 'linear-gradient(60deg, #26c6da, #00acc1)',
  ...infoBoxShadow,
};
const primaryCardHeader: CardHeaderTemplateType = {
  color: '#fff',
  background: 'linear-gradient(60deg, #ab47bc, #8e24aa)',
  ...primaryBoxShadow,
};
const roseCardHeader = {
  color: '#fff',
  background: 'linear-gradient(60deg, #ec407a, #d81b60)',
  ...roseBoxShadow,
};

export type CardActionsType = DefaultFontType & {
  margin: string,
  paddingTop: string,
  borderTop: string,
  height: string,
}

const cardActions: CardActionsType = {
  margin: '0 20px 10px',
  paddingTop: '10px',
  borderTop: '1px solid #eeeeee',
  height: 'auto',
  ...defaultFont,
};

export type CardHeaderType = {
  margin: string,
  borderRadius: string,
  padding: string
}

const cardHeader: CardHeaderType = {
  margin: '-30px 15px 0',
  borderRadius: '3px',
  padding: '15px',
};

export type DefaultBoxShadowType = {
  border: string,
  borderRadius: string,
  boxShadow: string,
  padding: string,
  transition: string
}

const defaultBoxShadow: DefaultBoxShadowType = {
  border: '0',
  borderRadius: '3px',
  boxShadow:
    '0 10px 20px -12px rgba(0, 0, 0, 0.42), 0 3px 20px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
  padding: '10px 0',
  transition: 'all 150ms ease 0s',
};

export type TitleType = {
  color: string,
  margin: string,
  textDecoration: string,
  fontWeight: string,
  fontFamily: string
};

const title: TitleType = {
  color: '#3C4858',
  margin: '1.75rem 0 0.875rem',
  textDecoration: 'none',
  fontWeight: '700',
  fontFamily: '"Roboto Slab", "Times New Roman", serif',
};

export type CardTitleType = TitleType & {
  marginTop: string
};

const cardTitle: CardTitleType = {
  ...title,
  marginTop: '.625rem',
};

export type CardLinkSubType = {
  marginLeft: string
};

export type CardLinkType = {
  '& + $cardLink': CardLinkSubType
};

const cardLink: CardLinkType = {
  '& + $cardLink': {
    marginLeft: '1.25rem',
  },
};

export type CardSubtitleType = {
  marginBottom: string,
  marginTop: string
}

const cardSubtitle: CardSubtitleType = {
  marginBottom: '0',
  marginTop: '-.375rem',
};

export {
  // variables
  drawerWidth,
  transition,
  container,
  containerFluid,
  boxShadow,
  card,
  defaultFont,
  primaryColor,
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor,
  grayColor,
  primaryBoxShadow,
  infoBoxShadow,
  successBoxShadow,
  warningBoxShadow,
  dangerBoxShadow,
  roseBoxShadow,
  warningCardHeader,
  successCardHeader,
  dangerCardHeader,
  infoCardHeader,
  primaryCardHeader,
  roseCardHeader,
  cardActions,
  cardHeader,
  defaultBoxShadow,
  title,
  cardTitle,
  cardLink,
  cardSubtitle,
};
