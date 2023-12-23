/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LoginModel } from '../models/LoginModel';
import type { TokenModel } from '../models/TokenModel';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AuthService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @returns TokenModel Success
     * @throws ApiError
     */
    public login({
        requestBody,
    }: {
        requestBody?: LoginModel,
    }): CancelablePromise<TokenModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/1/auth/login',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * @returns TokenModel Success
     * @throws ApiError
     */
    public refresh({
        requestBody,
    }: {
        requestBody?: TokenModel,
    }): CancelablePromise<TokenModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/1/auth/refresh',
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

}
