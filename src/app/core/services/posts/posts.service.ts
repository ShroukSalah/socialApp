import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { Observable } from 'rxjs';

@Service()
export class PostsService {

    private readonly httpClient = inject(HttpClient)

    getAllPosts(): Observable<any> {
        return this.httpClient.get<any>(environment.base_url + "/posts", {
            headers: {
                authorization: `Bearer ${localStorage.getItem('userToken')}`
            }
        })
    }
    getSinglePost(postId: string): Observable<any> {
        return this.httpClient.get<any>(environment.base_url + `/posts/${postId}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('userToken')}`
            }
        })
    }
    createPosts(data: object): Observable<any> {
        return this.httpClient.post<any>(environment.base_url + "/posts", data, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('userToken')}`
            },
        });
    }


}
