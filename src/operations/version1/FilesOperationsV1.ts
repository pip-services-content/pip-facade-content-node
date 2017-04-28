let _ = require('lodash');
let async = require('async');

import { ConfigParams } from 'pip-services-commons-node';
import { IReferences } from 'pip-services-commons-node';
import { Descriptor } from 'pip-services-commons-node'; 
import { DependencyResolver } from 'pip-services-commons-node';

import { IFilesClientV1 } from 'pip-clients-files-node';
import { FileV1 } from 'pip-clients-files-node';

import { FacadeOperations } from 'pip-services-facade-node';

export class FilesOperationsV1  extends FacadeOperations {
    private _filesClient: IFilesClientV1;

    public constructor() {
        super();

        this._dependencyResolver.put('files', new Descriptor('pip-services-files', 'client', '*', '*', '1.0'));
    }

    public setReferences(references: IReferences): void {
        super.setReferences(references);

        this._filesClient = this._dependencyResolver.getOneRequired<IFilesClientV1>('files');
    }

    public getFilesOperation() {
        return (req, res) => {
            this.getFiles(req, res);
        }
    }

    public getFileOperation() {
        return (req, res) => {
            this.getFile(req, res);
        }
    }

    public createFileOperation() {
        return (req, res) => {
            this.createFile(req, res);
        }
    }

    public updateFileOperation() {
        return (req, res) => {
            this.updateFile(req, res);
        }
    }

    public deleteFileOperation() {
        return (req, res) => {
            this.deleteFile(req, res);
        }
    }

    private getFiles(req: any, res: any): void {
        let filter = this.getFilterParams(req);
        let paging = this.getPagingParams(req);

        this._filesClient.getFilesByFilter(
            null, filter, paging, this.sendResult(req, res)
        );
    }

    private getFile(req: any, res: any): void {
        let fileId = req.route.params.file_id;

        this._filesClient.getFileById(
            null, fileId, this.sendResult(req, res)
        );
    }

    private createFile(req: any, res: any): void {
        let file = req.body || {};

        this._filesClient.createFile(
            null, file, this.sendResult(req, res)
        );
    }

    private updateFile(req: any, res: any): void {
        let fileId = req.route.params.file_id;
        let file = req.body || {};
        file.id = fileId;

        this._filesClient.updateFile(
            null, file, this.sendResult(req, res)
        );
    }

    private deleteFile(req: any, res: any): void {
        let fileId = req.route.params.file_id;

        this._filesClient.deleteFileById(
            null, fileId, this.sendResult(req, res)
        );
    }

}