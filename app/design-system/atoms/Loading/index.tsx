import React, { FC } from 'react';
import { ActivityIndicator, ActivityIndicatorProps } from 'react-native';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../../theme';

type LoadingProps = ActivityIndicatorProps;

export const Loading: FC<LoadingProps> = props => {
  const { colors } = useTheme<Theme>();
  if (props.animating) {
    return <ActivityIndicator animating size='large' color={ colors.primary } { ...props } />;
  }

  return null;
};

export const LoadingFullScreen: FC<LoadingProps> = ({ style }) => {
  return (
    <Loading
      style={ [{ height: '100%', width: '100%', alignContent: 'center', justifyContent: 'center' }, style] }
    />
  );
};
