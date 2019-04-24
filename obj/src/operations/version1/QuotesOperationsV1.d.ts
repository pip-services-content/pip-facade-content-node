import { IReferences } from 'pip-services3-commons-node';
import { FacadeOperations } from 'pip-services3-facade-node';
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
    private getQuotes;
    private getRandomQuote;
    private getQuote;
    private createQuote;
    private updateQuote;
    private deleteQuote;
}
