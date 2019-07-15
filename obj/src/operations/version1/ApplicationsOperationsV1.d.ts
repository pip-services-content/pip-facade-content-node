import { IReferences } from 'pip-services3-commons-node';
import { FacadeOperations } from 'pip-services3-facade-node';
export declare class ApplicationsOperationsV1 extends FacadeOperations {
    private _applicationsClient;
    constructor();
    setReferences(references: IReferences): void;
    getApplicationsOperation(): (req: any, res: any) => void;
    getApplicationOperation(): (req: any, res: any) => void;
    createApplicationOperation(): (req: any, res: any) => void;
    updateApplicationOperation(): (req: any, res: any) => void;
    deleteApplicationOperation(): (req: any, res: any) => void;
    private getApplications(req, res);
    private getApplication(req, res);
    private createApplication(req, res);
    private updateApplication(req, res);
    private deleteApplication(req, res);
}
