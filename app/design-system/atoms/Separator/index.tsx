import React, { FC } from 'react';
import { VerticalView, VerticalViewProps } from '../LayoutView';

export const SeparatorLine: FC<
  VerticalViewProps & {
    direction?: 'row' | 'column';
  }
> = ({ direction = 'row', height: heightProps = 1, width: widthProps = 1, ...props }) => {
  const height = direction === 'row' ? heightProps : '100%';
  const width = direction === 'column' ? widthProps : '100%';
  return <VerticalView height={ height } width={ width } backgroundColor='border' { ...props } />;
};

export type SeparatorSpaceProps = VerticalViewProps & {
  size?: number;
  direction?: 'row' | 'column';
};

export const SeparatorSpace: FC<SeparatorSpaceProps> = ({ size = 8, direction = 'column', ...props }) => {
  return <VerticalView flexDirection={ direction } height={ size } width={ size } { ...props } />;
};

export const Spacer: FC<{
  width?: VerticalViewProps['width'];
  height?: VerticalViewProps['height'];
  flex?: VerticalViewProps['flex'];
}> = ({ width, height = 8, flex }) => {
  return <VerticalView height={ height } width={ width } flex={ flex } />;
};
