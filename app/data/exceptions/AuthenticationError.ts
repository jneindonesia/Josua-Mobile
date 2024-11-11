import { NotifyError } from './NotifyError';

export class AuthenticationError extends NotifyError {
  constructor(
    message: string = 'Untuk membutuhkan akses anda dapat menghubungi Tim untuk informasi lebih lanjut',
    title: string = 'Anda tidak memiliki akses',
    btnText: string = ' '
  ) {
    super(message, title);

    this.title = title;
    this.message = message;
    this.btnText = btnText;
  }
}
