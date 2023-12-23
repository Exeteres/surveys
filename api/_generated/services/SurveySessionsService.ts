/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SubmitQuestionAnswerWriteModel } from '../models/SubmitQuestionAnswerWriteModel';
import type { SurveyModel } from '../models/SurveyModel';
import type { SurveySession } from '../models/SurveySession';
import type { SurveySessionWriteModel } from '../models/SurveySessionWriteModel';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class SurveySessionsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @returns SurveyModel Success
     * @throws ApiError
     */
    public getSurveyQuestions({
        surveySessionId,
        surveyId,
    }: {
        surveySessionId: string,
        surveyId?: string,
    }): CancelablePromise<SurveyModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/1/surveySessions/{surveySessionId}',
            path: {
                'surveySessionId': surveySessionId,
            },
            query: {
                'surveyId': surveyId,
            },
        });
    }

    /**
     * @returns SurveySession Success
     * @throws ApiError
     */
    public createSurveySession({
        surveySessionId,
        requestBody,
    }: {
        surveySessionId: string,
        requestBody?: SurveySessionWriteModel,
    }): CancelablePromise<SurveySession> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/1/surveySessions/{surveySessionId}',
            path: {
                'surveySessionId': surveySessionId,
            },
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * @returns any Success
     * @throws ApiError
     */
    public submitQuestionAnswer({
        surveySessionId,
        questionId,
        requestBody,
    }: {
        surveySessionId: string,
        questionId: string,
        requestBody?: SubmitQuestionAnswerWriteModel,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/1/surveySessions/{surveySessionId}/answers/{questionId}/submit',
            path: {
                'surveySessionId': surveySessionId,
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
    public completeSurveySession({
        surveySessionId,
    }: {
        surveySessionId: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/1/surveySessions/{surveySessionId}/complete',
            path: {
                'surveySessionId': surveySessionId,
            },
        });
    }

}
