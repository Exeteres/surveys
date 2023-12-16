/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PostQuestionModel } from '../models/PostQuestionModel';
import type { PostSurveyModel } from '../models/PostSurveyModel';
import type { SurveyModel } from '../models/SurveyModel';
import type { SurveyModelSelectModel } from '../models/SurveyModelSelectModel';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class SurveysService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @returns SurveyModelSelectModel Success
     * @throws ApiError
     */
    public getApiSurveys({
        version,
        page = 1,
        size = 10,
        search,
    }: {
        version: string,
        page?: number,
        size?: number,
        search?: string,
    }): CancelablePromise<SurveyModelSelectModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/{version}/Surveys',
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
    public postApiSurveys({
        version,
        requestBody,
    }: {
        version: string,
        requestBody?: PostSurveyModel,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/{version}/Surveys',
            path: {
                'version': version,
            },
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * @returns SurveyModel Success
     * @throws ApiError
     */
    public getApiSurveys1({
        id,
        version,
    }: {
        id: string,
        version: string,
    }): CancelablePromise<SurveyModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/{version}/Surveys/{id}',
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
    public postApiSurveysQuestions({
        surveyId,
        version,
        requestBody,
    }: {
        surveyId: string,
        version: string,
        requestBody?: PostQuestionModel,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/{version}/Surveys/{surveyId}/Questions',
            path: {
                'surveyId': surveyId,
                'version': version,
            },
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

}
