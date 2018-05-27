// @flow
// ##############################
// // // Header styles
// #############################

import {
  container,
  defaultFont,
  primaryColor,
  infoColor,
  successColor,
  warningColor,
  dangerColor,
  roseColor,
  transition,
  boxShadow,
  drawerWidth,
} from '../../../../assets/jss/material-kit-react';
import type {
  ContainerType,
  DefaultFontType,
  BoxShadowType,
  TransitionType,
} from '../../../../assets/jss/material-kit-react';

export type AppBarType = {
  display: string,
  border: string,
  borderRadius: string,
  padding: string,
  marginBottom: string,
  color: string,
  width: string,
  backgroundColor: string,
  boxShadow: string,
  transition: string,
  alignItems: string,
  flexFlow: string,
  justifyContent: string,
  position: string,
};

export type PositionType = {
  position: 'absolute' | 'fixed'
};

export type ContainerWrapperType = ContainerType & {
    minHeight: '50px',
    flex: '1',
    alignItems: 'center',
    justifyContent: 'space-between',
    display: 'flex',
    flexWrap: 'nowrap',
  };

export type FlexType = {
  flex: number
};

export type HoverFocusType = {
  color: string,
  background: string
};

export type TitleWrapperType = DefaultFontType & {
  lineHeight: string,
  fontSize: string,
  borderRadius: string,
  textTransform: string,
  color: string,
  '&:hover,&:focus': HoverFocusType,
};

export type AppResponsiveType = {
  margin: string
}

export type ColorType = {
  backgroundColor: string,
  color: string,
  boxShadow: string,
  padding?:string,
  border?: string,
  marginBottom?: string
};

export type DrawerPaperType = BoxShadowType & TransitionType & {
  border: string,
  bottom: string,
  transitionProperty: string,
  transitionDuration: string,
  transitionTimingFunction: string,
  width: number,
  position: string,
  display: string,
  top: string,
  height: string,
  right: string,
  left: string,
  visibility: string,
  overflowY: string,
  borderTop: string,
  textAlign: string,
  paddingRight: string,
  paddingLeft: string,
};

export type HeaderStyleType = {
  appBar: AppBarType,
  absolute: PositionType,
  fixed: PositionType,
  container: ContainerWrapperType,
  flex: FlexType,
  title: TitleWrapperType,
  appResponsive: AppResponsiveType,
  primary: ColorType,
  info: ColorType,
  success: ColorType,
  warning: ColorType,
  danger: ColorType,
  rose: ColorType,
  transparent:ColorType,
  dark: ColorType,
  white: ColorType,
  drawerPaper: DrawerPaperType
};

const headerStyle = {
  appBar: {
    display: 'flex',
    border: '0',
    borderRadius: '3px',
    padding: '0.625rem 0',
    marginBottom: '20px',
    color: '#555',
    width: '100%',
    backgroundColor: '#fff',
    boxShadow: '0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)',
    transition: 'all 150ms ease 0s',
    alignItems: 'center',
    flexFlow: 'row nowrap',
    justifyContent: 'flex-start',
    position: 'relative',
  },
  absolute: {
    position: 'absolute',
  },
  fixed: {
    position: 'fixed',
  },
  container: {
    ...container,
    minHeight: '50px',
    flex: '1',
    alignItems: 'center',
    justifyContent: 'space-between',
    display: 'flex',
    flexWrap: 'nowrap',
  },
  flex: {
    flex: 1,
  },
  title: {
    ...defaultFont,
    lineHeight: '30px',
    fontSize: '18px',
    borderRadius: '3px',
    textTransform: 'none',
    color: 'inherit',
    '&:hover,&:focus': {
      color: 'inherit',
      background: 'transparent',
    },
  },
  appResponsive: {
    margin: '20px 10px',
    // width: drawerWidth,
  },
  primary: {
    backgroundColor: primaryColor,
    color: '#FFFFFF',
    boxShadow: '0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(156, 39, 176, 0.46)',
  },
  info: {
    backgroundColor: infoColor,
    color: '#FFFFFF',
    boxShadow: '0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(0, 188, 212, 0.46)',
  },
  success: {
    backgroundColor: successColor,
    color: '#FFFFFF',
    boxShadow: '0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(76, 175, 80, 0.46)',
  },
  warning: {
    backgroundColor: warningColor,
    color: '#FFFFFF',
    boxShadow: '0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(255, 152, 0, 0.46)',
  },
  danger: {
    backgroundColor: dangerColor,
    color: '#FFFFFF',
    boxShadow: '0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(244, 67, 54, 0.46)',
  },
  rose: {
    backgroundColor: roseColor,
    color: '#FFFFFF',
    boxShadow: '0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(233, 30, 99, 0.46)',
  },
  transparent: {
    backgroundColor: 'transparent !important',
    boxShadow: 'none',
    paddingTop: '25px',
    color: '#FFFFFF',
  },
  dark: {
    color: '#FFFFFF',
    backgroundColor: '#212121 !important',
    boxShadow: '0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(33, 33, 33, 0.46)',
  },
  white: {
    border: '0',
    padding: '0.625rem 0',
    marginBottom: '20px',
    color: '#555',
    backgroundColor: '#fff !important',
    boxShadow: '0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)',
  },
  drawerPaper: {
    border: 'none',
    bottom: '0',
    transitionProperty: 'top, bottom, width',
    transitionDuration: '.2s, .2s, .35s',
    transitionTimingFunction: 'linear, linear, ease',
    width: drawerWidth,
    ...boxShadow,
    position: 'fixed',
    display: 'block',
    top: '0',
    height: '100vh',
    right: '0',
    left: 'auto',
    visibility: 'visible',
    overflowY: 'visible',
    borderTop: 'none',
    textAlign: 'left',
    paddingRight: '0px',
    paddingLeft: '0',
    ...transition,
    // "&:before,&:after": {
    //   position: "absolute",
    //   zIndex: "3",
    //   width: "100%",
    //   height: "100%",
    //   content: '""',
    //   display: "block",
    //   top: "0"
    // },
    // "&:after": {
    //   background: "#000",
    //   opacity: ".8"
    // }
  },
};

export default headerStyle;
