export class NotifyError extends Error {
  constructor(
    message: string = 'Silahkan Hubungi Tim untuk informasi lebih lanjut',
    title: string = 'Ups ada error',
    btnText = ' '
  ) {
    super(message);
    this.title = title;
    this.message = message;
    this.btnText = btnText;
  }

  title: string;
  btnText: string;
}

export class NotifyErrorGetData extends Error {
  constructor(
    message: string = 'Silahkan cek kembali secara berkala',
    dataName: string = '',
    btnText = 'COBA LAGI'
  ) {
    super(message);
    this.title = `Gagal Memuat Data ${dataName}`;
    this.name = 'NotifyError';
    this.btnText = btnText;
  }

  title: string;
  btnText: string;
}
