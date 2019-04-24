let _ = require('lodash');
let async = require('async');

import { ConfigParams } from 'pip-services3-commons-node';
import { IReferences } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node'; 
import { DependencyResolver } from 'pip-services3-commons-node';

import { IGuidesClientV1 } from 'pip-clients-guides-node';
import { GuideV1 } from 'pip-clients-guides-node';

import { FacadeOperations } from 'pip-services3-facade-node';

export class GuidesOperationsV1  extends FacadeOperations {
    private _guidesClient: IGuidesClientV1;

    public constructor() {
        super();

        this._dependencyResolver.put('guides', new Descriptor('pip-services-guides', 'client', '*', '*', '1.0'));
    }

    public setReferences(references: IReferences): void {
        super.setReferences(references);

        this._guidesClient = this._dependencyResolver.getOneRequired<IGuidesClientV1>('guides');
    }

    public getGuidesOperation() {
        return (req, res) => {
            this.getGuides(req, res);
        }
    }

    public getRandomGuideOperation() {
        return (req, res) => {
            this.getRandomGuide(req, res);
        }
    }

    public getGuideOperation() {
        return (req, res) => {
            this.getGuide(req, res);
        }
    }

    public createGuideOperation() {
        return (req, res) => {
            this.createGuide(req, res);
        }
    }

    public updateGuideOperation() {
        return (req, res) => {
            this.updateGuide(req, res);
        }
    }

    public deleteGuideOperation() {
        return (req, res) => {
            this.deleteGuide(req, res);
        }
    }

    private getGuides(req: any, res: any): void {
        let filter = this.getFilterParams(req);
        let paging = this.getPagingParams(req);

        this._guidesClient.getGuides(
            null, filter, paging, this.sendResult(req, res)
        );
    }

    private getRandomGuide(req: any, res: any): void {
        let filter = this.getFilterParams(req);

        this._guidesClient.getRandomGuide(
            null, filter, this.sendResult(req, res)
        );
    }

    private getGuide(req: any, res: any): void {
        let guideId = req.route.params.guide_id;

        this._guidesClient.getGuideById(
            null, guideId, this.sendResult(req, res)
        );
    }

    private createGuide(req: any, res: any): void {
        let guide = req.body || {};

        this._guidesClient.createGuide(
            null, guide, this.sendResult(req, res)
        );
    }

    private updateGuide(req: any, res: any): void {
        let guideId = req.route.params.guide_id;
        let guide = req.body || {};
        guide.id = guideId;

        this._guidesClient.updateGuide(
            null, guide, this.sendResult(req, res)
        );
    }

    private deleteGuide(req: any, res: any): void {
        let guideId = req.route.params.guide_id;

        this._guidesClient.deleteGuideById(
            null, guideId, this.sendResult(req, res)
        );
    }

}