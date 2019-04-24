"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let _ = require('lodash');
let async = require('async');
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_facade_node_1 = require("pip-services3-facade-node");
class QuotesOperationsV1 extends pip_services3_facade_node_1.FacadeOperations {
    constructor() {
        super();
        this._dependencyResolver.put('quotes', new pip_services3_commons_node_1.Descriptor('pip-services-quotes', 'client', '*', '*', '1.0'));
    }
    setReferences(references) {
        super.setReferences(references);
        this._quotesClient = this._dependencyResolver.getOneRequired('quotes');
    }
    getQuotesOperation() {
        return (req, res) => {
            this.getQuotes(req, res);
        };
    }
    getRandomQuoteOperation() {
        return (req, res) => {
            this.getRandomQuote(req, res);
        };
    }
    getQuoteOperation() {
        return (req, res) => {
            this.getQuote(req, res);
        };
    }
    createQuoteOperation() {
        return (req, res) => {
            this.createQuote(req, res);
        };
    }
    updateQuoteOperation() {
        return (req, res) => {
            this.updateQuote(req, res);
        };
    }
    deleteQuoteOperation() {
        return (req, res) => {
            this.deleteQuote(req, res);
        };
    }
    getQuotes(req, res) {
        let filter = this.getFilterParams(req);
        let paging = this.getPagingParams(req);
        this._quotesClient.getQuotes(null, filter, paging, this.sendResult(req, res));
    }
    getRandomQuote(req, res) {
        let filter = this.getFilterParams(req);
        this._quotesClient.getRandomQuote(null, filter, this.sendResult(req, res));
    }
    getQuote(req, res) {
        let quoteId = req.route.params.quote_id;
        this._quotesClient.getQuoteById(null, quoteId, this.sendResult(req, res));
    }
    createQuote(req, res) {
        let quote = req.body || {};
        this._quotesClient.createQuote(null, quote, this.sendResult(req, res));
    }
    updateQuote(req, res) {
        let quoteId = req.route.params.quote_id;
        let quote = req.body || {};
        quote.id = quoteId;
        this._quotesClient.updateQuote(null, quote, this.sendResult(req, res));
    }
    deleteQuote(req, res) {
        let quoteId = req.route.params.quote_id;
        this._quotesClient.deleteQuoteById(null, quoteId, this.sendResult(req, res));
    }
}
exports.QuotesOperationsV1 = QuotesOperationsV1;
//# sourceMappingURL=QuotesOperationsV1.js.map