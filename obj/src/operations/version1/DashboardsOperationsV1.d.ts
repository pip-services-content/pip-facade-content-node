import { IReferences } from 'pip-services3-commons-node';
import { FacadeOperations } from 'pip-services3-facade-node';
export declare class DashboardsOperationsV1 extends FacadeOperations {
    private _dashboardsClient;
    constructor();
    setReferences(references: IReferences): void;
    getDashboardsOperation(): (req: any, res: any) => void;
    getDashboardOperation(): (req: any, res: any) => void;
    setDashboardOperation(): (req: any, res: any) => void;
    deleteDashboardsOperation(): (req: any, res: any) => void;
    private getDashboards(req, res);
    private getDashboard(req, res);
    private setDashboard(req, res);
    private deleteDashboards(req, res);
}
