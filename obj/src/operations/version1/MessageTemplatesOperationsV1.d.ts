import { IReferences } from 'pip-services-commons-node';
import { FacadeOperations } from 'pip-services-facade-node';
export declare class MessageTemplatesOperationsV1 extends FacadeOperations {
    private _templatesClient;
    constructor();
    setReferences(references: IReferences): void;
    getTemplatesOperation(): (req: any, res: any) => void;
    getTemplateOperation(): (req: any, res: any) => void;
    findTemplateOperation(): (req: any, res: any) => void;
    createTemplateOperation(): (req: any, res: any) => void;
    updateTemplateOperation(): (req: any, res: any) => void;
    deleteTemplateOperation(): (req: any, res: any) => void;
    private getTemplates(req, res);
    private getTemplate(req, res);
    private findTemplate(req, res);
    private createTemplate(req, res);
    private updateTemplate(req, res);
    private deleteTemplate(req, res);
}
