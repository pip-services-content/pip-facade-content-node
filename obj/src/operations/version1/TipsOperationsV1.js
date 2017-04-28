"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let _ = require('lodash');
let async = require('async');
const pip_services_commons_node_1 = require("pip-services-commons-node");
const pip_services_facade_node_1 = require("pip-services-facade-node");
class TipsOperationsV1 extends pip_services_facade_node_1.FacadeOperations {
    constructor() {
        super();
        this._dependencyResolver.put('tips', new pip_services_commons_node_1.Descriptor('pip-services-tips', 'client', '*', '*', '1.0'));
    }
    setReferences(references) {
        super.setReferences(references);
        this._tipsClient = this._dependencyResolver.getOneRequired('tips');
    }
    getTipsOperation() {
        return (req, res) => {
            this.getTips(req, res);
        };
    }
    getRandomTipOperation() {
        return (req, res) => {
            this.getRandomTip(req, res);
        };
    }
    getTipOperation() {
        return (req, res) => {
            this.getTip(req, res);
        };
    }
    createTipOperation() {
        return (req, res) => {
            this.createTip(req, res);
        };
    }
    updateTipOperation() {
        return (req, res) => {
            this.updateTip(req, res);
        };
    }
    deleteTipOperation() {
        return (req, res) => {
            this.deleteTip(req, res);
        };
    }
    getTips(req, res) {
        let filter = this.getFilterParams(req);
        let paging = this.getPagingParams(req);
        this._tipsClient.getTips(null, filter, paging, this.sendResult(req, res));
    }
    getRandomTip(req, res) {
        let filter = this.getFilterParams(req);
        this._tipsClient.getRandomTip(null, filter, this.sendResult(req, res));
    }
    getTip(req, res) {
        let tipId = req.route.params.tip_id;
        this._tipsClient.getTipById(null, tipId, this.sendResult(req, res));
    }
    createTip(req, res) {
        let tip = req.body || {};
        this._tipsClient.createTip(null, tip, this.sendResult(req, res));
    }
    updateTip(req, res) {
        let tipId = req.route.params.tip_id;
        let tip = req.body || {};
        tip.id = tipId;
        this._tipsClient.updateTip(null, tip, this.sendResult(req, res));
    }
    deleteTip(req, res) {
        let tipId = req.route.params.tip_id;
        this._tipsClient.deleteTipById(null, tipId, this.sendResult(req, res));
    }
}
exports.TipsOperationsV1 = TipsOperationsV1;
//# sourceMappingURL=TipsOperationsV1.js.map