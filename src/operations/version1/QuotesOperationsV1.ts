let _ = require('lodash');
let async = require('async');

import { ConfigParams } from 'pip-services3-commons-node';
import { IReferences } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node'; 
import { DependencyResolver } from 'pip-services3-commons-node';

import { IQuotesClientV1 } from 'pip-clients-quotes-node';
import { QuoteV1 } from 'pip-clients-quotes-node';

import { FacadeOperations } from 'pip-services3-facade-node';

export class QuotesOperationsV1  extends FacadeOperations {
    private _quotesClient: IQuotesClientV1;

    public constructor() {
        super();

        this._dependencyResolver.put('quotes', new Descriptor('pip-services-quotes', 'client', '*', '*', '1.0'));
    }

    public setReferences(references: IReferences): void {
        super.setReferences(references);

        this._quotesClient = this._dependencyResolver.getOneRequired<IQuotesClientV1>('quotes');
    }

    public getQuotesOperation() {
        return (req, res) => {
            this.getQuotes(req, res);
        }
    }

    public getRandomQuoteOperation() {
        return (req, res) => {
            this.getRandomQuote(req, res);
        }
    }

    public getQuoteOperation() {
        return (req, res) => {
            this.getQuote(req, res);
        }
    }

    public createQuoteOperation() {
        return (req, res) => {
            this.createQuote(req, res);
        }
    }

    public updateQuoteOperation() {
        return (req, res) => {
            this.updateQuote(req, res);
        }
    }

    public deleteQuoteOperation() {
        return (req, res) => {
            this.deleteQuote(req, res);
        }
    }

    private getQuotes(req: any, res: any): void {
        let filter = this.getFilterParams(req);
        let paging = this.getPagingParams(req);

        this._quotesClient.getQuotes(
            null, filter, paging, this.sendResult(req, res)
        );
    }

    private getRandomQuote(req: any, res: any): void {
        let filter = this.getFilterParams(req);

        this._quotesClient.getRandomQuote(
            null, filter, this.sendResult(req, res)
        );
    }

    private getQuote(req: any, res: any): void {
        let quoteId = req.route.params.quote_id;

        this._quotesClient.getQuoteById(
            null, quoteId, this.sendResult(req, res)
        );
    }

    private createQuote(req: any, res: any): void {
        let quote = req.body || {};

        this._quotesClient.createQuote(
            null, quote, this.sendResult(req, res)
        );
    }

    private updateQuote(req: any, res: any): void {
        let quoteId = req.route.params.quote_id;
        let quote = req.body || {};
        quote.id = quoteId;

        this._quotesClient.updateQuote(
            null, quote, this.sendResult(req, res)
        );
    }

    private deleteQuote(req: any, res: any): void {
        let quoteId = req.route.params.quote_id;

        this._quotesClient.deleteQuoteById(
            null, quoteId, this.sendResult(req, res)
        );
    }

}