let _ = require('lodash');
let async = require('async');

import { ConfigParams } from 'pip-services-commons-node';
import { IReferences } from 'pip-services-commons-node';
import { Descriptor } from 'pip-services-commons-node'; 
import { DependencyResolver } from 'pip-services-commons-node';

import { ITipsClientV1 } from 'pip-clients-tips-node';
import { TipV1 } from 'pip-clients-tips-node';

import { FacadeOperations } from 'pip-services-facade-node';

export class TipsOperationsV1  extends FacadeOperations {
    private _tipsClient: ITipsClientV1;

    public constructor() {
        super();

        this._dependencyResolver.put('tips', new Descriptor('pip-services-tips', 'client', '*', '*', '1.0'));
    }

    public setReferences(references: IReferences): void {
        super.setReferences(references);

        this._tipsClient = this._dependencyResolver.getOneRequired<ITipsClientV1>('tips');
    }

    public getTipsOperation() {
        return (req, res) => {
            this.getTips(req, res);
        }
    }

    public getRandomTipOperation() {
        return (req, res) => {
            this.getRandomTip(req, res);
        }
    }

    public getTipOperation() {
        return (req, res) => {
            this.getTip(req, res);
        }
    }

    public createTipOperation() {
        return (req, res) => {
            this.createTip(req, res);
        }
    }

    public updateTipOperation() {
        return (req, res) => {
            this.updateTip(req, res);
        }
    }

    public deleteTipOperation() {
        return (req, res) => {
            this.deleteTip(req, res);
        }
    }

    private getTips(req: any, res: any): void {
        let filter = this.getFilterParams(req);
        let paging = this.getPagingParams(req);

        this._tipsClient.getTips(
            null, filter, paging, this.sendResult(req, res)
        );
    }

    private getRandomTip(req: any, res: any): void {
        let filter = this.getFilterParams(req);

        this._tipsClient.getRandomTip(
            null, filter, this.sendResult(req, res)
        );
    }

    private getTip(req: any, res: any): void {
        let tipId = req.route.params.tip_id;

        this._tipsClient.getTipById(
            null, tipId, this.sendResult(req, res)
        );
    }

    private createTip(req: any, res: any): void {
        let tip = req.body || {};

        this._tipsClient.createTip(
            null, tip, this.sendResult(req, res)
        );
    }

    private updateTip(req: any, res: any): void {
        let tipId = req.route.params.tip_id;
        let tip = req.body || {};
        tip.id = tipId;

        this._tipsClient.updateTip(
            null, tip, this.sendResult(req, res)
        );
    }

    private deleteTip(req: any, res: any): void {
        let tipId = req.route.params.tip_id;

        this._tipsClient.deleteTipById(
            null, tipId, this.sendResult(req, res)
        );
    }

}