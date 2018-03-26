let _ = require('lodash');
let async = require('async');

import { ConfigParams } from 'pip-services-commons-node';
import { IReferences } from 'pip-services-commons-node';
import { Descriptor } from 'pip-services-commons-node'; 
import { DependencyResolver } from 'pip-services-commons-node';

import { IHelpClientV1 } from 'pip-clients-help-node';
import { HelpTopicV1 } from 'pip-clients-help-node';
import { HelpArticleV1 } from 'pip-clients-help-node';

import { FacadeOperations } from 'pip-services-facade-node';

export class HelpOperationsV1  extends FacadeOperations {
    private _helpClient: IHelpClientV1;

    public constructor() {
        super();

        this._dependencyResolver.put('help', new Descriptor('pip-services-help', 'client', '*', '*', '1.0'));
    }

    public setReferences(references: IReferences): void {
        super.setReferences(references);

        this._helpClient = this._dependencyResolver.getOneRequired<IHelpClientV1>('help');
    }

    public getTopicsOperation() {
        return (req, res) => {
            this.getTopics(req, res);
        }
    }

    public getTopicOperation() {
        return (req, res) => {
            this.getTopic(req, res);
        }
    }

    public createTopicOperation() {
        return (req, res) => {
            this.createTopic(req, res);
        }
    }

    public updateTopicOperation() {
        return (req, res) => {
            this.updateTopic(req, res);
        }
    }

    public deleteTopicOperation() {
        return (req, res) => {
            this.deleteTopic(req, res);
        }
    }

    public getArticlesOperation() {
        return (req, res) => {
            this.getArticles(req, res);
        }
    }

    public getRandomArticleOperation() {
        return (req, res) => {
            this.getRandomArticle(req, res);
        }
    }

    public getArticleOperation() {
        return (req, res) => {
            this.getArticle(req, res);
        }
    }

    public createArticleOperation() {
        return (req, res) => {
            this.createArticle(req, res);
        }
    }

    public updateArticleOperation() {
        return (req, res) => {
            this.updateArticle(req, res);
        }
    }

    public deleteArticleOperation() {
        return (req, res) => {
            this.deleteArticle(req, res);
        }
    }

    private getTopics(req: any, res: any): void {
        let filter = this.getFilterParams(req);
        let paging = this.getPagingParams(req);

        this._helpClient.getTopics(
            null, filter, paging, this.sendResult(req, res)
        );
    }

    private getTopic(req: any, res: any): void {
        let topicId = req.route.params.topic_id;

        this._helpClient.getTopicById(
            null, topicId, this.sendResult(req, res)
        );
    }

    private createTopic(req: any, res: any): void {
        let topic = req.body || {};

        this._helpClient.createTopic(
            null, topic, this.sendResult(req, res)
        );
    }

    private updateTopic(req: any, res: any): void {
        let topicId = req.route.params.topic_id;
        let topic = req.body || {};
        topic.id = topicId;

        this._helpClient.updateTopic(
            null, topic, this.sendResult(req, res)
        );
    }

    private deleteTopic(req: any, res: any): void {
        let topicId = req.route.params.topic_id;

        this._helpClient.deleteTopicById(
            null, topicId, this.sendResult(req, res)
        );
    }

    private getArticles(req: any, res: any): void {
        let filter = this.getFilterParams(req);
        let paging = this.getPagingParams(req);

        this._helpClient.getArticles(
            null, filter, paging, this.sendResult(req, res)
        );
    }

    private getRandomArticle(req: any, res: any): void {
        let filter = this.getFilterParams(req);

        this._helpClient.getRandomArticle(
            null, filter, this.sendResult(req, res)
        );
    }

    private getArticle(req: any, res: any): void {
        let articleId = req.route.params.article_id;

        this._helpClient.getArticleById(
            null, articleId, this.sendResult(req, res)
        );
    }

    private createArticle(req: any, res: any): void {
        let article = req.body || {};

        this._helpClient.createArticle(
            null, article, this.sendResult(req, res)
        );
    }

    private updateArticle(req: any, res: any): void {
        let articleId = req.route.params.article_id;
        let article = req.body || {};
        article.id = articleId;

        this._helpClient.updateArticle(
            null, article, this.sendResult(req, res)
        );
    }

    private deleteArticle(req: any, res: any): void {
        let articleId = req.route.params.article_id;

        this._helpClient.deleteArticleById(
            null, articleId, this.sendResult(req, res)
        );
    }

}