import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { Observable } from 'rxjs';
 import { CommentsResponse } from '../../models/comments.interface';

@Service()
export class CommentsService {

    private readonly httpClient = inject(HttpClient)

    getPostComments(postId: string): Observable<CommentsResponse> {
        return this.httpClient.get<CommentsResponse>(environment.base_url + `/posts/${postId}/comments`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('userToken')}`
            }
        })
    }

    createComment(postId: string, data: object): Observable<any> {
        return this.httpClient.post<any>(environment.base_url + `/posts/${postId}/comments`, data, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('userToken')}`
            },
        });
    }
}
