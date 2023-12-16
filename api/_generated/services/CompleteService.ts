/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PostUserAnswer } from '../models/PostUserAnswer';
import type { SurveyModel } from '../models/SurveyModel';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class CompleteService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @returns any Success
     * @throws ApiError
     */
    public getApiSurveysCompleteReport({
        surveyId,
        version,
    }: {
        surveyId: string,
        version: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/{version}/Surveys/{surveyId}/Complete/Report',
            path: {
                'surveyId': surveyId,
                'version': version,
            },
        });
    }

    /**
     * @returns SurveyModel Success
     * @throws ApiError
     */
    public getApiSurveysComplete({
        surveyId,
        version,
    }: {
        surveyId: string,
        version: string,
    }): CancelablePromise<SurveyModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/{version}/Surveys/{surveyId}/Complete',
            path: {
                'surveyId': surveyId,
                'version': version,
            },
        });
    }

    /**
     * @returns any Success
     * @throws ApiError
     */
    public postApiSurveysComplete({
        questionId,
        surveyId,
        version,
        sessionId,
        requestBody,
    }: {
        questionId: string,
        surveyId: string,
        version: string,
        sessionId?: string,
        requestBody?: PostUserAnswer,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/{version}/Surveys/{surveyId}/Complete/{questionId}',
            path: {
                'questionId': questionId,
                'surveyId': surveyId,
                'version': version,
            },
            query: {
                'sessionId': sessionId,
            },
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

}
