import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { Observable } from 'rxjs';
import { PostsResponse } from '../../models/posts.interface';

@Service()
export class PostsService {

    private readonly httpClient = inject(HttpClient)

    getAllPosts(): Observable<PostsResponse> {
        return this.httpClient.get<PostsResponse>(environment.base_url + "/posts", {
            headers: {
                authorization: `Bearer ${localStorage.getItem('userToken')}`
            }
        })
    }
    getSinglePost(postId: string | null): Observable<any> {
        return this.httpClient.get<any>(environment.base_url + `/posts/${postId}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('userToken')}`
            }
        })
    }
    createPosts(data: object): Observable<PostsResponse> {
        return this.httpClient.post<PostsResponse>(environment.base_url + "/posts", data, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('userToken')}`
            },
        });
    }

    DeletePost(postId: string): Observable<PostsResponse> {
        return this.httpClient.delete<PostsResponse>(environment.base_url + `/posts/${postId}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('userToken')}`
            },
        });
    }
    likePost(postId: string): Observable<any> {
        return this.httpClient.put<any>(environment.base_url + `/posts/${postId}/like`,{}, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('userToken')}`
            },
        });
    }
}
