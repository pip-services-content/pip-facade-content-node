"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let _ = require('lodash');
let async = require('async');
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_facade_node_1 = require("pip-services3-facade-node");
class DashboardsOperationsV1 extends pip_services3_facade_node_1.FacadeOperations {
    constructor() {
        super();
        this._dependencyResolver.put('dashboards', new pip_services3_commons_node_1.Descriptor('pip-services-dashboards', 'client', '*', '*', '1.0'));
    }
    setReferences(references) {
        super.setReferences(references);
        this._dashboardsClient = this._dependencyResolver.getOneRequired('dashboards');
    }
    getDashboardsOperation() {
        return (req, res) => {
            this.getDashboards(req, res);
        };
    }
    getDashboardOperation() {
        return (req, res) => {
            this.getDashboard(req, res);
        };
    }
    setDashboardOperation() {
        return (req, res) => {
            this.setDashboard(req, res);
        };
    }
    deleteDashboardsOperation() {
        return (req, res) => {
            this.deleteDashboards(req, res);
        };
    }
    getDashboards(req, res) {
        let filter = this.getFilterParams(req);
        let paging = this.getPagingParams(req);
        this._dashboardsClient.getDashboards(null, filter, paging, this.sendResult(req, res));
    }
    getDashboard(req, res) {
        let userId = req.route.params.user_id;
        let app = req.route.params.app;
        let kind = req.route.params.kind;
        this._dashboardsClient.getDashboard(null, userId, app, kind, this.sendResult(req, res));
    }
    setDashboard(req, res) {
        let userId = req.route.params.user_id;
        let app = req.route.params.app;
        let kind = req.route.params.kind;
        let dashboard = req.body || {};
        dashboard.user_id = dashboard.user_id || userId;
        dashboard.app = dashboard.app || app;
        dashboard.kind = dashboard.kind || kind;
        this._dashboardsClient.setDashboard(null, dashboard, this.sendResult(req, res));
    }
    deleteDashboards(req, res) {
        let filter = this.getFilterParams(req);
        this._dashboardsClient.deleteDashboards(null, filter, this.sendEmptyResult(req, res));
    }
}
exports.DashboardsOperationsV1 = DashboardsOperationsV1;
//# sourceMappingURL=DashboardsOperationsV1.js.map