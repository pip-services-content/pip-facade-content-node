"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let _ = require('lodash');
let async = require('async');
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_facade_node_1 = require("pip-services3-facade-node");
class HelpOperationsV1 extends pip_services3_facade_node_1.FacadeOperations {
    constructor() {
        super();
        this._dependencyResolver.put('help', new pip_services3_commons_node_1.Descriptor('pip-services-help', 'client', '*', '*', '1.0'));
    }
    setReferences(references) {
        super.setReferences(references);
        this._helpClient = this._dependencyResolver.getOneRequired('help');
    }
    getTopicsOperation() {
        return (req, res) => {
            this.getTopics(req, res);
        };
    }
    getTopicOperation() {
        return (req, res) => {
            this.getTopic(req, res);
        };
    }
    createTopicOperation() {
        return (req, res) => {
            this.createTopic(req, res);
        };
    }
    updateTopicOperation() {
        return (req, res) => {
            this.updateTopic(req, res);
        };
    }
    deleteTopicOperation() {
        return (req, res) => {
            this.deleteTopic(req, res);
        };
    }
    getArticlesOperation() {
        return (req, res) => {
            this.getArticles(req, res);
        };
    }
    getRandomArticleOperation() {
        return (req, res) => {
            this.getRandomArticle(req, res);
        };
    }
    getArticleOperation() {
        return (req, res) => {
            this.getArticle(req, res);
        };
    }
    createArticleOperation() {
        return (req, res) => {
            this.createArticle(req, res);
        };
    }
    updateArticleOperation() {
        return (req, res) => {
            this.updateArticle(req, res);
        };
    }
    deleteArticleOperation() {
        return (req, res) => {
            this.deleteArticle(req, res);
        };
    }
    getTopics(req, res) {
        let filter = this.getFilterParams(req);
        let paging = this.getPagingParams(req);
        this._helpClient.getTopics(null, filter, paging, this.sendResult(req, res));
    }
    getTopic(req, res) {
        let topicId = req.route.params.topic_id;
        this._helpClient.getTopicById(null, topicId, this.sendResult(req, res));
    }
    createTopic(req, res) {
        let topic = req.body || {};
        this._helpClient.createTopic(null, topic, this.sendResult(req, res));
    }
    updateTopic(req, res) {
        let topicId = req.route.params.topic_id;
        let topic = req.body || {};
        topic.id = topicId;
        this._helpClient.updateTopic(null, topic, this.sendResult(req, res));
    }
    deleteTopic(req, res) {
        let topicId = req.route.params.topic_id;
        this._helpClient.deleteTopicById(null, topicId, this.sendResult(req, res));
    }
    getArticles(req, res) {
        let filter = this.getFilterParams(req);
        let paging = this.getPagingParams(req);
        this._helpClient.getArticles(null, filter, paging, this.sendResult(req, res));
    }
    getRandomArticle(req, res) {
        let filter = this.getFilterParams(req);
        this._helpClient.getRandomArticle(null, filter, this.sendResult(req, res));
    }
    getArticle(req, res) {
        let articleId = req.route.params.article_id;
        this._helpClient.getArticleById(null, articleId, this.sendResult(req, res));
    }
    createArticle(req, res) {
        let article = req.body || {};
        this._helpClient.createArticle(null, article, this.sendResult(req, res));
    }
    updateArticle(req, res) {
        let articleId = req.route.params.article_id;
        let article = req.body || {};
        article.id = articleId;
        this._helpClient.updateArticle(null, article, this.sendResult(req, res));
    }
    deleteArticle(req, res) {
        let articleId = req.route.params.article_id;
        this._helpClient.deleteArticleById(null, articleId, this.sendResult(req, res));
    }
}
exports.HelpOperationsV1 = HelpOperationsV1;
//# sourceMappingURL=HelpOperationsV1.js.map