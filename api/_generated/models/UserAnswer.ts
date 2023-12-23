/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SurveyQuestion } from './SurveyQuestion';
import type { SurveyQuestionAnswer } from './SurveyQuestionAnswer';
import type { SurveySession } from './SurveySession';

export type UserAnswer = {
    id?: string;
    surveyQuestionAnswerId?: string | null;
    answer?: SurveyQuestionAnswer;
    questionId?: string;
    question?: SurveyQuestion;
    textAnswer?: string | null;
    sessionId?: string;
    session?: SurveySession;
};

