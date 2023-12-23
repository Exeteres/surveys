/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SurveyQuestionAnswerModel } from './SurveyQuestionAnswerModel';
import type { SurveyQuestionType } from './SurveyQuestionType';
import type { UserGroupModel } from './UserGroupModel';
import type { UserModel } from './UserModel';

export type SurveyQuestionModel = {
    id?: string;
    type?: SurveyQuestionType;
    title?: string | null;
    answers?: Array<SurveyQuestionAnswerModel> | null;
    users?: Array<UserModel> | null;
    groups?: Array<UserGroupModel> | null;
};

