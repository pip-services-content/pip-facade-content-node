import { IReferences } from 'pip-services-commons-node';
import { FacadeOperations } from 'pip-services-facade-node';
export declare class QuotesOperationsV1 extends FacadeOperations {
    private _quotesClient;
    constructor();
    setReferences(references: IReferences): void;
    getQuotesOperation(): (req: any, res: any) => void;
    getRandomQuoteOperation(): (req: any, res: any) => void;
    getQuoteOperation(): (req: any, res: any) => void;
    createQuoteOperation(): (req: any, res: any) => void;
    updateQuoteOperation(): (req: any, res: any) => void;
    deleteQuoteOperation(): (req: any, res: any) => void;
    private getQuotes(req, res);
    private getRandomQuote(req, res);
    private getQuote(req, res);
    private createQuote(req, res);
    private updateQuote(req, res);
    private deleteQuote(req, res);
}
