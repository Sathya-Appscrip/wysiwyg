import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';


@Injectable()
export class apiServiceManager {

    public apiBase = " https://api.datamuse.com/words?rel_syn=";
    constructor(private _http: Http) { }


    getSynonyms(searchString): Observable<any> {
        let Url = this.apiBase + searchString;
        let headers = new Headers({
            'Content-Type': 'application/json'
        });
        console.log("headers", headers)
        return this._http.get(Url, {
            headers: headers
        }).map(res => res.json());
    }

}