import { NotifyError } from './NotifyError';

export class NetworkError extends NotifyError {
  constructor(
    message: string = 'Pastikan Internet anda lancar dan cek ulang paket data, WiFI atau jaringan di tempat anda',
    title: string = 'Tidak ada internet',
    btnText: string = 'Coba Lagi'
  ) {
    super(message, title);

    this.title = title;
    this.message = message;
    this.btnText = btnText;
  }
}
