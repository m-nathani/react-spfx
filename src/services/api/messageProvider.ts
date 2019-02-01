import HttpRequest from './httpRequest';

export default class MessageProvider extends HttpRequest {
  private readonly path: string;

  constructor(path: string) {
    super();
    this.path = path;
  }
  public sendMessage(data: any) {
    return this.create(`${this.path}/send-message`, data);
  }
}
