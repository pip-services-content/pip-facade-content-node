let _ = require('lodash');
let async = require('async');

import { ConfigParams } from 'pip-services3-commons-node';
import { IReferences } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node'; 
import { DependencyResolver } from 'pip-services3-commons-node';

import { IImageSetsClientV1 } from 'pip-clients-imagesets-node';
import { ImageSetV1 } from 'pip-clients-imagesets-node';

import { FacadeOperations } from 'pip-services3-facade-node';

export class ImageSetsOperationsV1  extends FacadeOperations {
    private _imagesetsClient: IImageSetsClientV1;

    public constructor() {
        super();

        this._dependencyResolver.put('imagesets', new Descriptor('pip-services-imagesets', 'client', '*', '*', '1.0'));
    }

    public setReferences(references: IReferences): void {
        super.setReferences(references);

        this._imagesetsClient = this._dependencyResolver.getOneRequired<IImageSetsClientV1>('imagesets');
    }

    public getImageSetsOperation() {
        return (req, res) => {
            this.getImageSets(req, res);
        }
    }

    public getImageSetOperation() {
        return (req, res) => {
            this.getImageSet(req, res);
        }
    }

    public createImageSetOperation() {
        return (req, res) => {
            this.createImageSet(req, res);
        }
    }

    public updateImageSetOperation() {
        return (req, res) => {
            this.updateImageSet(req, res);
        }
    }

    public deleteImageSetOperation() {
        return (req, res) => {
            this.deleteImageSet(req, res);
        }
    }

    private getImageSets(req: any, res: any): void {
        let filter = this.getFilterParams(req);
        let paging = this.getPagingParams(req);

        this._imagesetsClient.getImageSets(
            null, filter, paging, this.sendResult(req, res)
        );
    }

    private getImageSet(req: any, res: any): void {
        let imagesetId = req.route.params.imageset_id;

        this._imagesetsClient.getImageSetById(
            null, imagesetId, this.sendResult(req, res)
        );
    }

    private createImageSet(req: any, res: any): void {
        let imageset = req.body || {};

        this._imagesetsClient.createImageSet(
            null, imageset, this.sendResult(req, res)
        );
    }

    private updateImageSet(req: any, res: any): void {
        let imagesetId = req.route.params.imageset_id;
        let imageset = req.body || {};
        imageset.id = imagesetId;

        this._imagesetsClient.updateImageSet(
            null, imageset, this.sendResult(req, res)
        );
    }

    private deleteImageSet(req: any, res: any): void {
        let imagesetId = req.route.params.imageset_id;

        this._imagesetsClient.deleteImageSetById(
            null, imagesetId, this.sendResult(req, res)
        );
    }

}