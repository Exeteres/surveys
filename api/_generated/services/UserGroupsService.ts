/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserGroupModel } from '../models/UserGroupModel';
import type { UserGroupModelSelectModel } from '../models/UserGroupModelSelectModel';
import type { UserGroupWriteModel } from '../models/UserGroupWriteModel';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class UserGroupsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @returns UserGroupModel Success
     * @throws ApiError
     */
    public getUserGroup({
        id,
    }: {
        id: string,
    }): CancelablePromise<UserGroupModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/1/userGroups/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @returns any Success
     * @throws ApiError
     */
    public updateGroupUsers({
        id,
        requestBody,
    }: {
        id: string,
        requestBody?: UserGroupWriteModel,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/1/userGroups/{id}',
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
    public deleteUserGroup({
        id,
    }: {
        id: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/1/userGroups/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @returns UserGroupModelSelectModel Success
     * @throws ApiError
     */
    public selectUserGroups({
        page = 1,
        size = 10,
        search,
    }: {
        page?: number,
        size?: number,
        search?: string,
    }): CancelablePromise<UserGroupModelSelectModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/1/userGroups',
            query: {
                'page': page,
                'size': size,
                'search': search,
            },
        });
    }

    /**
     * @returns any Success
     * @throws ApiError
     */
    public createUserGroup({
        requestBody,
    }: {
        requestBody?: UserGroupWriteModel,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/1/userGroups',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

}
