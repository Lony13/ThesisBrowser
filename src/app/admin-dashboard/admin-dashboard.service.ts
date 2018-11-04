import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {AppModule} from '../app.module';

@Injectable({providedIn: 'root'})
export class AdminDashboardService {

  private downloaderUrl = '/theses/download';
  private refreshUrl = '/refreshTopics';
  private updateQuotationUrl = '/thesis/quotation/updates';

  constructor(private http: HttpClient) {
  }

  postDownload(author: string, title: string) {
    return this.http.post(AppModule.API_ENDPOINT + this.downloaderUrl, {
      author: author,
      title: title
    }).subscribe(response => response);
  }

  refreshTopics() {
    return this.http.post(AppModule.API_ENDPOINT + this.refreshUrl, {}).subscribe(response => response);
  }
}