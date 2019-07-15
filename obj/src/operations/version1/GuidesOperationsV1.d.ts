import { IReferences } from 'pip-services3-commons-node';
import { FacadeOperations } from 'pip-services3-facade-node';
export declare class GuidesOperationsV1 extends FacadeOperations {
    private _guidesClient;
    constructor();
    setReferences(references: IReferences): void;
    getGuidesOperation(): (req: any, res: any) => void;
    getRandomGuideOperation(): (req: any, res: any) => void;
    getGuideOperation(): (req: any, res: any) => void;
    createGuideOperation(): (req: any, res: any) => void;
    updateGuideOperation(): (req: any, res: any) => void;
    deleteGuideOperation(): (req: any, res: any) => void;
    private getGuides(req, res);
    private getRandomGuide(req, res);
    private getGuide(req, res);
    private createGuide(req, res);
    private updateGuide(req, res);
    private deleteGuide(req, res);
}
