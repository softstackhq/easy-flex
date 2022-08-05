import { useContext, useEffect, useMemo, useState } from 'react';
import { baseColors, EasyFlexContext } from './constants';
import {
	IAbsoluteSize,
	IBaseColor,
	IBorderRadius,
	IColor,
	ICssColor,
	ICssFontWeight,
	IDistance,
	IEasyFlexTheme,
	IFontSize,
	IFontWeight,
	IHeight,
	IPercent,
	IPx,
	IRem,
	ISize,
	IViewportThreshold,
	IWidth,
} from './types';

export const isIBaseColor = (color: IColor): color is IBaseColor => baseColors.includes(color);

export const ifDefined = <T, U>(
	value: T,
	fn: (value: Exclude<T, null | undefined>) => U
): T extends null & undefined
	? U | null | undefined
	: T extends null
	? U | null
	: T extends undefined
	? U | undefined
	: U => {
	if (value === null) {
		return null as T extends null & undefined
			? U | null | undefined
			: T extends null
			? U | null
			: T extends undefined
			? U | undefined
			: U;
	}
	if (value === undefined) {
		return undefined as T extends null & undefined
			? U | null | undefined
			: T extends null
			? U | null
			: T extends undefined
			? U | undefined
			: U;
	}
	return fn(value as Exclude<T, undefined | null>) as T extends null & undefined
		? U | null | undefined
		: T extends null
		? U | null
		: T extends undefined
		? U | undefined
		: U;
};

export const ifNotNull = <T, U>(value: T, fn: (value: Exclude<T, null>) => U): T extends null ? null : U => {
	if (value === null) {
		return null as T extends null ? null : U;
	}
	return fn(value as Exclude<T, null>) as T extends null ? null : U;
};

export const ifNotUndefined = <T, U>(
	value: T,
	fn: (value: Exclude<T, undefined>) => U
): T extends undefined ? undefined : U => {
	if (value === undefined) {
		return undefined as T extends undefined ? undefined : U;
	}
	return fn(value as Exclude<T, undefined>) as T extends undefined ? undefined : U;
};

export const toIPercent = (value: number): IPercent => `${value}%`;

export const toIPx = (value: number): IPx => `${value}px`;

export const toIRem = (value: number): IRem => `${value}rem`;

export const isIPercent = (value: unknown): value is IPx =>
	typeof value === 'string' ? !!value.match(/^\d+(\.\d+)?%$/) : false;

export const isIPx = (value: unknown): value is IPx =>
	typeof value === 'string' ? !!value.match(/^\d+(\.\d+)?px$/) : false;

export const isIRem = (value: unknown): value is IRem =>
	typeof value === 'string' ? !!value.match(/^\d+(\.\d+)?rem$/) : false;

export const isIAbsoluteSize = (value: unknown): value is IAbsoluteSize => isIPx(value) || isIRem(value);

export const isISize = (value: unknown): value is ISize => isIPercent(value) || isIAbsoluteSize(value);

export const getBorderRadius = (theme: IEasyFlexTheme, borderRadius: IBorderRadius | IAbsoluteSize): IAbsoluteSize =>
	isIAbsoluteSize(borderRadius) ? borderRadius : theme.border.radius[borderRadius];

export const getBorderWidth = (theme: IEasyFlexTheme, borderWidth: IBorderRadius | IAbsoluteSize): IAbsoluteSize =>
	isIAbsoluteSize(borderWidth) ? borderWidth : theme.border.width[borderWidth];

export const getColor = (theme: IEasyFlexTheme, color: IColor): ICssColor =>
	isIBaseColor(color) ? theme.color[color] : color;

export const getDistance = (theme: IEasyFlexTheme, distance: IDistance | IAbsoluteSize): IAbsoluteSize =>
	isIAbsoluteSize(distance) ? distance : theme.distance[distance];

export const getFontSize = (theme: IEasyFlexTheme, fontSize: IFontSize | ISize): ISize =>
	isISize(fontSize) ? fontSize : theme.font.size[fontSize];

