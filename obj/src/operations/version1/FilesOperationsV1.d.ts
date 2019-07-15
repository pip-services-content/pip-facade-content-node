import { IReferences } from 'pip-services3-commons-node';
import { FacadeOperations } from 'pip-services3-facade-node';
export declare class FilesOperationsV1 extends FacadeOperations {
    private _filesClient;
    constructor();
    setReferences(references: IReferences): void;
    getFileGroupsOperation(): (req: any, res: any) => void;
    getFilesOperation(): (req: any, res: any) => void;
    getFileOperation(): (req: any, res: any) => void;
    createFileOperation(): (req: any, res: any) => void;
    updateFileOperation(): (req: any, res: any) => void;
    deleteFileOperation(): (req: any, res: any) => void;
    private getFileGroups(req, res);
    private getFiles(req, res);
    private getFile(req, res);
    private createFile(req, res);
    private updateFile(req, res);
    private deleteFile(req, res);
}
