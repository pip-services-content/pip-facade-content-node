"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let _ = require('lodash');
let async = require('async');
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_facade_node_1 = require("pip-services3-facade-node");
class ApplicationsOperationsV1 extends pip_services3_facade_node_1.FacadeOperations {
    constructor() {
        super();
        this._dependencyResolver.put('applications', new pip_services3_commons_node_1.Descriptor('pip-services-applications', 'client', '*', '*', '1.0'));
    }
    setReferences(references) {
        super.setReferences(references);
        this._applicationsClient = this._dependencyResolver.getOneRequired('applications');
    }
    getApplicationsOperation() {
        return (req, res) => {
            this.getApplications(req, res);
        };
    }
    getApplicationOperation() {
        return (req, res) => {
            this.getApplication(req, res);
        };
    }
    createApplicationOperation() {
        return (req, res) => {
            this.createApplication(req, res);
        };
    }
    updateApplicationOperation() {
        return (req, res) => {
            this.updateApplication(req, res);
        };
    }
    deleteApplicationOperation() {
        return (req, res) => {
            this.deleteApplication(req, res);
        };
    }
    getApplications(req, res) {
        let filter = this.getFilterParams(req);
        let paging = this.getPagingParams(req);
        this._applicationsClient.getApplications(null, filter, paging, this.sendResult(req, res));
    }
    getApplication(req, res) {
        let applicationId = req.route.params.application_id;
        this._applicationsClient.getApplicationById(null, applicationId, this.sendResult(req, res));
    }
    createApplication(req, res) {
        let application = req.body || {};
        this._applicationsClient.createApplication(null, application, this.sendResult(req, res));
    }
    updateApplication(req, res) {
        let applicationId = req.route.params.application_id;
        let application = req.body || {};
        application.id = applicationId;
        this._applicationsClient.updateApplication(null, application, this.sendResult(req, res));
    }
    deleteApplication(req, res) {
        let applicationId = req.route.params.application_id;
        this._applicationsClient.deleteApplicationById(null, applicationId, this.sendResult(req, res));
    }
}
exports.ApplicationsOperationsV1 = ApplicationsOperationsV1;
//# sourceMappingURL=ApplicationsOperationsV1.js.map