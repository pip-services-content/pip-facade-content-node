import { IReferences } from 'pip-services3-commons-node';
import { FacadeOperations } from 'pip-services3-facade-node';
export declare class ImageSetsOperationsV1 extends FacadeOperations {
    private _imagesetsClient;
    constructor();
    setReferences(references: IReferences): void;
    getImageSetsOperation(): (req: any, res: any) => void;
    getImageSetOperation(): (req: any, res: any) => void;
    createImageSetOperation(): (req: any, res: any) => void;
    updateImageSetOperation(): (req: any, res: any) => void;
    deleteImageSetOperation(): (req: any, res: any) => void;
    private getImageSets;
    private getImageSet;
    private createImageSet;
    private updateImageSet;
    private deleteImageSet;
}
