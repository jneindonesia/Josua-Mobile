import { NotifyError } from './NotifyError';

export class ClientError extends NotifyError {
  constructor(
    message: string = 'Silahkan Hubungi Tim untuk informasi lebih lanjut',
    title?: string,
    statusCode?: number,
    eventCode?: number,
    detailMessage?: string,
    btnText: string = ' '
  ) {
    super(message, title, btnText);
    this.statusCode = statusCode;
    this.name = '';
    this.name = 'ClientError';
    this.eventCode = eventCode;
    this.detailMessage = detailMessage;
  }

  statusCode?: number;
  eventCode?: number;
  detailMessage?: string;
}
