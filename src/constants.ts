import { createContext } from 'react';
import { IEasyFlexTheme } from './types';

export const themeColors = [
	'primary',
	'secondary',
	'tertiary',
	'quaternary',
	'quinary',
	'senary',
	'warning',
	'error',
	'header',
	'footer',
	'modal',
	'primaryText',
	'secondaryText',
	'tertiaryText',
	'quaternaryText',
	'quinaryText',
	'senaryText',
	'warningText',
	'errorText',
	'headerText',
	'footerText',
	'modalText',
	'primaryBackground',
	'secondaryBackground',
	'tertiaryBackground',
	'quaternaryBackground',
	'quinaryBackground',
	'senaryBackground',
	'warningBackground',
	'errorBackground',
	'headerBackground',
	'footerBackground',
	'modalBackground',
	'onPrimary',
	'onSecondary',
	'onTertiary',
	'onQuaternary',
	'onQuinary',
	'onSenary',
	'onWarning',
	'onError',
	'onHeader',
	'onFooter',
	'onModal',
	'primaryBorder',
	'secondaryBorder',
	'tertiaryBorder',
	'quaternaryBorder',
	'senaryBorder',
	'warningBorder',
	'errorBorder',
	'headerBorder',
	'footerBorder',
	'modalBorder',
];

export const themeSizes = [
	'8xs',
	'7xs',
	'6xs',
	'5xs',
	'4xs',
	'3xs',
	'xxs',
	'xs',
	's',
	'm',
	'l',
	'xl',
	'xxl',
	'3xl',
	'4xl',
	'5xl',
	'6xl',
	'7xl',
	'8xl',
];

