import React from 'react';
import { Text, PrimaryButton, SecondaryButton, Spacer, Modal, ModalProps } from '../../atoms';
import { Theme } from '../../theme';

export type ConfirmationModalProps = Omit<ModalProps, 'children'> & {
  isVisible: boolean;
  title?: string;
  description?: string;
  submitText?: string;
  cancelText?: string;
  onSubmit: () => void;
  onCancel: () => void;
  submitBtnColor?: keyof Theme['colors'];
  cancelTextColor?: keyof Theme['colors'];
}

const DEFAULT_CONTENT = {
  SUBMIT_TEXT: 'Lanjutkan',
  CANCEL_TEXT: 'Cancel',
};

export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isVisible,
  title,
  description,
  submitText,
  cancelText,
  submitBtnColor,
  cancelTextColor,
  onSubmit,
  onCancel,
  ...props
}) => {
  return (
    <Modal isVisible={ isVisible } { ...props }>
      <Modal.Container>
        <Modal.Header title={ title ?? '' } />
        <Modal.Body>
          <Text variant={ 'body3' } textAlign='center'>
            { description }
          </Text>
        </Modal.Body>
        <Modal.Footer>
          <SecondaryButton title={ cancelText ?? DEFAULT_CONTENT.CANCEL_TEXT } color={ cancelTextColor } onPress={ onCancel } flex={ 1 } />
          <Spacer width={ 16 } />
          <PrimaryButton title={ submitText ?? DEFAULT_CONTENT.SUBMIT_TEXT } onPress={ onSubmit } flex={ 1 } backgroundColor={ submitBtnColor } />
        </Modal.Footer>
      </Modal.Container>
    </Modal>
  );
};
