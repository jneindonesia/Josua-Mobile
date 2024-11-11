import React, { FC } from 'react';
import { ImageSourcePropType, Image, ViewStyle, StyleProp } from 'react-native';
import { PrimaryButton, SecondaryButton, IconButton } from '../Button';
import { BaseIcon } from '../Icon';
import { Text } from '../Text';
import { VerticalView, HorizontalView } from '../LayoutView';
import { useNegativeCaseStyle } from './useNegativeCaseStyle';
import { NotFoundError, ClientError, NetworkError } from 'app/data/exceptions';
import { IcReload } from 'svgs/index';
import Images from '@images';

type ButtonType = {
  title: string;
  type: 'primary' | 'secondary';
  onPress: () => void;
};

export type NegativeCaseProps = {
  title?: string;
  message?: string;
  image?: ImageSourcePropType;
  buttons?: ButtonType[];
  customContainerStyle?: StyleProp<ViewStyle>;
};

export const NegativeCase: FC<NegativeCaseProps> = ({
  title = '',
  message = '',
  image = 0,
  buttons = [],
  customContainerStyle = {},
}) => {
  const { styles } = useNegativeCaseStyle();

  const Button: FC<ButtonType> = ({ title: btnTtitle, onPress, type }) => {
    switch (type) {
    case 'primary':
      return <PrimaryButton title={ btnTtitle } onPress={ onPress } style={ styles.primaryBtn } />;
    case 'secondary':
      return <SecondaryButton title={ btnTtitle } onPress={ onPress } style={ styles.secondaryBtn } />;
    default:
      return <PrimaryButton title={ btnTtitle } onPress={ onPress } style={ styles.primaryBtn } />;
    }
  };

  return (
    <VerticalView style={ [styles.container, customContainerStyle] }>
      <Image style={ styles.image } source={ image } />
      <Text style={ styles.title }>{ title }</Text>
      <Text style={ styles.message }>{ message }</Text>
      { buttons.map((btnProps, index) => (
        <Button { ...btnProps } key={ index } />
      )) }
    </VerticalView>
  );
};

export const NegativeCaseNotFound: FC<NegativeCaseProps> = props => {
  const imageSource = props.image ? props.image : Images.IcJoni;
  return <NegativeCase { ...props } image={ imageSource } />;
};

export const NegativeCaseSearchNotFound: FC<NegativeCaseProps> = props => {
  const imageSource = props.image ? props.image : Images.IcJoni;
  return <NegativeCase { ...props } image={ imageSource } />;
};

export const NegativeCaseServerDown: FC<NegativeCaseProps & { onRetry?: () => void }> = ({
  onRetry,
  ...props
}) => {
  const imageSource = props.image ? props.image : Images.IcJoni;
  return (
    <NegativeCase
      image={ imageSource }
      title={ 'Server Mengalami Gangguan' }
      message={ 'tim kita sedang memperbaikinya. Coba kembali lagi nanti.' }
      buttons={ [
        {
          title: 'Muat Ulang',
          type: 'primary',
          onPress: () => onRetry?.(),
        },
      ] }
      { ...props }
    />
  );
};

export const NegativeCaseNoConnetion: FC<NegativeCaseProps> = props => {
  const imageSource = props.image ? props.image : Images.IcJoni;
  return (
    <NegativeCase
      image={ imageSource }
      title={ 'Koneksi internet terputus' }
      message={ 'Mohon pastikan koneksi internet Anda telah terhubung dan coba muat ulang halaman.' }
      { ...props }
    />
  );
};

export const NegativeCaseUnderMaintenance: FC<NegativeCaseProps> = ({
  image,
  title = 'Sistem sedang dalam maintenance',
  message = 'Saat ini tim kami sedang melakukan maintenance. Sistem akan segera berjalan kembali.',
  ...props
}) => {
  const imageSource = image ? image : Images.IcJoni;
  return <NegativeCase image={ imageSource } title={ title } message={ message } { ...props } />;
};

export const NegativeCaseInDevelopment: FC<NegativeCaseProps> = props => {
  const imageSource = props.image ? props.image : Images.IcJoni;
  return (
    <NegativeCase
      image={ imageSource }
      title={ 'Dalam Pengembangan' }
      message={ 'Fitur dalam pengembangan' }
      { ...props }
    />
  );
};

export const NegativeCaseNoConnection: FC<NegativeCaseProps & { onRetry?: () => void }> = ({
  onRetry,
  ...props
}) => {
  const imageSource = props.image ? props.image : Images.IcJoni;
  return (
    <NegativeCase
      image={ imageSource }
      title={ 'Koneksi internet terputus' }
      message={ 'Mohon pastikan koneksi internet Anda telah terhubung dan coba muat ulang halaman.' }
      buttons={ [
        {
          title: 'Muat Ulang',
          type: 'primary',
          onPress: () => onRetry?.(),
        },
      ] }
      { ...props }
    />
  );
};

export const WrapperNegativeView: React.FC<{
  error: Error | unknown;
  onRetry?: () => void;
  errorNotFoundProps?: { title: string; message: string; image?: ImageSourcePropType };
  isSearching?: boolean;
  errorSearchNotFoundProps?: { title: string; message: string };
  customContainerStyle?: StyleProp<ViewStyle>;
  buttons?: ButtonType[];
}> = ({
  error,
  onRetry,
  errorNotFoundProps,
  isSearching,
  errorSearchNotFoundProps = {
    message: 'Mohon periksa kembali kata pencarian atau filter Anda.',
    title: 'Pencarian tidak ditemukan',
  },
  customContainerStyle,
  buttons,
}) => {
  if (error instanceof NotFoundError) {
    if (isSearching) {
      return (
        <NegativeCaseSearchNotFound
          title={ errorSearchNotFoundProps?.title }
          message={ errorSearchNotFoundProps?.message }
          customContainerStyle={ customContainerStyle }
        />
      );
    }
    return (
      <NegativeCaseNotFound
        title={ errorNotFoundProps?.title }
        message={ errorNotFoundProps?.message }
        image={ errorNotFoundProps?.image }
        customContainerStyle={ customContainerStyle }
        buttons={ buttons }
      />
    );
  }
  if (error instanceof NetworkError) {
    return <NegativeCaseNoConnection customContainerStyle={ customContainerStyle } onRetry={ onRetry } />;
  }
  if (error instanceof ClientError) {
    return <NegativeCaseUnderMaintenance customContainerStyle={ customContainerStyle } />;
  }
  return <NegativeCaseServerDown customContainerStyle={ customContainerStyle } onRetry={ onRetry } />;
};

export interface InlineTextErrorProps {
  text: string;
  onRetry?: () => void;
}

export const InlineTextError: React.FC<InlineTextErrorProps> = ({ text, onRetry }) => {
  return (
    <HorizontalView alignItems='center'>
      <Text variant='body3' color='textInactive'>
        { text }
      </Text>
      <IconButton onPress={ onRetry } ml='s'>
        <BaseIcon icon={ IcReload } size={ 16 } color='primary' />
      </IconButton>
    </HorizontalView>
  );
};