export const initialFlexTheme: IEasyFlexTheme = {
	border: {
		radius: {
			'8xs': '0px',
			'7xs': '0px',
			'6xs': '0px',
			'5xs': '0px',
			'4xs': '0px',
			'3xs': '0px',
			xxs: '0px',
			xs: '0px',
			s: '0px',
			m: '0px',
			l: '0px',
			xl: '0px',
			xxl: '0px',
			'3xl': '0px',
			'4xl': '0px',
			'5xl': '0px',
			'6xl': '0px',
			'7xl': '0px',
			'8xl': '0px',
		},
		width: {
			'8xs': '1px',
			'7xs': '1px',
			'6xs': '1px',
			'5xs': '1px',
			'4xs': '1px',
			'3xs': '1px',
			xxs: '1px',
			xs: '1px',
			s: '1px',
			m: '1px',
			l: '1px',
			xl: '1px',
			xxl: '1px',
			'3xl': '1px',
			'4xl': '1px',
			'5xl': '1px',
			'6xl': '1px',
			'7xl': '1px',
			'8xl': '1px',
		},
	},
	color: {
		primary: '#007bff',
		secondary: '#007bff',
		tertiary: '#007bff',
		quaternary: '#007bff',
		quinary: '#007bff',
		senary: '#007bff',
		warning: '#007bff',
		error: '#007bff',
		header: '#007bff',
		footer: '#007bff',
		modal: '#007bff',
		primaryText: '#343a40',
		secondaryText: '#343a40',
		tertiaryText: '#343a40',
		quaternaryText: '#343a40',
		quinaryText: '#343a40',
		senaryText: '#343a40',
		warningText: '#343a40',
		errorText: '#343a40',
		headerText: '#343a40',
		footerText: '#343a40',
		modalText: '#343a40',
		primaryBackground: '#fff',
		secondaryBackground: '#fff',
		tertiaryBackground: '#fff',
		quaternaryBackground: '#fff',
		quinaryBackground: '#fff',
		senaryBackground: '#fff',
		warningBackground: '#ffc107',
		errorBackground: '#dc3545',
		headerBackground: '#fff',
		footerBackground: '#fff',
		modalBackground: '#fff',
		onPrimary: '#fff',
		onSecondary: '#fff',
		onTertiary: '#fff',
		onQuaternary: '#fff',
		onQuinary: '#fff',
		onSenary: '#fff',
		onWarning: '#343a40',
		onError: '#fff',
		onHeader: '#fff',
		onFooter: '#fff',
		onModal: '#fff',
		primaryBorder: '#aaa',
		secondaryBorder: '#aaa',
		tertiaryBorder: '#aaa',
		quaternaryBorder: '#aaa',
		quinaryBorder: '#aaa',
		senaryBorder: '#aaa',
		warningBorder: '#aaa',
		errorBorder: '#aaa',
		headerBorder: '#aaa',
		footerBorder: '#aaa',
		modalBorder: '#aaa',
	},
	distance: {
		'8xs': '1px',
		'7xs': '1px',
		'6xs': '1px',
		'5xs': '1px',
		'4xs': '1px',
		'3xs': '2px',
		xxs: '3px',
		xs: '5px',
		s: '7px',
		m: '10px',
		l: '15px',
		xl: '23px',
		xxl: '34px',
		'3xl': '51px',
		'4xl': '77px',
		'5xl': '115px',
		'6xl': '173px',
		'7xl': '259px',
		'8xl': '389px',
	},
	font: {
		lineHeight: {
			'8xs': 1.5,
			'7xs': 1.5,
			'6xs': 1.5,
			'5xs': 1.5,
			'4xs': 1.5,
			'3xs': 1.5,
			xxs: 1.5,
			xs: 1.5,
			s: 1.5,
			m: 1.5,
			l: 1.5,
			xl: 1.5,
			xxl: 1.5,
			'3xl': 1.5,
			'4xl': 1.5,
			'5xl': 1.5,
			'6xl': 1.5,
			'7xl': 1.5,
			'8xl': 1.5,
		},
		size: {
			'8xs': '0.25rem',
			'7xs': '0.25rem',
			'6xs': '0.25rem',
			'5xs': '0.25rem',
			'4xs': '0.25rem',
			'3xs': '0.25rem',
			xxs: '0.25rem',
			xs: '0.5rem',
			s: '0.75rem',
			m: '1rem',
			l: '1.25rem',
			xl: '1.5rem',
			xxl: '1.75rem',
			'3xl': '2rem',
			'4xl': '2.5rem',
			'5xl': '3rem',
			'6xl': '4rem',
			'7xl': '5rem',
			'8xl': '6rem',
		},
		weight: {
			light: 100,
			normal: 'normal',
			semibold: 550,
			bold: 'bold',
		},
	},
	modal: {
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
		blur: '0px',
		blurElementId: 'root',
		containerElementId: '',
	},
	size: {
		height: {
			'8xs': '1px',
			'7xs': '1px',
			'6xs': '1px',
			'5xs': '1px',
			'4xs': '1px',
			'3xs': '2px',
			xxs: '3px',
			xs: '5px',
			s: '7px',
			m: '10px',
			l: '15px',
			xl: '23px',
			xxl: '34px',
			'3xl': '51px',
			'4xl': '77px',
			'5xl': '115px',
			'6xl': '173px',
			'7xl': '259px',
			'8xl': '389px',
		},
		width: {
			'8xs': '1px',
			'7xs': '1px',
			'6xs': '1px',
			'5xs': '1px',
			'4xs': '1px',
			'3xs': '2px',
			xxs: '3px',
			xs: '5px',
			s: '7px',
			m: '10px',
			l: '15px',
			xl: '23px',
			xxl: '34px',
			'3xl': '51px',
			'4xl': '77px',
			'5xl': '115px',
			'6xl': '173px',
			'7xl': '259px',
			'8xl': '389px',
		},
	},
	viewport: {
		fallbackThreshold: 0,
		threshold: {
			'8xs': 0,
			'7xs': 0,
			'6xs': 0,
			'5xs': 0,
			'4xs': 0,
			'3xs': 0,
			xxs: 0,
			xs: 0,
			s: 0,
			m: 0,
			l: 0,
			xl: 0,
			xxl: 0,
			'3xl': 0,
			'4xl': 0,
			'5xl': 0,
			'6xl': 0,
			'7xl': 0,
			'8xl': 0,
		},
	},
};

export const EasyFlexContext = createContext(initialFlexTheme);
