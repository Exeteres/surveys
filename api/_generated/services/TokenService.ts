/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LoginModel } from '../models/LoginModel';
import type { TokenModel } from '../models/TokenModel';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class TokenService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @returns any Success
     * @throws ApiError
     */
    public postApiToken({
        version,
        requestBody,
    }: {
        version: string,
        requestBody?: LoginModel,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/{version}/Token',
            path: {
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
    public postApiTokenRefresh({
        version,
        requestBody,
    }: {
        version: string,
        requestBody?: TokenModel,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/{version}/Token/Refresh',
            path: {
                'version': version,
            },
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

}
