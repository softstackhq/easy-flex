export declare type DeepPartial<T> = T extends object ? {
    [P in keyof T]?: DeepPartial<T[P]>;
} : T;
export declare type Falsifiable<T> = T | false;
export declare type GlobalValue = 'inherit' | 'initial' | 'revert' | 'revert-layer' | 'unset';
export declare type Deg = `${number}deg`;
export declare type Percent = `${number}%`;
export declare type Px = `${number}px`;
export declare type Rem = `${number}rem`;
export declare type Turn = `${number}turn`;
export declare type Vh = `${number}vh`;
export declare type Vw = `${number}vw`;
export declare type AbsoluteSize = Px | Rem | Vh | Vw | '0' | 0;
export declare type Size = AbsoluteSize | Percent;
export declare type ExtSize = GlobalValue | Size;
export declare type ElementSize = ExtSize | 'fit-content' | 'max-content' | 'min-content';
export declare type AlignContent = 'center' | 'end' | 'space-around' | 'space-between' | 'space-evenly' | 'start' | 'stretch';
export declare type AlignItems = GlobalValue | 'baseline' | 'center' | 'end' | 'flex-end' | 'flex-start' | 'start' | 'stretch';
export declare type AlignSelf = GlobalValue | 'auto' | 'baseline' | 'center' | 'end' | 'flex-end' | 'flex-start' | 'start' | 'stretch';
export declare type CssAspectRatio = GlobalValue | `${number} / ${number}` | number | 'auto';
export declare type BorderStyle = GlobalValue | 'dashed' | 'dotted' | 'double' | 'groove' | 'hidden' | 'inset' | 'none' | 'outset' | 'ridge' | 'solid';
export declare type HslName = 'hsl' | 'hsla';
export declare type RgbName = 'rgb' | 'rgba';
export declare type RgbPlain = `${number} ${number} ${number}` | `${Percent} ${Percent} ${Percent}`;
export declare type RgbComma = `${number}, ${number}, ${number}` | `${Percent}, ${Percent}, ${Percent}`;
export declare type ColorCode = `#${string}` | `${HslName}(${number | Deg | Turn} ${Percent} ${Percent})` | `${HslName}(${number | Deg | Turn} ${Percent} ${Percent} / ${number | Percent})` | `${HslName}(${number | Deg | Turn}, ${Percent}, ${Percent})` | `${HslName}(${number | Deg | Turn}, ${Percent}, ${Percent}, ${number | Percent})` | `${RgbName}(${RgbPlain})` | `${RgbName}(${RgbPlain} / ${number | Percent})` | `${RgbName}(${RgbComma})` | `${RgbName}(${RgbComma}, ${number | Percent})`;
export declare type ColorKeyword = 'currentColor' | 'transparent';
export declare type ColorName = 'aliceblue' | 'antiquewhite' | 'aqua' | 'aquamarine' | 'azure' | 'beige' | 'bisque' | 'black' | 'blanchedalmond' | 'blue' | 'blueviolet' | 'brown' | 'burlywood' | 'cadetblue' | 'chartreuse' | 'chocolate' | 'coral' | 'cornflowerblue' | 'cornsilk' | 'crimson' | 'cyan' | 'darkblue' | 'darkcyan' | 'darkgoldenrod' | 'darkgray' | 'darkgreen' | 'darkgrey' | 'darkkhaki' | 'darkmagenta' | 'darkolivegreen' | 'darkorange' | 'darkorchid' | 'darkred' | 'darksalmon' | 'darkseagreen' | 'darkslateblue' | 'darkslategray' | 'darkslategrey' | 'darkturquoise' | 'darkviolet' | 'deeppink' | 'deepskyblue' | 'dimgray' | 'dimgrey' | 'dodgerblue' | 'firebrick' | 'floralwhite' | 'forestgreen' | 'fuchsia' | 'gainsboro' | 'ghostwhite' | 'gold' | 'goldenrod' | 'gray' | 'green' | 'greenyellow' | 'grey' | 'honeydew' | 'hotpink' | 'indianred' | 'indigo' | 'ivory' | 'khaki' | 'lavender' | 'lavenderblush' | 'lawngreen' | 'lemonchiffon' | 'lightblue' | 'lightcoral' | 'lightcyan' | 'lightgoldenrodyellow' | 'lightgray' | 'lightgreen' | 'lightgrey' | 'lightpink' | 'lightsalmon' | 'lightseagreen' | 'lightskyblue' | 'lightslategray' | 'lightslategrey' | 'lightsteelblue' | 'lightyellow' | 'lime' | 'limegreen' | 'linen' | 'magenta' | 'maroon' | 'mediumaquamarine' | 'mediumblue' | 'mediumorchid' | 'mediumpurple' | 'mediumseagreen' | 'mediumslateblue' | 'mediumspringgreen' | 'mediumturquoise' | 'mediumvioletred' | 'midnightblue' | 'mintcream' | 'mistyrose' | 'moccasin' | 'navajowhite' | 'navy' | 'oldlace' | 'olive' | 'olivedrab' | 'orange' | 'orangered' | 'orchid' | 'palegoldenrod' | 'palegreen' | 'paleturquoise' | 'palevioletred' | 'papayawhip' | 'peachpuff' | 'peru' | 'pink' | 'plum' | 'powderblue' | 'purple' | 'rebeccapurple' | 'red' | 'rosybrown' | 'royalblue' | 'saddlebrown' | 'salmon' | 'sandybrown' | 'seagreen' | 'seashell' | 'sienna' | 'silver' | 'skyblue' | 'slateblue' | 'slategray' | 'slategrey' | 'snow' | 'springgreen' | 'steelblue' | 'tan' | 'teal' | 'thistle' | 'tomato' | 'turquoise' | 'violet' | 'wheat' | 'white' | 'whitesmoke' | 'yellow' | 'yellowgreen';
export declare type CssColor = ColorCode | ColorKeyword | ColorName | GlobalValue;
export declare type Flex = GlobalValue | AbsoluteSize | Percent | number | 'auto' | 'none';
export declare type FlexBasis = GlobalValue | AbsoluteSize | Percent | 'auto';
export declare type FlexDirection = GlobalValue | 'column' | 'column-reverse' | 'row' | 'row-reverse';
export declare type CssFontWeight = GlobalValue | number | 'bold' | 'bolder' | 'lighter' | 'normal';
export declare type Inset = GlobalValue | Size | 'auto';
export declare type JustifyContent = GlobalValue | 'center' | 'end' | 'flex-end' | 'flex-start' | 'space-around' | 'space-between' | 'space-evenly' | 'start';
export declare type JustifyItems = GlobalValue | 'end' | 'center' | 'start' | 'stretch';
export declare type JustifySelf = GlobalValue | 'center' | 'end' | 'start' | 'stretch';
export declare type CssLineHeight = GlobalValue | Percent | number | 'normal';
export declare type ObjectFit = GlobalValue | 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
export declare type Opacity = GlobalValue | Percent | number;
export declare type Overflow = GlobalValue | 'auto' | 'hidden' | 'scroll' | 'visible';
export declare type Position = GlobalValue | 'absolute' | 'fixed' | 'relative' | 'static' | 'sticky';
export declare type TextAlign = GlobalValue | 'center' | 'end' | 'justify' | 'justify-all' | 'left' | 'match-parent' | 'right' | 'start';
export declare type Visibility = GlobalValue | 'collapse' | 'hidden' | 'visible';
export declare type WhiteSpace = GlobalValue | 'break-spaces' | 'normal' | 'nowrap' | 'pre' | 'pre-line' | 'pre-wrap';
export declare type WordBreak = GlobalValue | 'break-all' | 'break-word' | 'keep-all' | 'normal';
export declare type CustomName = `_${string}`;
export declare type ThemeSize = '8xs' | '7xs' | '6xs' | '5xs' | '4xs' | '3xs' | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl';
export declare type CustomThemeSize<T extends CustomName> = T | ThemeSize;
export declare type CustomBorderRadiusSize<T extends CustomName> = CustomThemeSize<T> | 'round';
export declare type AspectRatio<CustomAspectRatio extends CustomName> = CssAspectRatio | CustomAspectRatio;
export declare type BaseFlexElement = 'article' | 'aside' | 'div' | 'figure' | 'footer' | 'header' | 'main' | 'nav' | 'section' | 'summary';
export declare type BaseGridElement = 'article' | 'aside' | 'div' | 'figure' | 'footer' | 'header' | 'main' | 'nav' | 'section' | 'summary';
export declare type BorderRadius<CustomBorderRadius extends CustomName> = CustomThemeSize<CustomBorderRadius> | Size | 'round';
export declare type BorderWidth<CustomBorderWidth extends CustomName> = AbsoluteSize | CustomThemeSize<CustomBorderWidth>;
export declare type Color<CustomColor extends CustomName> = CssColor | CustomColor;
export declare type Distance<CustomDistance extends CustomName> = AbsoluteSize | CustomThemeSize<CustomDistance>;
export declare type FontFamily<CustomFontFamily extends CustomName> = CustomFontFamily;
export declare type FontSize<CustomFontSize extends CustomName> = CustomThemeSize<CustomFontSize> | ExtSize;
export declare type FontStyle = 'italic' | 'normal';
export declare type FontWeight<CustomFontWeight extends CustomName> = CustomFontWeight | 'thin' | 'extraLight' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extraBold' | 'black' | 'extraBlack';
export declare type Height<CustomHeight extends CustomName> = CustomThemeSize<CustomHeight> | ElementSize;
export declare type LineHeight<CustomLineHeight extends CustomName> = CssLineHeight | CustomThemeSize<CustomLineHeight>;
export declare type StyleElement = 'b' | 'cite' | 'code' | 'em' | 'i' | 'kbd' | 'mark' | 's' | 'samp' | 'small' | 'span' | 'strong' | 'sub' | 'sup' | 'u' | 'var';
export declare type TextDecoration = 'none' | 'underline';
export declare type TextElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
export declare type ViewportThreshold<CustomViewportThreshold extends CustomName> = CustomThemeSize<CustomViewportThreshold> | number;
export declare type Width<CustomWidth extends CustomName> = CustomThemeSize<CustomWidth> | ElementSize;
export interface EasyFlexTheme<CustomAspectRatio extends CustomName, CustomBorderRadius extends CustomName, CustomBorderWidth extends CustomName, CustomColor extends CustomName, CustomDistance extends CustomName, CustomFontFamily extends CustomName, CustomFontSize extends CustomName, CustomFontWeight extends CustomName, CustomHeight extends CustomName, CustomLineHeight extends CustomName, CustomViewportThreshold extends CustomName, CustomWidth extends CustomName> {
    border: {
        defaultStyle: BorderStyle;
        radius: Record<CustomBorderRadiusSize<CustomBorderRadius>, AbsoluteSize>;
        width: Record<CustomThemeSize<CustomBorderWidth>, AbsoluteSize>;
    };
    color: Record<CustomColor, CssColor>;
    distance: Record<CustomThemeSize<CustomDistance>, AbsoluteSize>;
    font: {
        family: Record<CustomFontFamily, string>;
        lineHeight: Record<CustomThemeSize<CustomLineHeight>, CssLineHeight>;
        size: Record<CustomThemeSize<CustomFontSize>, ExtSize>;
        weight: Record<FontWeight<CustomFontWeight>, CssFontWeight>;
    };
    modal: {
        backgroundColor: CssColor;
        blur: AbsoluteSize;
        containerElementId: string;
    };
    size: {
        aspectRatio: Record<CustomAspectRatio, CssAspectRatio>;
        height: Record<CustomThemeSize<CustomHeight>, ElementSize>;
        width: Record<CustomThemeSize<CustomWidth>, ElementSize>;
    };
    viewport: {
        defaultThreshold: number;
        threshold: Record<CustomThemeSize<CustomViewportThreshold>, number>;
    };
}
export declare type PartialEasyFlexTheme<CustomAspectRatio extends CustomName, CustomBorderRadius extends CustomName, CustomBorderWidth extends CustomName, CustomColor extends CustomName, CustomDistance extends CustomName, CustomFontFamily extends CustomName, CustomFontSize extends CustomName, CustomFontWeight extends CustomName, CustomHeight extends CustomName, CustomLineHeight extends CustomName, CustomViewportThreshold extends CustomName, CustomWidth extends CustomName> = DeepPartial<EasyFlexTheme<CustomAspectRatio, CustomBorderRadius, CustomBorderWidth, CustomColor, CustomDistance, CustomFontFamily, CustomFontSize, CustomFontWeight, CustomHeight, CustomLineHeight, CustomViewportThreshold, CustomWidth>>;
export declare type NeverEasyFlexTheme = EasyFlexTheme<never, never, never, never, never, never, never, never, never, never, never, never>;
