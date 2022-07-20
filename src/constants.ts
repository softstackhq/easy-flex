import { createContext } from 'react';
import { IEasyFlexTheme } from './types';

export const initialFlexTheme: IEasyFlexTheme = {
	border: {
		radius: {
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
		width: {
			'8xs': 1,
			'7xs': 1,
			'6xs': 1,
			'5xs': 1,
			'4xs': 1,
			'3xs': 1,
			xxs: 1,
			xs: 1,
			s: 1,
			m: 1,
			l: 1,
			xl: 1,
			xxl: 1,
			'3xl': 1,
			'4xl': 1,
			'5xl': 1,
			'6xl': 1,
			'7xl': 1,
			'8xl': 1,
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
		'8xs': 1,
		'7xs': 1,
		'6xs': 1,
		'5xs': 1,
		'4xs': 1,
		'3xs': 2,
		xxs: 3,
		xs: 5,
		s: 8,
		m: 12,
		l: 18,
		xl: 27,
		xxl: 41,
		'3xl': 62,
		'4xl': 93,
		'5xl': 140,
		'6xl': 210,
		'7xl': 315,
		'8xl': 473,
	},
	flip: {
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
	font: {
		sizeType: 'rem',
		size: {
			'8xs': 0.25,
			'7xs': 0.25,
			'6xs': 0.25,
			'5xs': 0.25,
			'4xs': 0.25,
			'3xs': 0.25,
			xxs: 0.25,
			xs: 0.5,
			s: 0.75,
			m: 1,
			l: 1.25,
			xl: 1.5,
			xxl: 1.75,
			'3xl': 2,
			'4xl': 2.5,
			'5xl': 3,
			'6xl': 4,
			'7xl': 5,
			'8xl': 6,
		},
		weight: {
			normal: 'normal',
			semibold: 550,
			bold: 'bold',
		},
	},
	height: {
		'8xs': 1,
		'7xs': 1,
		'6xs': 1,
		'5xs': 1,
		'4xs': 1,
		'3xs': 2,
		xxs: 3,
		xs: 5,
		s: 8,
		m: 12,
		l: 18,
		xl: 27,
		xxl: 41,
		'3xl': 62,
		'4xl': 93,
		'5xl': 140,
		'6xl': 210,
		'7xl': 315,
		'8xl': 473,
	},
	modal: {
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
		blur: 0,
	},
	width: {
		'8xs': 1,
		'7xs': 1,
		'6xs': 1,
		'5xs': 1,
		'4xs': 1,
		'3xs': 2,
		xxs: 3,
		xs: 5,
		s: 8,
		m: 12,
		l: 18,
		xl: 27,
		xxl: 41,
		'3xl': 62,
		'4xl': 93,
		'5xl': 140,
		'6xl': 210,
		'7xl': 315,
		'8xl': 473,
	},
};

export const EasyFlexContext = createContext(initialFlexTheme);
