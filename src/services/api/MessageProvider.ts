import HttpRequest from './HttpRequest';

export default class MessageProvider extends HttpRequest {
  public path: string = '';

  constructor(path: string) {
    super();
    this.path = path;
  }
  private sendMessage(data: any) {
    return this.create(`${this.path}/send-message`, data);
  }
}
