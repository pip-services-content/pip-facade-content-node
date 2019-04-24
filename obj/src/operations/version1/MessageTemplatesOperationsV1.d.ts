import { IReferences } from 'pip-services3-commons-node';
import { FacadeOperations } from 'pip-services3-facade-node';
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
    private getTemplates;
    private getTemplate;
    private findTemplate;
    private createTemplate;
    private updateTemplate;
    private deleteTemplate;
}
