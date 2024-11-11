import React from 'react';
import { BaseButton, BaseButtonProps } from '../Button/BaseButton';

export const IconButton = (props: BaseButtonProps) => {
  return <BaseButton alignItems='center' justifyContent='center' { ...props } />;
};
