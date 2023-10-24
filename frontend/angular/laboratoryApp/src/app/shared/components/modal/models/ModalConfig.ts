export type modalType = 'success' | 'error' | 'other';

export interface ModalDataConfig {
  type: modalType;
  message?: string | string[];
  buttonTitle?:string
}