export const getFontWeight = (theme: IEasyFlexTheme, fontWeight: IFontWeight | number): ICssFontWeight | number =>
	typeof fontWeight === 'number' ? fontWeight : theme.font.weight[fontWeight];

export const getHeight = (theme: IEasyFlexTheme, height: IHeight | ISize): ISize =>
	isISize(height) ? height : theme.size.height[height];

export const getViewportThreshold = (theme: IEasyFlexTheme, viewportThreshold: IViewportThreshold | number): number =>
	typeof viewportThreshold === 'number' ? viewportThreshold : theme.viewport.threshold[viewportThreshold];

export const getWidth = (theme: IEasyFlexTheme, width: IWidth | ISize): ISize =>
	isISize(width) ? width : theme.size.width[width];

export const useEasyFlexTheme = (): IEasyFlexTheme => useContext(EasyFlexContext);

export const useColor = <T extends ICssColor | undefined>(
	color: IColor | undefined,
	fallback: T
): T extends ICssColor ? ICssColor : ICssColor | undefined => {
	const theme = useEasyFlexTheme();

	const processedColor = useMemo<ICssColor | undefined>(
		() => (color === undefined ? fallback : getColor(theme, color)),
		[color, fallback, theme]
	);

	return processedColor as T extends ICssColor ? ICssColor : ICssColor | undefined;
};

