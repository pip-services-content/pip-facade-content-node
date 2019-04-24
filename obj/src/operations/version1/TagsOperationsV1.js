"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let _ = require('lodash');
let async = require('async');
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_facade_node_1 = require("pip-services3-facade-node");
class TagsOperationsV1 extends pip_services3_facade_node_1.FacadeOperations {
    constructor() {
        super();
        this._dependencyResolver.put('tags', new pip_services3_commons_node_1.Descriptor('pip-services-tags', 'client', '*', '*', '1.0'));
    }
    setReferences(references) {
        super.setReferences(references);
        this._tagsClient = this._dependencyResolver.getOneRequired('tags');
    }
    getTagsOperation() {
        return (req, res) => {
            this.getTags(req, res);
        };
    }
    setTagsOperation() {
        return (req, res) => {
            this.setTags(req, res);
        };
    }
    recordTagsOperation() {
        return (req, res) => {
            this.recordTags(req, res);
        };
    }
    getTags(req, res) {
        let partyId = req.route.params.party_id;
        this._tagsClient.getTags(null, partyId, this.sendResult(req, res));
    }
    setTags(req, res) {
        let partyId = req.route.params.party_id;
        let tags = req.body || {};
        tags.id = partyId;
        this._tagsClient.setTags(null, tags, this.sendResult(req, res));
    }
    recordTags(req, res) {
        let partyId = req.route.params.party_id;
        let tags = req.body || [];
        this._tagsClient.recordTags(null, partyId, tags, this.sendResult(req, res));
    }
}
exports.TagsOperationsV1 = TagsOperationsV1;
//# sourceMappingURL=TagsOperationsV1.js.map