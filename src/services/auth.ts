import { storage } from './storage';

export function isAlreadyAuthorized() {
  return storage.get('someKey');
}
