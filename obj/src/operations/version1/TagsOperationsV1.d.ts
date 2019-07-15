import { IReferences } from 'pip-services3-commons-node';
import { FacadeOperations } from 'pip-services3-facade-node';
export declare class TagsOperationsV1 extends FacadeOperations {
    private _tagsClient;
    constructor();
    setReferences(references: IReferences): void;
    getTagsOperation(): (req: any, res: any) => void;
    setTagsOperation(): (req: any, res: any) => void;
    recordTagsOperation(): (req: any, res: any) => void;
    private getTags(req, res);
    private setTags(req, res);
    private recordTags(req, res);
}
