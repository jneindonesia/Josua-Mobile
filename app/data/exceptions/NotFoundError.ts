import { NotifyError } from './NotifyError';

export class NotFoundError extends NotifyError {
  constructor(
    message: string = 'Silahkan hubungi Tim untuk informasi lebih lanjut.',
    namaData: string = '',
    title: string = 'Anda tidak memiliki data',
    btnText: string = 'Coba Lagi'
  ) {
    super(message, title, btnText);
    this.title = `${title} ${namaData}`;
    this.message = message;
    this.btnText = btnText;
  }
}
