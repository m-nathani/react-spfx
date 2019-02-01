import { storage } from './storage';

export function isAlreadyAuthorized() {
  return storage.getKey('someKey');
}
