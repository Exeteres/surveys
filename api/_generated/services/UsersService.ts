/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserModel } from '../models/UserModel';
import type { UserModelSelectModel } from '../models/UserModelSelectModel';
import type { UserWriteModel } from '../models/UserWriteModel';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class UsersService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @returns UserModelSelectModel Success
     * @throws ApiError
     */
    public selectUsers({
        page = 1,
        size = 10,
        search,
    }: {
        page?: number,
        size?: number,
        search?: string,
    }): CancelablePromise<UserModelSelectModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/1/users',
            query: {
                'page': page,
                'size': size,
                'search': search,
            },
        });
    }

    /**
     * @returns UserModel Success
     * @throws ApiError
     */
    public createUser({
        requestBody,
    }: {
        requestBody?: UserWriteModel,
    }): CancelablePromise<UserModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/1/users',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * @returns UserModel Success
     * @throws ApiError
     */
    public updateUser({
        id,
        requestBody,
    }: {
        id: string,
        requestBody?: UserWriteModel,
    }): CancelablePromise<UserModel> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/1/users/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * @returns any Success
     * @throws ApiError
     */
    public deleteUser({
        id,
    }: {
        id: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/1/users/{id}',
            path: {
                'id': id,
            },
        });
    }

}