export const useDimension = (): { height: number; width: number } => {
	const [height, setHeight] = useState<number>(document.documentElement.clientHeight);
	const [width, setWidth] = useState<number>(document.documentElement.clientWidth);

	useEffect(() => {
		const handleResize = () => {
			setHeight(document.documentElement.clientHeight);
			setWidth(document.documentElement.clientWidth);
		};
		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const dimension = useMemo<{
		height: number;
		width: number;
	}>(() => ({ height, width }), [height, width]);

	return dimension;
};

export const useDistance = ({
	margin,
	marginBottom,
	marginLeft,
	marginRight,
	marginTop,
	marginX,
	marginY,
	padding,
	paddingBottom,
	paddingLeft,
	paddingRight,
	paddingTop,
	paddingX,
	paddingY,
}: {
	margin?: IDistance | IAbsoluteSize;
	marginBottom?: IDistance | IAbsoluteSize;
	marginLeft?: IDistance | IAbsoluteSize;
	marginRight?: IDistance | IAbsoluteSize;
	marginTop?: IDistance | IAbsoluteSize;
	marginX?: IDistance | IAbsoluteSize;
	marginY?: IDistance | IAbsoluteSize;
	padding?: IDistance | IAbsoluteSize;
	paddingBottom?: IDistance | IAbsoluteSize;
	paddingLeft?: IDistance | IAbsoluteSize;
	paddingRight?: IDistance | IAbsoluteSize;
	paddingTop?: IDistance | IAbsoluteSize;
	paddingX?: IDistance | IAbsoluteSize;
	paddingY?: IDistance | IAbsoluteSize;
}): {
	margin: {
		bottom: IAbsoluteSize;
		left: IAbsoluteSize;
		right: IAbsoluteSize;
		top: IAbsoluteSize;
	};
	padding: {
		bottom: IAbsoluteSize;
		left: IAbsoluteSize;
		right: IAbsoluteSize;
		top: IAbsoluteSize;
	};
} => {
	const theme = useEasyFlexTheme();

	const processedMarginBottom = useMemo<IAbsoluteSize>(
		() => getDistance(theme, marginBottom ?? marginY ?? margin ?? '0px'),
		[margin, marginBottom, marginY, theme]
	);

	const processedMarginLeft = useMemo<IAbsoluteSize>(
		() => getDistance(theme, marginLeft ?? marginX ?? margin ?? '0px'),
		[margin, marginLeft, marginX, theme]
	);

	const processedMarginRight = useMemo<IAbsoluteSize>(
		() => getDistance(theme, marginRight ?? marginX ?? margin ?? '0px'),
		[margin, marginRight, marginX, theme]
	);

	const processedMarginTop = useMemo<IAbsoluteSize>(
		() => getDistance(theme, marginTop ?? marginY ?? margin ?? '0px'),
		[margin, marginTop, marginY, theme]
	);

	const processedPaddingBottom = useMemo<IAbsoluteSize>(
		() => getDistance(theme, paddingBottom ?? paddingY ?? padding ?? '0px'),
		[padding, paddingBottom, paddingY, theme]
	);

	const processedPaddingLeft = useMemo<IAbsoluteSize>(
		() => getDistance(theme, paddingLeft ?? paddingX ?? padding ?? '0px'),
		[padding, paddingLeft, paddingX, theme]
	);

	const processedPaddingRight = useMemo<IAbsoluteSize>(
		() => getDistance(theme, paddingRight ?? paddingX ?? padding ?? '0px'),
		[padding, paddingRight, paddingX, theme]
	);

	const processedPaddingTop = useMemo<IAbsoluteSize>(
		() => getDistance(theme, paddingTop ?? paddingY ?? padding ?? '0px'),
		[padding, paddingTop, paddingY, theme]
	);

	const processedMargin = useMemo<{
		bottom: IAbsoluteSize;
		left: IAbsoluteSize;
		right: IAbsoluteSize;
		top: IAbsoluteSize;
	}>(
		() => ({
			bottom: processedMarginBottom,
			left: processedMarginLeft,
			right: processedMarginRight,
			top: processedMarginTop,
		}),
		[processedMarginBottom, processedMarginLeft, processedMarginRight, processedMarginTop]
	);

	const processedPadding = useMemo<{
		bottom: IAbsoluteSize;
		left: IAbsoluteSize;
		right: IAbsoluteSize;
		top: IAbsoluteSize;
	}>(
		() => ({
			bottom: processedPaddingBottom,
			left: processedPaddingLeft,
			right: processedPaddingRight,
			top: processedPaddingTop,
		}),
		[processedPaddingBottom, processedPaddingLeft, processedPaddingRight, processedPaddingTop]
	);

	const distance = useMemo<{
		margin: {
			bottom: IAbsoluteSize;
			left: IAbsoluteSize;
			right: IAbsoluteSize;
			top: IAbsoluteSize;
		};
		padding: {
			bottom: IAbsoluteSize;
			left: IAbsoluteSize;
			right: IAbsoluteSize;
			top: IAbsoluteSize;
		};
	}>(
		() => ({
			margin: processedMargin,
			padding: processedPadding,
		}),
		[processedMargin, processedPadding]
	);

	return distance;
};

export const useSize = ({
	fullHeight,
	fullWidth,
	height,
	heightMax,
	heightMin,
	width,
	widthMax,
	widthMin,
}: {
	fullHeight: boolean;
	fullWidth: boolean;
	height?: IHeight | ISize;
	heightMax?: IHeight | ISize;
	heightMin?: IHeight | ISize;
	width?: IWidth | ISize;
	widthMax?: IWidth | ISize;
	widthMin?: IWidth | ISize;
}): {
	height: ISize | undefined;
	heightMax: ISize | undefined;
	heightMin: ISize | undefined;
	width: ISize | undefined;
	widthMax: ISize | undefined;
	widthMin: ISize | undefined;
} => {
	const theme = useEasyFlexTheme();

	const processedHeight = useMemo<ISize | undefined>(
		() => (fullHeight ? '100%' : ifNotUndefined(height, (height) => getHeight(theme, height))),
		[fullHeight, height, theme]
	);

	const processedHeightMax = useMemo<ISize | undefined>(
		() => ifNotUndefined(heightMax, (heightMax) => getHeight(theme, heightMax)),
		[heightMax, theme]
	);

	const processedHeightMin = useMemo<ISize | undefined>(
		() => ifNotUndefined(heightMin, (heightMin) => getHeight(theme, heightMin)),
		[heightMin, theme]
	);

	const processedWidth = useMemo<ISize | undefined>(
		() => (fullWidth ? '100%' : ifNotUndefined(width, (width) => getWidth(theme, width))),
		[fullWidth, theme, width]
	);

	const processedWidthMax = useMemo<ISize | undefined>(
		() => ifNotUndefined(widthMax, (widthMax) => getWidth(theme, widthMax)),
		[theme, widthMax]
	);

	const processedWidthMin = useMemo<ISize | undefined>(
		() => ifNotUndefined(widthMin, (widthMin) => getWidth(theme, widthMin)),
		[theme, widthMin]
	);

	const size = useMemo<{
		height: ISize | undefined;
		heightMax: ISize | undefined;
		heightMin: ISize | undefined;
		width: ISize | undefined;
		widthMax: ISize | undefined;
		widthMin: ISize | undefined;
	}>(
		() => ({
			height: processedHeight,
			heightMax: processedHeightMax,
			heightMin: processedHeightMin,
			width: processedWidth,
			widthMax: processedWidthMax,
			widthMin: processedWidthMin,
		}),
		[processedHeight, processedHeightMax, processedHeightMin, processedWidth, processedWidthMax, processedWidthMin]
	);

	return size;
};

export const useViewport = (): {
	fallback: boolean;
	'8xs': boolean;
	'7xs': boolean;
	'6xs': boolean;
	'5xs': boolean;
	'4xs': boolean;
	'3xs': boolean;
	xxs: boolean;
	xs: boolean;
	s: boolean;
	m: boolean;
	l: boolean;
	xl: boolean;
	xxl: boolean;
	'3xl': boolean;
	'4xl': boolean;
	'5xl': boolean;
	'6xl': boolean;
	'7xl': boolean;
	'8xl': boolean;
} => {
	const theme = useEasyFlexTheme();
	const { width } = useDimension();

	const viewport = useMemo<{
		fallback: boolean;
		'8xs': boolean;
		'7xs': boolean;
		'6xs': boolean;
		'5xs': boolean;
		'4xs': boolean;
		'3xs': boolean;
		xxs: boolean;
		xs: boolean;
		s: boolean;
		m: boolean;
		l: boolean;
		xl: boolean;
		xxl: boolean;
		'3xl': boolean;
		'4xl': boolean;
		'5xl': boolean;
		'6xl': boolean;
		'7xl': boolean;
		'8xl': boolean;
	}>(
		() => ({
			fallback: width < theme.viewport.fallbackThreshold,
			'8xs': width < getViewportThreshold(theme, '8xs'),
			'7xs': width < getViewportThreshold(theme, '7xs'),
			'6xs': width < getViewportThreshold(theme, '6xs'),
			'5xs': width < getViewportThreshold(theme, '5xs'),
			'4xs': width < getViewportThreshold(theme, '4xs'),
			'3xs': width < getViewportThreshold(theme, '3xs'),
			xxs: width < getViewportThreshold(theme, 'xxs'),
			xs: width < getViewportThreshold(theme, 'xs'),
			s: width < getViewportThreshold(theme, 's'),
			m: width < getViewportThreshold(theme, 'm'),
			l: width < getViewportThreshold(theme, 'l'),
			xl: width < getViewportThreshold(theme, 'xl'),
			xxl: width < getViewportThreshold(theme, 'xxl'),
			'3xl': width < getViewportThreshold(theme, '3xl'),
			'4xl': width < getViewportThreshold(theme, '4xl'),
			'5xl': width < getViewportThreshold(theme, '5xl'),
			'6xl': width < getViewportThreshold(theme, '6xl'),
			'7xl': width < getViewportThreshold(theme, '7xl'),
			'8xl': width < getViewportThreshold(theme, '8xl'),
		}),
		[theme, width]
	);

	return viewport;
};
