import store, { StoreAPI } from 'store2';

export default class Storage {

  private defaultStorage: StoreAPI = store.local;
  private storage: StoreAPI;

  constructor(storageType?: 'local' | 'session') {
    this.storage = storageType ? store[storageType] : this.defaultStorage;
  }

  public getKey(key: string): void {
    this.storage.get(key);
  }

  public setKey(key: string, data: any): void  {
    this.storage.set(key, data);
  }

  public remove(key: string): void  {
    this.storage.remove(key);
  }

  public clearAll(): void  {
    this.storage.clearAll();
  }

}

export const storage = new Storage('local');
