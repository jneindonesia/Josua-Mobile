import React, { FC } from 'react';
import { FlexStyle } from 'react-native';
import { VerticalView, VerticalViewProps } from '../LayoutView';

type Size = 'xs' | 's' | 'm' | 'l';

export type SkeletonProps = React.ComponentProps<typeof VerticalView> & {
  height?: FlexStyle['height'];
  width?: FlexStyle['width'];
  size?: Size;
};

export const Skeleton: FC<SkeletonProps> = props => {
  const height = mappingSizeToHeight(props.size, props.height);
  return (
    <VerticalView
      borderRadius={ 10 }
      backgroundColor='eventInactive'
      { ...props }
      width={ props.width }
      height={ height }
    />
  );
};

type SkeletonListProps = VerticalViewProps & {
  count?: number;
  renderItem: React.ReactElement;
};

export const SkeletonList: FC<SkeletonListProps> = ({ count = 5, renderItem: RenderItem, ...props }) => {
  return (
    <VerticalView { ...props }>
      { Array.from({ length: count }).map((item, index) => {
        return (
          <VerticalView key={ index } marginVertical={ 'xs' }>
            { RenderItem }
          </VerticalView>
        );
      }) }
    </VerticalView>
  );
};

function mappingSizeToHeight(size?: Size, height?: FlexStyle['height']): FlexStyle['height'] {
  if (size === 'xs') { return 12; }
  if (size === 's') { return 16; }
  if (size === 'm') { return 24; }
  if (size === 'l') { return 48; }
  return height;
}
