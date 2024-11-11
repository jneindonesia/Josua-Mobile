import { NotifyError } from './NotifyError';

export class TimeoutError extends NotifyError {
  constructor(
    message: string = 'Periksa kembali koneksi jaringan Anda',
    title: string = 'Request Timeout',
    btnText: string = 'COBA LAGI'
  ) {
    super(message, title);

    this.title = title;
    this.message = message;
    this.btnText = btnText;
  }
}
