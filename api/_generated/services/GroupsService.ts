/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GroupModel } from '../models/GroupModel';
import type { GroupModelSelectModel } from '../models/GroupModelSelectModel';
import type { PostGroupModel } from '../models/PostGroupModel';
import type { UserModelSelectModel } from '../models/UserModelSelectModel';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class GroupsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @returns GroupModel Success
     * @throws ApiError
     */
    public getApiGroups({
        id,
        version,
    }: {
        id: string,
        version: string,
    }): CancelablePromise<GroupModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/{version}/Groups/{id}',
            path: {
                'id': id,
                'version': version,
            },
        });
    }

    /**
     * @returns any Success
     * @throws ApiError
     */
    public putApiGroups({
        id,
        version,
        requestBody,
    }: {
        id: string,
        version: string,
        requestBody?: PostGroupModel,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/{version}/Groups/{id}',
            path: {
                'id': id,
                'version': version,
            },
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * @returns any Success
     * @throws ApiError
     */
    public deleteApiGroups({
        id,
        version,
    }: {
        id: string,
        version: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/{version}/Groups/{id}',
            path: {
                'id': id,
                'version': version,
            },
        });
    }

    /**
     * @returns GroupModelSelectModel Success
     * @throws ApiError
     */
    public getApiGroups1({
        version,
        page = 1,
        size = 10,
        search,
    }: {
        version: string,
        page?: number,
        size?: number,
        search?: string,
    }): CancelablePromise<GroupModelSelectModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/{version}/Groups',
            path: {
                'version': version,
            },
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
    public postApiGroups({
        version,
        requestBody,
    }: {
        version: string,
        requestBody?: PostGroupModel,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/{version}/Groups',
            path: {
                'version': version,
            },
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * @returns UserModelSelectModel Success
     * @throws ApiError
     */
    public getApiGroupsUsers({
        version,
        page = 1,
        size = 10,
        search,
    }: {
        version: string,
        page?: number,
        size?: number,
        search?: string,
    }): CancelablePromise<UserModelSelectModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/{version}/Groups/Users',
            path: {
                'version': version,
            },
            query: {
                'page': page,
                'size': size,
                'search': search,
            },
        });
    }

}
