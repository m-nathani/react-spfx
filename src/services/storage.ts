import store, { StoreAPI } from 'store2';

export default class Storage {

  private defaultStorage: StoreAPI = store.local;
  private storage: StoreAPI;

  constructor(type?: 'local' | 'session') {
    this.storage = type ? store[type] : this.defaultStorage;
  }

  public get(key: string) {
    return this.storage.get(key);
  }

  public set(key: string, data: any) {
    return this.storage.set(key, data);
  }

  public remove(key: string) {
    return this.storage.remove(key);
  }

  public clearAll() {
    return this.storage.clearAll();
  }

}

export const storage = new Storage('local');
