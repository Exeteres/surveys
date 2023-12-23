/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';

import { AccountService } from './services/AccountService';
import { AuthService } from './services/AuthService';
import { FilesService } from './services/FilesService';
import { SurveysService } from './services/SurveysService';
import { SurveySessionsService } from './services/SurveySessionsService';
import { UserGroupsService } from './services/UserGroupsService';
import { UsersService } from './services/UsersService';

type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;

export class ApiClient {

    public readonly account: AccountService;
    public readonly auth: AuthService;
    public readonly files: FilesService;
    public readonly surveys: SurveysService;
    public readonly surveySessions: SurveySessionsService;
    public readonly userGroups: UserGroupsService;
    public readonly users: UsersService;

    public readonly request: BaseHttpRequest;

    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = FetchHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? '',
            VERSION: config?.VERSION ?? '1.0',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });

        this.account = new AccountService(this.request);
        this.auth = new AuthService(this.request);
        this.files = new FilesService(this.request);
        this.surveys = new SurveysService(this.request);
        this.surveySessions = new SurveySessionsService(this.request);
        this.userGroups = new UserGroupsService(this.request);
        this.users = new UsersService(this.request);
    }
}

