import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppSettings} from '../app.settings';
import {ServerInfo} from '../model/serverInfo';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class AdminDashboardService {

  private downloaderUrl = '/theses/download';
  private refreshUrl = '/refreshTopics';
  private updateQuotationUrl = '/thesis/quotation/updates';
  private serverInfoUrl = '/server/info';

  private messages: ServerInfo[];

  constructor(private http: HttpClient) {
  }

  postDownload(author: string, title: string) {
    return this.http.post<ServerInfo>(AppSettings.API_ENDPOINT  + this.downloaderUrl, {
      author: author,
      title: title
    }).subscribe(value => this.messages.push(value));
  }

  refreshTopics() {
    return this.http.post<ServerInfo>(AppSettings.API_ENDPOINT + this.refreshUrl, {})
      .subscribe(value => this.messages.push(value));
  }

  loadServerInfos(from: number, to: number): Observable<ServerInfo[]> {
    return this.http.get<ServerInfo[]>(AppSettings.API_ENDPOINT + this.serverInfoUrl, {
      params: {
        from: from.toString(),
        to: to.toString()
      }
    })
    .pipe(
      catchError(this.handleError('loadServerInfos', []))
    );
  }

  getServerInfo(): ServerInfo[] {
    return this.messages;
  }

  setServerInfo(infos: ServerInfo[]) {
    this.messages = infos;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
