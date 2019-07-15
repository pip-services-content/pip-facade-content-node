import { IReferences } from 'pip-services3-commons-node';
import { FacadeOperations } from 'pip-services3-facade-node';
export declare class HelpOperationsV1 extends FacadeOperations {
    private _helpClient;
    constructor();
    setReferences(references: IReferences): void;
    getTopicsOperation(): (req: any, res: any) => void;
    getTopicOperation(): (req: any, res: any) => void;
    createTopicOperation(): (req: any, res: any) => void;
    updateTopicOperation(): (req: any, res: any) => void;
    deleteTopicOperation(): (req: any, res: any) => void;
    getArticlesOperation(): (req: any, res: any) => void;
    getRandomArticleOperation(): (req: any, res: any) => void;
    getArticleOperation(): (req: any, res: any) => void;
    createArticleOperation(): (req: any, res: any) => void;
    updateArticleOperation(): (req: any, res: any) => void;
    deleteArticleOperation(): (req: any, res: any) => void;
    private getTopics(req, res);
    private getTopic(req, res);
    private createTopic(req, res);
    private updateTopic(req, res);
    private deleteTopic(req, res);
    private getArticles(req, res);
    private getRandomArticle(req, res);
    private getArticle(req, res);
    private createArticle(req, res);
    private updateArticle(req, res);
    private deleteArticle(req, res);
}
