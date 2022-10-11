import { AbsoluteSize, BorderRadius, BorderWidth, Color, CssColor, CssFontWeight, CssLineHeight, DeepPartial, Distance, EasyFlexTheme, ElementSize, Falsifiable, FontSize, FontWeight, GlobalValue, Height, LineHeight, Percent, Px, Rem, Size, ThemeSize, ThemeSizeName, ThemeSizeX, Vh, ViewportThreshold, Vw, Width } from '../types';
export declare const mergeDeep: <T>(a: T, b: DeepPartial<T>) => T;
export declare const isGlobalValue: (value: unknown) => value is GlobalValue;
export declare const isThemeColor: <T extends `_${string}`>(color: Color<T>) => color is T;
export declare const isThemeSizeX: (size: unknown) => size is ThemeSizeX;
export declare const isThemeSizeName: (size: unknown) => size is ThemeSizeName;
export declare const isThemeSize: (size: unknown) => size is ThemeSize;
export declare const isPercent: (value: unknown) => value is `${number}px`;
export declare const isPx: (value: unknown) => value is `${number}px`;
export declare const isRem: (value: unknown) => value is `${number}rem`;
export declare const isVh: (value: unknown) => value is `${number}vh`;
export declare const isVw: (value: unknown) => value is `${number}vw`;
export declare const isAbsoluteSize: (value: unknown) => value is AbsoluteSize;
export declare const isSize: (value: unknown) => value is Size;
export declare const ifDefined: <T, U>(value: T, fn: (value: Exclude<T, false | undefined>) => U) => T extends undefined ? undefined : U;
export declare const defalsify: <T>(value: false | T) => T | undefined;
export declare const toPercent: (value: number) => Percent;
export declare const toPx: (value: number) => Px;
export declare const toRem: (value: number) => Rem;
export declare const toVh: (value: number) => Vh;
export declare const toVw: (value: number) => Vw;
export declare const percentToNumber: (value: Percent) => number;
export declare const pxToNumber: (value: Px) => number;
export declare const remToNumber: (value: Rem) => number;
export declare const vhToNumber: (value: Vh) => number;
export declare const vwToNumber: (value: Vw) => number;
export declare const absoluteSizeToNumber: (value: AbsoluteSize) => number;
export declare const sizeToNumber: (value: Size) => number;
export declare const getBorderRadius: <T extends `_${string}`>(theme: EasyFlexTheme<T>, borderRadius: BorderRadius) => Size;
export declare const getBorderWidth: <T extends `_${string}`>(theme: EasyFlexTheme<T>, borderWidth: BorderWidth) => AbsoluteSize;
export declare const getColor: <T extends `_${string}`>(theme: EasyFlexTheme<T>, color: Color<T>) => CssColor;
export declare const getDistance: <T extends `_${string}`>(theme: EasyFlexTheme<T>, distance: Distance) => AbsoluteSize;
export declare const getFontSize: <T extends `_${string}`>(theme: EasyFlexTheme<T>, fontSize: FontSize) => Size;
export declare const getFontWeight: <T extends `_${string}`>(theme: EasyFlexTheme<T>, fontWeight: FontWeight) => CssFontWeight;
export declare const getHeight: <T extends `_${string}`>(theme: EasyFlexTheme<T>, height: Height) => ElementSize;
export declare const getLineHeight: <T extends `_${string}`>(theme: EasyFlexTheme<T>, lineHeight: LineHeight) => CssLineHeight;
export declare const getViewportThreshold: <T extends `_${string}`>(theme: EasyFlexTheme<T>, viewportThreshold: ViewportThreshold) => number;
export declare const getWidth: <T extends `_${string}`>(theme: EasyFlexTheme<T>, width: Width) => ElementSize;
export declare const useEasyFlexTheme: <T extends `_${string}`>() => EasyFlexTheme<T>;
export declare const useDimension: () => {
    height: number;
    width: number;
};
export declare const useModalContainer: (containerElementId: Falsifiable<string> | undefined) => HTMLElement;
export declare const useViewport: () => Record<ThemeSizeX | 'default', boolean>;
