import { useTheme } from '@shopify/restyle';
import { Theme } from '../../theme';
import React from 'react';
import { StyleSheet, View, StyleProp, ViewStyle } from 'react-native';
import { Text } from '../Text';
import { IconButton } from '../Button';
import { BaseIcon } from '../Icon';
import RNModal, { ModalProps as RNModalProps } from 'react-native-modal';
import { IcClose16 } from 'svgs/index';

export type ModalProps = Pick<RNModalProps, 'onDismiss' | 'onShow' | 'onBackdropPress'> & {
  isVisible: boolean;
  children: React.ReactNode;
  // [x: string]: any;
};
export const Modal = ({ isVisible = false, children, ...props }: ModalProps) => {
  return (
    <RNModal
      isVisible={ isVisible }
      animationInTiming={ 600 }
      animationOutTiming={ 600 }
      backdropTransitionInTiming={ 400 }
      backdropTransitionOutTiming={ 400 }
      { ...props }>
      { children }
    </RNModal>
  );
};

const ModalContainer = ({ children }: { children: React.ReactNode }) => {
  const { styles } = useStyle();
  return <View style={ styles.container }>{ children }</View>;
};

const ModalHeader = ({
  title,
  showClose,
  onClose,
}: {
  title: string;
  style?: StyleProp<ViewStyle>;
  showClose?: boolean;
  onClose?: () => void;
}) => {
  const { styles } = useStyle();
  return (
    <View style={ styles.header }>
      <Text variant='subtitle'>{ title }</Text>
      { showClose && (
        <IconButton position='absolute' right={ 0 } onPress={ onClose }>
          <BaseIcon icon={ IcClose16 } size={ 16 } color='textMidnight' />
        </IconButton>
      ) }
    </View>
  );
};

const ModalBody = ({ children, style }: { children?: React.ReactNode; style?: StyleProp<ViewStyle> }) => {
  const { styles } = useStyle();
  return <View style={ [styles.body, style] }>{ children }</View>;
};

const ModalFooter = ({ children, style }: { children?: React.ReactNode; style?: StyleProp<ViewStyle> }) => {
  const { styles } = useStyle();
  return <View style={ [styles.footer, style] }>{ children }</View>;
};

function useStyle() {
  const { colors } = useTheme<Theme>();

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#ffffff',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#000',
      borderStyle: 'solid',
      padding: 16,
    },
    header: {
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 16,
    },
    text: {
      paddingTop: 10,
      textAlign: 'center',
      fontSize: 24,
    },
    body: {
      justifyContent: 'center',
      paddingHorizontal: 16,
    },
    footer: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 16,
      flexDirection: 'row',
    },
  });

  return {
    styles,
    colors,
  };
}

Modal.Header = ModalHeader;
Modal.Container = ModalContainer;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
