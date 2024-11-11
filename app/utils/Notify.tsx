import { Subject } from 'rxjs';
import { SnackBarActionsParams } from '@design-system/atoms/Snackbar';
import { isNotNullAndUndefined } from 'app/design-system';
import { NotifyError } from 'app/data/exceptions';

export type NotifyParams = SnackBarActionsParams & {
  visible?: boolean;
};

type NotifyParamSuccess = {
  title: string;
  message?: string;
};

type NotifyParamError = {
  title: string;
  message?: string;
  btnText?: string;
  onPress?: () => void;
};

const subject = new Subject<NotifyParams>();

export const Notify = {
  sendNotify: (params: NotifyParams) => {
    const paramsToSend: NotifyParams = {
      ...params,
      visible: true,
    };
    subject.next(paramsToSend);
  },
  sendSuccess: (params: NotifyParamSuccess) => {
    const paramsToSend: NotifyParams = {
      ...params,
      visible: true,
      type: 'success',
      duration: 3000,
    };
    subject.next(paramsToSend);
  },
  sendInfo: (params: NotifyParamSuccess) => {
    const paramsToSend: NotifyParams = {
      ...params,
      visible: true,
      type: 'info',
      duration: 3000,
    };
    subject.next(paramsToSend);
  },
  sendError: (params: NotifyParamError) => {
    const paramsToSend: NotifyParams = {
      ...params,
      visible: true,
      type: 'error',
      duration: isNotNullAndUndefined(params.btnText) && isNotNullAndUndefined(params.onPress) ? 10000 : 3000,
    };
    subject.next(paramsToSend);
  },
  clearNotify: () => {
    const emptyParams: NotifyParams = {
      visible: false,
      title: '',
      message: '',
      type: 'info',
    };
    subject.next(emptyParams);
  },
  getNotify: () => subject.asObservable(),
};

export function handleError(error: NotifyError, onPress?: () => void) {
  Notify.sendError({
    title: error.title,
    message: error.message,
    btnText: error.btnText,
    onPress: onPress,
  });
}

export function handleErrorV2(errorMessage: string, title: string, onPress?: () => void) {
  Notify.sendError({
    title: title,
    message: errorMessage,
    btnText: 'Coba Lagi',
    onPress: onPress,
  });
}

export default Notify;
