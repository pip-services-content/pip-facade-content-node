"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let _ = require('lodash');
let async = require('async');
const pip_services_commons_node_1 = require("pip-services-commons-node");
const pip_services_facade_node_1 = require("pip-services-facade-node");
class GuidesOperationsV1 extends pip_services_facade_node_1.FacadeOperations {
    constructor() {
        super();
        this._dependencyResolver.put('guides', new pip_services_commons_node_1.Descriptor('pip-services-guides', 'client', '*', '*', '1.0'));
    }
    setReferences(references) {
        super.setReferences(references);
        this._guidesClient = this._dependencyResolver.getOneRequired('guides');
    }
    getGuidesOperation() {
        return (req, res) => {
            this.getGuides(req, res);
        };
    }
    getRandomGuideOperation() {
        return (req, res) => {
            this.getRandomGuide(req, res);
        };
    }
    getGuideOperation() {
        return (req, res) => {
            this.getGuide(req, res);
        };
    }
    createGuideOperation() {
        return (req, res) => {
            this.createGuide(req, res);
        };
    }
    updateGuideOperation() {
        return (req, res) => {
            this.updateGuide(req, res);
        };
    }
    deleteGuideOperation() {
        return (req, res) => {
            this.deleteGuide(req, res);
        };
    }
    getGuides(req, res) {
        let filter = this.getFilterParams(req);
        let paging = this.getPagingParams(req);
        this._guidesClient.getGuides(null, filter, paging, this.sendResult(req, res));
    }
    getRandomGuide(req, res) {
        let filter = this.getFilterParams(req);
        this._guidesClient.getRandomGuide(null, filter, this.sendResult(req, res));
    }
    getGuide(req, res) {
        let guideId = req.route.params.guide_id;
        this._guidesClient.getGuideById(null, guideId, this.sendResult(req, res));
    }
    createGuide(req, res) {
        let guide = req.body || {};
        this._guidesClient.createGuide(null, guide, this.sendResult(req, res));
    }
    updateGuide(req, res) {
        let guideId = req.route.params.guide_id;
        let guide = req.body || {};
        guide.id = guideId;
        this._guidesClient.updateGuide(null, guide, this.sendResult(req, res));
    }
    deleteGuide(req, res) {
        let guideId = req.route.params.guide_id;
        this._guidesClient.deleteGuideById(null, guideId, this.sendResult(req, res));
    }
}
exports.GuidesOperationsV1 = GuidesOperationsV1;
//# sourceMappingURL=GuidesOperationsV1.js.map