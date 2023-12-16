/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class FilesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @returns any Success
     * @throws ApiError
     */
    public postApiFilesUpload({
        version,
        formData,
    }: {
        version: string,
        formData?: {
            ContentType?: string;
            ContentDisposition?: string;
            Headers?: Record<string, Array<string>>;
            Length?: number;
            Name?: string;
            FileName?: string;
        },
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/{version}/Files/Upload',
            path: {
                'version': version,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

}
