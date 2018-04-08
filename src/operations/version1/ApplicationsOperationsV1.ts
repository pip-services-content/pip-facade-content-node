let _ = require('lodash');
let async = require('async');

import { ConfigParams } from 'pip-services-commons-node';
import { IReferences } from 'pip-services-commons-node';
import { Descriptor } from 'pip-services-commons-node'; 
import { DependencyResolver } from 'pip-services-commons-node';

import { IApplicationsClientV1 } from 'pip-clients-applications-node';
import { ApplicationV1 } from 'pip-clients-applications-node';

import { FacadeOperations } from 'pip-services-facade-node';

export class ApplicationsOperationsV1  extends FacadeOperations {
    private _applicationsClient: IApplicationsClientV1;

    public constructor() {
        super();

        this._dependencyResolver.put('applications', new Descriptor('pip-services-applications', 'client', '*', '*', '1.0'));
    }

    public setReferences(references: IReferences): void {
        super.setReferences(references);

        this._applicationsClient = this._dependencyResolver.getOneRequired<IApplicationsClientV1>('applications');
    }

    public getApplicationsOperation() {
        return (req, res) => {
            this.getApplications(req, res);
        }
    }

    public getApplicationOperation() {
        return (req, res) => {
            this.getApplication(req, res);
        }
    }

    public createApplicationOperation() {
        return (req, res) => {
            this.createApplication(req, res);
        }
    }

    public updateApplicationOperation() {
        return (req, res) => {
            this.updateApplication(req, res);
        }
    }

    public deleteApplicationOperation() {
        return (req, res) => {
            this.deleteApplication(req, res);
        }
    }

    private getApplications(req: any, res: any): void {
        let filter = this.getFilterParams(req);
        let paging = this.getPagingParams(req);

        this._applicationsClient.getApplications(
            null, filter, paging, this.sendResult(req, res)
        );
    }

    private getApplication(req: any, res: any): void {
        let applicationId = req.route.params.application_id;

        this._applicationsClient.getApplicationById(
            null, applicationId, this.sendResult(req, res)
        );
    }

    private createApplication(req: any, res: any): void {
        let application = req.body || {};

        this._applicationsClient.createApplication(
            null, application, this.sendResult(req, res)
        );
    }

    private updateApplication(req: any, res: any): void {
        let applicationId = req.route.params.application_id;
        let application = req.body || {};
        application.id = applicationId;

        this._applicationsClient.updateApplication(
            null, application, this.sendResult(req, res)
        );
    }

    private deleteApplication(req: any, res: any): void {
        let applicationId = req.route.params.application_id;

        this._applicationsClient.deleteApplicationById(
            null, applicationId, this.sendResult(req, res)
        );
    }

}