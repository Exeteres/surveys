/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { QuestionAnswerWriteModel } from './QuestionAnswerWriteModel';
import type { SurveyQuestionType } from './SurveyQuestionType';

export type SurveyQuestionWriteModel = {
    title: string;
    type: SurveyQuestionType;
    answers?: Array<QuestionAnswerWriteModel> | null;
    userIds?: Array<string> | null;
    groupIds?: Array<string> | null;
};

