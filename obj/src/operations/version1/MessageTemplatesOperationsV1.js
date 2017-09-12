"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let _ = require('lodash');
let async = require('async');
const pip_services_commons_node_1 = require("pip-services-commons-node");
const pip_services_facade_node_1 = require("pip-services-facade-node");
class MessageTemplatesOperationsV1 extends pip_services_facade_node_1.FacadeOperations {
    constructor() {
        super();
        this._dependencyResolver.put('msgtemplates', new pip_services_commons_node_1.Descriptor('pip-services-msgtemplates', 'client', '*', '*', '1.0'));
    }
    setReferences(references) {
        super.setReferences(references);
        this._templatesClient = this._dependencyResolver.getOneRequired('msgtemplates');
    }
    getTemplatesOperation() {
        return (req, res) => {
            this.getTemplates(req, res);
        };
    }
    getTemplateOperation() {
        return (req, res) => {
            this.getTemplate(req, res);
        };
    }
    findTemplateOperation() {
        return (req, res) => {
            this.findTemplate(req, res);
        };
    }
    createTemplateOperation() {
        return (req, res) => {
            this.createTemplate(req, res);
        };
    }
    updateTemplateOperation() {
        return (req, res) => {
            this.updateTemplate(req, res);
        };
    }
    deleteTemplateOperation() {
        return (req, res) => {
            this.deleteTemplate(req, res);
        };
    }
    getTemplates(req, res) {
        let filter = this.getFilterParams(req);
        let paging = this.getPagingParams(req);
        this._templatesClient.getTemplates(null, filter, paging, this.sendResult(req, res));
    }
    getTemplate(req, res) {
        let templateId = req.route.params.template_id;
        this._templatesClient.getTemplateById(null, templateId, this.sendResult(req, res));
    }
    findTemplate(req, res) {
        let idOrName = req.param('id_or_name');
        this._templatesClient.getTemplateByIdOrName(null, idOrName, this.sendResult(req, res));
    }
    createTemplate(req, res) {
        let template = req.body || {};
        this._templatesClient.createTemplate(null, template, this.sendResult(req, res));
    }
    updateTemplate(req, res) {
        let templateId = req.route.params.template_id;
        let template = req.body || {};
        template.id = templateId;
        this._templatesClient.updateTemplate(null, template, this.sendResult(req, res));
    }
    deleteTemplate(req, res) {
        let templateId = req.route.params.template_id;
        this._templatesClient.deleteTemplateById(null, templateId, this.sendResult(req, res));
    }
}
exports.MessageTemplatesOperationsV1 = MessageTemplatesOperationsV1;
//# sourceMappingURL=MessageTemplatesOperationsV1.js.map