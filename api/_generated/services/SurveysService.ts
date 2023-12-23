/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SurveyModel } from '../models/SurveyModel';
import type { SurveyModelSelectModel } from '../models/SurveyModelSelectModel';
import type { SurveyQuestionModel } from '../models/SurveyQuestionModel';
import type { SurveyQuestionWriteModel } from '../models/SurveyQuestionWriteModel';
import type { SurveyWriteModel } from '../models/SurveyWriteModel';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class SurveysService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @returns SurveyModelSelectModel Success
     * @throws ApiError
     */
    public getSurveys({
        page = 1,
        size = 10,
        search,
    }: {
        page?: number,
        size?: number,
        search?: string,
    }): CancelablePromise<SurveyModelSelectModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/1/surveys',
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
    public createSurvey({
        requestBody,
    }: {
        requestBody?: SurveyWriteModel,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/1/surveys',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * @returns SurveyModel Success
     * @throws ApiError
     */
    public getSurvey({
        id,
    }: {
        id: string,
    }): CancelablePromise<SurveyModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/1/surveys/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @returns SurveyModel Success
     * @throws ApiError
     */
    public updateSurvey({
        id,
        requestBody,
    }: {
        id: string,
        requestBody?: SurveyWriteModel,
    }): CancelablePromise<SurveyModel> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/1/surveys/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * @returns SurveyQuestionModel Success
     * @throws ApiError
     */
    public createSurveyQuestion({
        surveyId,
        requestBody,
    }: {
        surveyId: string,
        requestBody?: SurveyQuestionWriteModel,
    }): CancelablePromise<SurveyQuestionModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/1/surveys/{surveyId}/questions',
            path: {
                'surveyId': surveyId,
            },
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * @returns SurveyQuestionModel Success
     * @throws ApiError
     */
    public updateSurveyQuestion({
        surveyId,
        questionId,
        requestBody,
    }: {
        surveyId: string,
        questionId: string,
        requestBody?: SurveyQuestionWriteModel,
    }): CancelablePromise<SurveyQuestionModel> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/1/surveys/{surveyId}/questions/{questionId}',
            path: {
                'surveyId': surveyId,
                'questionId': questionId,
            },
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * @returns any Success
     * @throws ApiError
     */
    public deleteSurveyQuestion({
        surveyId,
        questionId,
    }: {
        surveyId: string,
        questionId: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/1/surveys/{surveyId}/questions/{questionId}',
            path: {
                'surveyId': surveyId,
                'questionId': questionId,
            },
        });
    }

    /**
     * @returns any Success
     * @throws ApiError
     */
    public getReport({
        surveyId,
    }: {
        surveyId?: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/1/surveys/report',
            query: {
                'surveyId': surveyId,
            },
        });
    }

}
