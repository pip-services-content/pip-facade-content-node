"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let _ = require('lodash');
let async = require('async');
const pip_services_commons_node_1 = require("pip-services-commons-node");
const pip_services_facade_node_1 = require("pip-services-facade-node");
class FilesOperationsV1 extends pip_services_facade_node_1.FacadeOperations {
    constructor() {
        super();
        this._dependencyResolver.put('files', new pip_services_commons_node_1.Descriptor('pip-services-files', 'client', '*', '*', '1.0'));
    }
    setReferences(references) {
        super.setReferences(references);
        this._filesClient = this._dependencyResolver.getOneRequired('files');
    }
    getFilesOperation() {
        return (req, res) => {
            this.getFiles(req, res);
        };
    }
    getFileOperation() {
        return (req, res) => {
            this.getFile(req, res);
        };
    }
    createFileOperation() {
        return (req, res) => {
            this.createFile(req, res);
        };
    }
    updateFileOperation() {
        return (req, res) => {
            this.updateFile(req, res);
        };
    }
    deleteFileOperation() {
        return (req, res) => {
            this.deleteFile(req, res);
        };
    }
    getFiles(req, res) {
        let filter = this.getFilterParams(req);
        let paging = this.getPagingParams(req);
        this._filesClient.getFilesByFilter(null, filter, paging, this.sendResult(req, res));
    }
    getFile(req, res) {
        let fileId = req.route.params.file_id;
        this._filesClient.getFileById(null, fileId, this.sendResult(req, res));
    }
    createFile(req, res) {
        let file = req.body || {};
        this._filesClient.createFile(null, file, this.sendResult(req, res));
    }
    updateFile(req, res) {
        let fileId = req.route.params.file_id;
        let file = req.body || {};
        file.id = fileId;
        this._filesClient.updateFile(null, file, this.sendResult(req, res));
    }
    deleteFile(req, res) {
        let fileId = req.route.params.file_id;
        this._filesClient.deleteFileById(null, fileId, this.sendResult(req, res));
    }
}
exports.FilesOperationsV1 = FilesOperationsV1;
//# sourceMappingURL=FilesOperationsV1.js.map