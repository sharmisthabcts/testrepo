import { Component, OnInit } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { Options } from 'selenium-webdriver';
import {TwitterService} from '../TwitterService'
import { JsonPipe } from '@angular/common';
import { Observable } from 'rxjs/internal/Observable';
import { DatePipe } from '@angular/common'
import * as moment from 'moment';

@Component({
  selector: 'app-get-twitter-data',
  templateUrl: './get-twitter-data.component.html',
  styleUrls: ['./get-twitter-data.component.css']
})
export class GetTwitterDataComponent implements OnInit {
  Fetching:boolean=false;
   tweets: any;
   private tweetdates:Date[]=[];
   private averageTweetsPerMinute:number;

  constructor(private twitterService:TwitterService,public datepipe: DatePipe) { }
  

  ngOnInit() {
  }
  getTweets(searchTweet:string) {  
    this.tweets=null; 
    this.Fetching=  true; 
    this.averageTweetsPerMinute=null;
    console.log(this.Fetching);
    return this.twitterService.GetTweets(searchTweet)
    .subscribe((res: any) => {       
      this.tweets = res;
      this.Fetching=false;
      console.log(this.tweets);  
     this.findAverageTweets(res);
      
    }); 
     
  }

  findAverageTweets(res)
  {
    for (let count:number=0;count<res.length;count++)
    {
       this.tweetdates.push(res[count]["created_at"]);
     
    }
    let distinctdate=Array.from(new Set(this.tweetdates));
    if(distinctdate.length>0)
    {
         let firstdate:Date=distinctdate[0];
         let lastdate:Date=distinctdate[distinctdate.length-1];
         console.log(firstdate);
         console.log(lastdate);
         
         var timeDiff = this.calculateMinutes(lastdate,firstdate)
         console.log(timeDiff);
         this.averageTweetsPerMinute =res.length;
          if(timeDiff!=0)
          {
             this.averageTweetsPerMinute =res.length/timeDiff;
         
          }
          console.log(this.averageTweetsPerMinute);
    }
  }
 
  calculateMinutes(startDate,endDate)
  {
     var start_date = moment(startDate, 'YYYY-MM-DD HH:mm:ss');
     var end_date = moment(endDate, 'YYYY-MM-DD HH:mm:ss');
     var duration = moment.duration(end_date.diff(start_date));
     var days = duration.asMinutes();       
     return days;
  }
  

}

