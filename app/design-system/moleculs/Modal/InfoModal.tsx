import React from 'react';
import { Text, PrimaryButton, Modal, ModalProps, TextProps } from '../../atoms';

export type InfoModalProps = Omit<ModalProps, 'children'> & {
  isVisible: boolean;
  title: string;
  description?: string | TextProps['children'];
  buttonText: string;
  onPressBtn: () => void;
  showClose?: boolean;
};

const DEFAULT_CONTENT = {
  BUTTON_TEXT: 'Ok',
};

export const InfoModal: React.FC<InfoModalProps> = ({
  isVisible,
  title,
  description,
  buttonText,
  onPressBtn,
  showClose,
  ...props
}) => {
  return (
    <Modal isVisible={ isVisible } { ...props }>
      <Modal.Container>
        <Modal.Header title={ title ?? '' } showClose={ showClose } onClose={ props.onDismiss } />
        <Modal.Body>
          <Text variant={ 'body3' } textAlign='center'>
            { description }
          </Text>
        </Modal.Body>
        <Modal.Footer>
          <PrimaryButton
            title={ buttonText ?? DEFAULT_CONTENT.BUTTON_TEXT }
            onPress={ onPressBtn }
            minWidth={ 100 }
          />
        </Modal.Footer>
      </Modal.Container>
    </Modal>
  );
};
