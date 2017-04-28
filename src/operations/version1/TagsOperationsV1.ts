let _ = require('lodash');
let async = require('async');

import { ConfigParams } from 'pip-services-commons-node';
import { IReferences } from 'pip-services-commons-node';
import { Descriptor } from 'pip-services-commons-node'; 
import { DependencyResolver } from 'pip-services-commons-node';

import { ITagsClientV1 } from 'pip-clients-tags-node';
import { PartyTagsV1 } from 'pip-clients-tags-node';

import { FacadeOperations } from 'pip-services-facade-node';

export class TagsOperationsV1  extends FacadeOperations {
    private _tagsClient: ITagsClientV1;

    public constructor() {
        super();

        this._dependencyResolver.put('tags', new Descriptor('pip-services-tags', 'client', '*', '*', '1.0'));
    }

    public setReferences(references: IReferences): void {
        super.setReferences(references);

        this._tagsClient = this._dependencyResolver.getOneRequired<ITagsClientV1>('tags');
    }

    public getTagsOperation() {
        return (req, res) => {
            this.getTags(req, res);
        }
    }

    public setTagsOperation() {
        return (req, res) => {
            this.setTags(req, res);
        }
    }

    public recordTagsOperation() {
        return (req, res) => {
            this.recordTags(req, res);
        }
    }

    private getTags(req: any, res: any): void {
        let partyId = req.route.params.party_id;

        this._tagsClient.getTags(null, partyId, this.sendResult(req, res));
    }

    private setTags(req: any, res: any): void {
        let partyId = req.route.params.party_id;
        let tags = req.body || {};
        tags.id = partyId;

        this._tagsClient.setTags(null, tags, this.sendResult(req, res));
    }

    private recordTags(req: any, res: any): void {
        let partyId = req.route.params.party_id;
        let tags = req.body || [];

        this._tagsClient.recordTags(null, partyId, tags, this.sendResult(req, res));
    }

}