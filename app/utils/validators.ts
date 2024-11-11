import { isEmpty } from '.';

export function validateNIK(text: string) {
  if (text === '' || text.trim() === '') {
    return 'Email tidak boleh kosong';
  }
  return '';
}

export function validatePassword(text: string) {
  if (isEmpty(text)) {
    return 'Password tidak boleh kosong';
  } else if (text.length < 6) {
    return 'Password minimal 6 karakter';
  }
  return '';
}
