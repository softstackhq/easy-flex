import React, { ButtonHTMLAttributes } from 'react';
import { ThemeColor } from '../types';
import { BorderProps } from '../utils/border';
import { ColorProps } from '../utils/color';
import { DistanceProps } from '../utils/distance';
import { FlexContainerProps } from '../utils/flexContainer';
import { FlexItemProps } from '../utils/flexItem';
import { FontProps } from '../utils/font';
import { OverflowProps } from '../utils/overflow';
import { SizeProps } from '../utils/size';
export declare type BaseButtonProps<T extends ThemeColor> = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'> & BorderProps<T> & ColorProps<T> & DistanceProps & FlexContainerProps & FlexItemProps & FontProps<T> & OverflowProps & SizeProps;
export declare type ExternalBaseButtonProps<T extends ThemeColor> = Omit<BaseButtonProps<T>, 'align' | 'backgroundColor' | 'borderColor' | 'borderRadius' | 'borderStyle' | 'borderWidth' | 'color' | 'direction' | 'fontFamily' | 'fontSize' | 'fontWeight' | 'gap' | 'italic' | 'justify' | 'lineHeight' | 'overflow' | 'overflowX' | 'overflowY' | 'padding' | 'paddingBottom' | 'paddingHorizontal' | 'paddingLeft' | 'paddingRight' | 'paddingTop' | 'paddingVertical' | 'round' | 'underline' | 'underlineColor'>;
export declare const createBaseButton: <T extends `_${string}`>() => React.ForwardRefExoticComponent<Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color"> & BorderProps<T> & ColorProps<T> & import("..").MarginProps & import("..").PaddingProps & FlexContainerProps & FlexItemProps & FontProps<T> & OverflowProps & SizeProps & React.RefAttributes<HTMLButtonElement>>;
