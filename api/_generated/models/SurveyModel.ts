/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FileModel } from './FileModel';
import type { SurveyQuestionModel } from './SurveyQuestionModel';

export type SurveyModel = {
    id?: string;
    title?: string | null;
    jsonContent?: string | null;
    file?: FileModel;
    questions?: Array<SurveyQuestionModel> | null;
};

