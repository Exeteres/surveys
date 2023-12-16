/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PostQuestionAnswerModel } from './PostQuestionAnswerModel';

export type PostQuestionModel = {
    title: string;
    jsonContent: string;
    type: string;
    answers?: Array<PostQuestionAnswerModel> | null;
    users?: Array<string> | null;
    groups?: Array<string> | null;
};

