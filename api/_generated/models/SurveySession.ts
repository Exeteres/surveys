/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Survey } from './Survey';
import type { User } from './User';
import type { UserAnswer } from './UserAnswer';

export type SurveySession = {
    id?: string;
    readonly start?: string;
    end?: string | null;
    answers?: Array<UserAnswer> | null;
    user?: User;
    userId?: string;
    survey?: Survey;
    surveyId?: string;
};

