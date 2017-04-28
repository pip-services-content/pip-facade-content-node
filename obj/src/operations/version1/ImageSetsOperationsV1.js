"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let _ = require('lodash');
let async = require('async');
const pip_services_commons_node_1 = require("pip-services-commons-node");
const pip_services_facade_node_1 = require("pip-services-facade-node");
class ImageSetsOperationsV1 extends pip_services_facade_node_1.FacadeOperations {
    constructor() {
        super();
        this._dependencyResolver.put('imagesets', new pip_services_commons_node_1.Descriptor('pip-services-imagesets', 'client', '*', '*', '1.0'));
    }
    setReferences(references) {
        super.setReferences(references);
        this._imagesetsClient = this._dependencyResolver.getOneRequired('imagesets');
    }
    getImageSetsOperation() {
        return (req, res) => {
            this.getImageSets(req, res);
        };
    }
    getImageSetOperation() {
        return (req, res) => {
            this.getImageSet(req, res);
        };
    }
    createImageSetOperation() {
        return (req, res) => {
            this.createImageSet(req, res);
        };
    }
    updateImageSetOperation() {
        return (req, res) => {
            this.updateImageSet(req, res);
        };
    }
    deleteImageSetOperation() {
        return (req, res) => {
            this.deleteImageSet(req, res);
        };
    }
    getImageSets(req, res) {
        let filter = this.getFilterParams(req);
        let paging = this.getPagingParams(req);
        this._imagesetsClient.getImageSets(null, filter, paging, this.sendResult(req, res));
    }
    getImageSet(req, res) {
        let imagesetId = req.route.params.imageset_id;
        this._imagesetsClient.getImageSetById(null, imagesetId, this.sendResult(req, res));
    }
    createImageSet(req, res) {
        let imageset = req.body || {};
        this._imagesetsClient.createImageSet(null, imageset, this.sendResult(req, res));
    }
    updateImageSet(req, res) {
        let imagesetId = req.route.params.imageset_id;
        let imageset = req.body || {};
        imageset.id = imagesetId;
        this._imagesetsClient.updateImageSet(null, imageset, this.sendResult(req, res));
    }
    deleteImageSet(req, res) {
        let imagesetId = req.route.params.imageset_id;
        this._imagesetsClient.deleteImageSetById(null, imagesetId, this.sendResult(req, res));
    }
}
exports.ImageSetsOperationsV1 = ImageSetsOperationsV1;
//# sourceMappingURL=ImageSetsOperationsV1.js.map