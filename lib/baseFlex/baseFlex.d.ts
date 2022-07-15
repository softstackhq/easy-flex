import { FC, HTMLAttributes } from 'react';
import { IAlignItems, IAlignSelf, IBaseFlexElement, IBorderRadius, IBorderWidth, IColor, IDistance, IFlexDirection, IHeight, IJustifyContent, IWidth } from '../types';
export interface IBaseFlexProps extends HTMLAttributes<HTMLDivElement> {
    align?: IAlignItems;
    alignSelf?: IAlignSelf;
    backgroundColor?: IColor;
    borderColor?: IColor;
    borderRadius?: IBorderRadius | number;
    borderWidth?: IBorderWidth | number;
    color?: IColor;
    element?: IBaseFlexElement;
    flexDirection?: IFlexDirection;
    fullHeight?: boolean;
    fullWidth?: boolean;
    gap?: IDistance | number;
    grow?: number;
    height?: IHeight | number;
    justify?: IJustifyContent;
    margin?: IDistance | number;
    marginBottom?: IDistance | number;
    marginLeft?: IDistance | number;
    marginRight?: IDistance | number;
    marginTop?: IDistance | number;
    marginX?: IDistance | number;
    marginY?: IDistance | number;
    maxHeight?: IHeight | number;
    maxWidth?: IWidth | number;
    minHeight?: IHeight | number;
    minWidth?: IWidth | number;
    padding?: IDistance | number;
    paddingBottom?: IDistance | number;
    paddingLeft?: IDistance | number;
    paddingRight?: IDistance | number;
    paddingTop?: IDistance | number;
    paddingX?: IDistance | number;
    paddingY?: IDistance | number;
    shrink?: number;
    width?: IWidth | number;
}
export declare const BaseFlex: FC<IBaseFlexProps>;
