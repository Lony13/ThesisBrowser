export class ServerInfo {
  message: string;
  time: Date;

  constructor(message: string, time: Date) {
    this.message = message;
    this.time = time;
  }
}
