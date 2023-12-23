/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { File } from './File';
import type { SurveyQuestion } from './SurveyQuestion';

export type Survey = {
    id?: string;
    title?: string | null;
    fileId?: string | null;
    file?: File;
    jsonContent?: string | null;
    questions?: Array<SurveyQuestion> | null;
    surveyGroupId?: string;
};

