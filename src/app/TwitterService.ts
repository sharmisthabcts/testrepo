import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable()
export class TwitterService {
    
    api_url = 'http://localhost:3000';
     
   
     constructor(private http: HttpClient) { }
    
     GetTweets(searchsting:string) {
       return this.http
         .get<any[]>(this.api_url+'/tweets?searchsting='+searchsting)
     }
   
    
    
   }