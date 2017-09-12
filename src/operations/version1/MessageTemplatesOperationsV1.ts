let _ = require('lodash');
let async = require('async');

import { ConfigParams } from 'pip-services-commons-node';
import { IReferences } from 'pip-services-commons-node';
import { Descriptor } from 'pip-services-commons-node'; 
import { DependencyResolver } from 'pip-services-commons-node';

import { IMessageTemplatesClientV1 } from 'pip-clients-msgtemplates-node';
import { MessageTemplateV1 } from 'pip-clients-msgtemplates-node';

import { FacadeOperations } from 'pip-services-facade-node';

export class MessageTemplatesOperationsV1  extends FacadeOperations {
    private _templatesClient: IMessageTemplatesClientV1;

    public constructor() {
        super();

        this._dependencyResolver.put('msgtemplates', new Descriptor('pip-services-msgtemplates', 'client', '*', '*', '1.0'));
    }

    public setReferences(references: IReferences): void {
        super.setReferences(references);

        this._templatesClient = this._dependencyResolver.getOneRequired<IMessageTemplatesClientV1>('msgtemplates');
    }

    public getTemplatesOperation() {
        return (req, res) => {
            this.getTemplates(req, res);
        }
    }

    public getTemplateOperation() {
        return (req, res) => {
            this.getTemplate(req, res);
        }
    }

    public findTemplateOperation() {
        return (req, res) => {
            this.findTemplate(req, res);
        }
    }

    public createTemplateOperation() {
        return (req, res) => {
            this.createTemplate(req, res);
        }
    }

    public updateTemplateOperation() {
        return (req, res) => {
            this.updateTemplate(req, res);
        }
    }

    public deleteTemplateOperation() {
        return (req, res) => {
            this.deleteTemplate(req, res);
        }
    }

    private getTemplates(req: any, res: any): void {
        let filter = this.getFilterParams(req);
        let paging = this.getPagingParams(req);

        this._templatesClient.getTemplates(
            null, filter, paging, this.sendResult(req, res)
        );
    }

    private getTemplate(req: any, res: any): void {
        let templateId = req.route.params.template_id;

        this._templatesClient.getTemplateById(
            null, templateId, this.sendResult(req, res)
        );
    }

    private findTemplate(req: any, res: any): void {
        let idOrName = req.param('id_or_name');

        this._templatesClient.getTemplateByIdOrName(
            null, idOrName, this.sendResult(req, res)
        );
    }

    private createTemplate(req: any, res: any): void {
        let template = req.body || {};

        this._templatesClient.createTemplate(
            null, template, this.sendResult(req, res)
        );
    }

    private updateTemplate(req: any, res: any): void {
        let templateId = req.route.params.template_id;
        let template = req.body || {};
        template.id = templateId;

        this._templatesClient.updateTemplate(
            null, template, this.sendResult(req, res)
        );
    }

    private deleteTemplate(req: any, res: any): void {
        let templateId = req.route.params.template_id;

        this._templatesClient.deleteTemplateById(
            null, templateId, this.sendResult(req, res)
        );
    }

}