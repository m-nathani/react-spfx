import HttpRequest from './HttpRequest';

export default class MessageProvider extends HttpRequest {
  private path: string = '';

  constructor(path: string) {
    super();
    this.path = path;
  }
  public sendMessage(data: any) {
    return this.create(`${this.path}/send-message`, data);
  }
}
