let _ = require('lodash');
let async = require('async');

import { ConfigParams } from 'pip-services3-commons-node';
import { IReferences } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node'; 
import { DependencyResolver } from 'pip-services3-commons-node';

import { IDashboardsClientV1 } from 'pip-clients-dashboards-node';
import { DashboardV1 } from 'pip-clients-dashboards-node';

import { FacadeOperations } from 'pip-services3-facade-node';

export class DashboardsOperationsV1  extends FacadeOperations {
    private _dashboardsClient: IDashboardsClientV1;

    public constructor() {
        super();

        this._dependencyResolver.put('dashboards', new Descriptor('pip-services-dashboards', 'client', '*', '*', '1.0'));
    }

    public setReferences(references: IReferences): void {
        super.setReferences(references);

        this._dashboardsClient = this._dependencyResolver.getOneRequired<IDashboardsClientV1>('dashboards');
    }

    public getDashboardsOperation() {
        return (req, res) => {
            this.getDashboards(req, res);
        }
    }

    public getDashboardOperation() {
        return (req, res) => {
            this.getDashboard(req, res);
        }
    }

    public setDashboardOperation() {
        return (req, res) => {
            this.setDashboard(req, res);
        }
    }

    public deleteDashboardsOperation() {
        return (req, res) => {
            this.deleteDashboards(req, res);
        }
    }

    private getDashboards(req: any, res: any): void {
        let filter = this.getFilterParams(req);
        let paging = this.getPagingParams(req);

        this._dashboardsClient.getDashboards(
            null, filter, paging, this.sendResult(req, res)
        );
    }

    private getDashboard(req: any, res: any): void {
        let userId = req.route.params.user_id;
        let app = req.route.params.app;
        let kind = req.route.params.kind;

        this._dashboardsClient.getDashboard(
            null, userId, app, kind, this.sendResult(req, res)
        );
    }

    private setDashboard(req: any, res: any): void {
        let userId = req.route.params.user_id;
        let app = req.route.params.app;
        let kind = req.route.params.kind;

        let dashboard = req.body || {};
        dashboard.user_id = dashboard.user_id || userId;
        dashboard.app = dashboard.app || app;
        dashboard.kind = dashboard.kind || kind;

        this._dashboardsClient.setDashboard(
            null, dashboard, this.sendResult(req, res)
        );
    }

    private deleteDashboards(req: any, res: any): void {
        let filter = this.getFilterParams(req);

        this._dashboardsClient.deleteDashboards(
            null, filter, this.sendEmptyResult(req, res)
        );
    }

}