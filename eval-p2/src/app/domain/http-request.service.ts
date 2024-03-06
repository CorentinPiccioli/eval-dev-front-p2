import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})

export class HttpRequestService {

  private _header: HttpHeaders;
  public api =  "http://localhost:7071/api";
  constructor(private _httpClient: HttpClient) {
    this._header = new HttpHeaders();
  }

  public get<T>(path: string, params: HttpParams = new HttpParams()) {
    return this._httpClient.get<T>(this.api + path, {params: params})
  }

  public post<T>(path: string, params: object) {
    return this._httpClient.post<T>(this.api + path, params)
  }

  public delete<T>(path: string, params: object = {}) {
    return this._httpClient.delete<T>(this.api + path, params)
  }

  public update<T>(path: string, params: object) {
    return this._httpClient.put<T>(this.api + path, params)
  }
}
