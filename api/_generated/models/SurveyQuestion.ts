/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { File } from './File';
import type { Group } from './Group';
import type { Survey } from './Survey';
import type { SurveyQuestionAnswer } from './SurveyQuestionAnswer';
import type { SurveyQuestionType } from './SurveyQuestionType';
import type { User } from './User';

export type SurveyQuestion = {
    id?: string;
    type?: SurveyQuestionType;
    position?: number;
    title?: string | null;
    surveyId?: string;
    survey?: Survey;
    fileId?: string | null;
    file?: File;
    groups?: Array<Group> | null;
    users?: Array<User> | null;
    answers?: Array<SurveyQuestionAnswer> | null;
};

