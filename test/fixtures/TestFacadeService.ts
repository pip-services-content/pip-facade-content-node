import { Descriptor } from 'pip-services-commons-node';
import { PartitionFacadeService } from 'pip-services-facade-node';

import { TagsOperationsV1 } from '../../src/operations/version1/TagsOperationsV1';
import { QuotesOperationsV1 } from '../../src/operations/version1/QuotesOperationsV1';
import { TipsOperationsV1 } from '../../src/operations/version1/TipsOperationsV1';
import { GuidesOperationsV1 } from '../../src/operations/version1/GuidesOperationsV1';
import { ImageSetsOperationsV1 } from '../../src/operations/version1/ImageSetsOperationsV1';
import { FilesOperationsV1 } from '../../src/operations/version1/FilesOperationsV1';
import { MessageTemplatesOperationsV1 } from '../../src/operations/version1/MessageTemplatesOperationsV1';
import { DashboardsOperationsV1 } from '../../src/operations/version1/DashboardsOperationsV1';

export class TestFacadeService extends PartitionFacadeService {

    public constructor() {
        super();

        this._dependencyResolver.put('quotes', new Descriptor("pip-facade-content", "operations", "quotes", "*", "1.0"));
        this._dependencyResolver.put('tags', new Descriptor("pip-facade-content", "operations", "tags", "*", "1.0"));
        this._dependencyResolver.put('tips', new Descriptor("pip-facade-content", "operations", "tips", "*", "1.0"));
        this._dependencyResolver.put('guides', new Descriptor("pip-facade-content", "operations", "guides", "*", "1.0"));
        this._dependencyResolver.put('imagesets', new Descriptor("pip-facade-content", "operations", "imagesets", "*", "1.0"));
        this._dependencyResolver.put('files', new Descriptor("pip-facade-content", "operations", "files", "*", "1.0"));
        this._dependencyResolver.put('msgtemplates', new Descriptor("pip-facade-content", "operations", "msgtemplates", "*", "1.0"));
        this._dependencyResolver.put('dashboards', new Descriptor("pip-facade-content", "operations", "dashboards", "*", "1.0"));
    }

    protected register(): void {
        let quotes = this._dependencyResolver.getOneOptional<QuotesOperationsV1>('quotes');
        if (quotes) {
            this.registerRoute('get', '/quotes', quotes.getQuotesOperation());
            this.registerRoute('get', '/quotes/random', quotes.getRandomQuoteOperation());
            this.registerRoute('get', '/quotes/:quote_id', quotes.getQuoteOperation());
            this.registerRoute('post', '/quotes', quotes.createQuoteOperation());
            this.registerRoute('put', '/quotes/:quote_id', quotes.updateQuoteOperation());
            this.registerRoute('del', '/quotes/:quote_id', quotes.deleteQuoteOperation());
        }

        let tags = this._dependencyResolver.getOneOptional<TagsOperationsV1>('tags');
        if (tags) {
            this.registerRoute('get', '/tags/:party_id', tags.getTagsOperation());
            this.registerRoute('post', '/tags/:party_id', tags.setTagsOperation());
            this.registerRoute('put', '/tags/:party_id', tags.recordTagsOperation());
        }

        let tips = this._dependencyResolver.getOneOptional<TipsOperationsV1>('tips');
        if (tips) {
            this.registerRoute('get', '/tips', tips.getTipsOperation());
            this.registerRoute('get', '/tips/random', tips.getRandomTipOperation());
            this.registerRoute('get', '/tips/:tip_id', tips.getTipOperation());
            this.registerRoute('post', '/tips', tips.createTipOperation());
            this.registerRoute('put', '/tips/:tip_id', tips.updateTipOperation());
            this.registerRoute('del', '/tips/:tip_id', tips.deleteTipOperation());
        }

        let guides = this._dependencyResolver.getOneOptional<GuidesOperationsV1>('guides');
        if (guides) {
            this.registerRoute('get', '/guides', guides.getGuidesOperation());
            this.registerRoute('get', '/guides/random', guides.getRandomGuideOperation());
            this.registerRoute('get', '/guides/:guide_id', guides.getGuideOperation());
            this.registerRoute('post', '/guides', guides.createGuideOperation());
            this.registerRoute('put', '/guides/:guide_id', guides.updateGuideOperation());
            this.registerRoute('del', '/guides/:guide_id', guides.deleteGuideOperation());
        }

        let imagesets = this._dependencyResolver.getOneOptional<ImageSetsOperationsV1>('imagesets');
        if (imagesets) {
            this.registerRoute('get', '/imagesets', imagesets.getImageSetsOperation());
            this.registerRoute('get', '/imagesets/:imageset_id', imagesets.getImageSetOperation());
            this.registerRoute('post', '/imagesets', imagesets.createImageSetOperation());
            this.registerRoute('put', '/imagesets/:imageset_id', imagesets.updateImageSetOperation());
            this.registerRoute('del', '/imagesets/:imageset_id', imagesets.deleteImageSetOperation());
        }

        let files = this._dependencyResolver.getOneOptional<FilesOperationsV1>('files');
        if (files) {
            this.registerRoute('get', '/files', files.getFilesOperation());
            this.registerRoute('get', '/files/groups', files.getFileGroupsOperation());
            this.registerRoute('get', '/files/:file_id', files.getFileOperation());
            this.registerRoute('post', '/files', files.createFileOperation());
            this.registerRoute('put', '/files/:file_id', files.updateFileOperation());
            this.registerRoute('del', '/files/:file_id', files.deleteFileOperation());
        }

        let messageTemplates = this._dependencyResolver.getOneOptional<MessageTemplatesOperationsV1>('msgtemplates');
        if (messageTemplates) {
            this.registerRoute('get', '/msg_templates', messageTemplates.getTemplatesOperation());
            this.registerRoute('get', '/msg_templates/find', messageTemplates.findTemplateOperation());
            this.registerRoute('get', '/msg_templates/:template_id', messageTemplates.getTemplateOperation());
            this.registerRoute('post', '/msg_templates', messageTemplates.createTemplateOperation());
            this.registerRoute('put', '/msg_templates/:template_id', messageTemplates.updateTemplateOperation());
            this.registerRoute('del', '/msg_templates/:template_id', messageTemplates.deleteTemplateOperation());
        }

        let dashboards = this._dependencyResolver.getOneOptional<DashboardsOperationsV1>('dashboards');
        if (dashboards) {
            this.registerRoute('get', '/dashboards', dashboards.getDashboardsOperation());
            this.registerRoute('get', '/dashboards/:user_id/:app/:kind', dashboards.getDashboardOperation());
            this.registerRoute('post', '/dashboards/:user_id/:app/:kind', dashboards.setDashboardOperation());
            this.registerRoute('del', '/dashboards', dashboards.deleteDashboardsOperation());
        }
    }

}