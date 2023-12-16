/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';

import { CompleteService } from './services/CompleteService';
import { FilesService } from './services/FilesService';
import { GroupsService } from './services/GroupsService';
import { SurveysService } from './services/SurveysService';
import { TokenService } from './services/TokenService';

type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;

export class ApiClient {

    public readonly complete: CompleteService;
    public readonly files: FilesService;
    public readonly groups: GroupsService;
    public readonly surveys: SurveysService;
    public readonly token: TokenService;

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

        this.complete = new CompleteService(this.request);
        this.files = new FilesService(this.request);
        this.groups = new GroupsService(this.request);
        this.surveys = new SurveysService(this.request);
        this.token = new TokenService(this.request);
    }
}

