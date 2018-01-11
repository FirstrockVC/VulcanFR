import { Injectable } from '@angular/core';
import {RequestOptions,Http, Request, RequestMethod} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Config } from '../../utils/config';

@Injectable()
export class ConvertService {

  constructor (private http: Http) {}

  public uploadData(events): Observable<any> {
    const data = { data: events, type: true }
		return this.http.post(`${Config.API}` + '/uploadFile', data)
			.map(Config.extractData).catch(Config.handleError);
  }

  public convert(report): Observable<any> {
		return this.http.get(`${Config.API}` + report)
			.map(Config.extractData).catch(Config.handleError);
  }
}
