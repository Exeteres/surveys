/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FileModel } from './FileModel';
import type { QuestionModel } from './QuestionModel';

export type SurveyModel = {
    id?: string;
    title?: string | null;
    jsonContent?: string | null;
    file?: FileModel;
    questions?: Array<QuestionModel> | null;
};

