import React, { forwardRef, ImgHTMLAttributes, memo } from 'react';
import styled from 'styled-components';
import { CustomName, Falsifiable, ObjectFit } from '../types';
import { BorderProps, borderStyle, BorderStyleProps, useBorderStyleProps } from '../utils/border';
import { ColorProps, colorStyle, ColorStyleProps, useColorStyleProps } from '../utils/color';
import { GridItemProps, gridItemStyle, GridItemStyleProps, useGridItemStyleProps } from '../utils/gridItem';
import { MarginProps, marginStyle, MarginStyleProps, useMarginStyleProps } from '../utils/margin';
import { MiscProps, miscStyle, MiscStyleProps, useMiscStyleProps } from '../utils/misc';
import { SizeProps, sizeStyle, SizeStyleProps, useSizeStyleProps } from '../utils/size';

const StyledImg = styled.img<
	{
		'data-object-fit': Falsifiable<ObjectFit> | undefined;
	} & BorderStyleProps &
		ColorStyleProps &
		GridItemStyleProps &
		MarginStyleProps &
		MiscStyleProps &
		SizeStyleProps
>`
	box-sizing: border-box;
	object-fit: ${({ 'data-object-fit': objectFit }) => objectFit};
	${borderStyle}
	${colorStyle}
	${gridItemStyle}
	${marginStyle}
	${miscStyle}
	${sizeStyle}
`;

export interface ImgProps<
	CustomAspectRatio extends CustomName,
	CustomBorderRadius extends CustomName,
	CustomBorderWidth extends CustomName,
	CustomColor extends CustomName,
	CustomDistance extends CustomName,
	CustomHeight extends CustomName,
	CustomWidth extends CustomName
> extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'color' | 'height' | 'width'>,
		BorderProps<CustomBorderRadius, CustomBorderWidth, CustomColor>,
		ColorProps<CustomColor>,
		GridItemProps,
		MarginProps<CustomDistance>,
		MiscProps<CustomDistance>,
		SizeProps<CustomAspectRatio, CustomHeight, CustomWidth> {
	objectFit?: Falsifiable<ObjectFit>;
}

export const createImg = <
	CustomAspectRatio extends CustomName,
	CustomBorderRadius extends CustomName,
	CustomBorderWidth extends CustomName,
	CustomColor extends CustomName,
	CustomDistance extends CustomName,
	CustomHeight extends CustomName,
	CustomWidth extends CustomName
>() => {
	const Img = memo(
		forwardRef<
			HTMLImageElement,
			ImgProps<
				CustomAspectRatio,
				CustomBorderRadius,
				CustomBorderWidth,
				CustomColor,
				CustomDistance,
				CustomHeight,
				CustomWidth
			>
		>(
			(
				{
					aspectRatio,
					backgroundColor,
					borderColor,
					borderRadius,
					borderStyle,
					borderWidth,
					bottom,
					color,
					display,
					height,
					justifySelf,
					left,
					margin,
					marginBottom,
					marginHorizontal,
					marginLeft,
					marginRight,
					marginTop,
					marginVertical,
					maxHeight,
					maxWidth,
					minHeight,
					minWidth,
					objectFit,
					opacity,
					position,
					right,
					top,
					userSelect,
					visibility,
					width,
					...props
				},
				ref
			) => {
				const borderStyleProps = useBorderStyleProps({ borderColor, borderRadius, borderStyle, borderWidth });

				const colorStyleProps = useColorStyleProps({ backgroundColor, color });

				const gridItemStyleProps = useGridItemStyleProps({ justifySelf });

				const marginStyleProps = useMarginStyleProps({
					margin,
					marginBottom,
					marginHorizontal,
					marginLeft,
					marginRight,
					marginTop,
					marginVertical,
				});

				const miscStyleProps = useMiscStyleProps({
					bottom,
					display,
					left,
					opacity,
					position,
					right,
					top,
					userSelect,
					visibility,
				});

				const sizeStyleProps = useSizeStyleProps({
					aspectRatio,
					height,
					maxHeight,
					maxWidth,
					minHeight,
					minWidth,
					width,
				});

				return (
					<StyledImg
						data-object-fit={objectFit}
						{...borderStyleProps}
						{...colorStyleProps}
						{...gridItemStyleProps}
						{...marginStyleProps}
						{...miscStyleProps}
						{...sizeStyleProps}
						ref={ref}
						{...props}
					/>
				);
			}
		)
	);
	Img.displayName = 'Img';
	return Img;
};
