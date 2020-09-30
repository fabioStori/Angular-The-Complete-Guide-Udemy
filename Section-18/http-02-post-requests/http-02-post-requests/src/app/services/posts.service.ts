/* eslint-disable @typescript-eslint/ban-types */
import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpEventType,
  HttpHeaders,
  HttpParams
} from '@angular/common/http';
import { Post } from '../models/post.model';
import { map, catchError, tap } from 'rxjs/operators';
import { Observable, Subject, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PostsService {
  error = new Subject();

  constructor(private http: HttpClient) {}

  createAndStorePost(title: string, content: string): void {
    const postData: Post = { title: title, content: content };
    this.http
      .post<{ name: string }>(
        'https://ng-complete-guide-3cd1d.firebaseio.com/posts.json',
        postData,
        {
          observe: 'response'
        }
      )
      .subscribe(
        (responseData) => {
          console.log(responseData);
        },
        (error) => {
          this.error = error['message'];
        }
      );
  }

  fetchPosts(): Observable<{}> {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print', 'pretty');
    searchParams = searchParams.append('custom', 'key');
    return this.http
      .get<{ [key: string]: Post }>(
        'https://ng-complete-guide-3cd1d.firebaseio.com/posts.json',
        {
          headers: new HttpHeaders({ 'Custom-Header': 'Hello' }),
          params: searchParams,
          responseType: 'json'
        }
      )
      .pipe(
        map((responseData) => {
          const postsArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key))
              postsArray.push({ ...responseData[key], id: key });
          }
          return postsArray;
        }),
        catchError((errorRes) => {
          return throwError(errorRes);
        })
      );
  }

  deletePosts(): Observable<{}> {
    return this.http
      .delete('https://ng-complete-guide-3cd1d.firebaseio.com/posts.json', {
        observe: 'events',
        responseType: 'text'
      })
      .pipe(
        tap((event) => {
          console.log(event);
          // if(event.type === HttpEventType.Sent){
          //
          // }
          // if(event.type === HttpEventType.Response){
          //   console.log(event.body);
          // }
        })
      );
  }
}
