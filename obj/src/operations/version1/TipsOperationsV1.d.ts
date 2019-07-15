import { IReferences } from 'pip-services3-commons-node';
import { FacadeOperations } from 'pip-services3-facade-node';
export declare class TipsOperationsV1 extends FacadeOperations {
    private _tipsClient;
    constructor();
    setReferences(references: IReferences): void;
    getTipsOperation(): (req: any, res: any) => void;
    getRandomTipOperation(): (req: any, res: any) => void;
    getTipOperation(): (req: any, res: any) => void;
    createTipOperation(): (req: any, res: any) => void;
    updateTipOperation(): (req: any, res: any) => void;
    deleteTipOperation(): (req: any, res: any) => void;
    private getTips(req, res);
    private getRandomTip(req, res);
    private getTip(req, res);
    private createTip(req, res);
    private updateTip(req, res);
    private deleteTip(req, res);
}
