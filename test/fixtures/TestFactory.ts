import { CompositeFactory } from 'pip-services-commons-node';
import { FacadeFactory } from 'pip-services-facade-node';
import { DefaultContainerFactory } from 'pip-services-container-node';

import { TagsServiceFactory } from 'pip-services-tags-node';
import { TagsClientFactory } from 'pip-clients-tags-node';
import { QuotesServiceFactory } from 'pip-services-quotes-node';
import { QuotesClientFactory } from 'pip-clients-quotes-node';
import { AttachmentsServiceFactory } from 'pip-services-attachments-node';
import { AttachmentsClientFactory } from 'pip-clients-attachments-node';
import { FilesServiceFactory } from 'pip-services-files-node';
import { FilesClientFactory } from 'pip-clients-files-node';
import { TipsServiceFactory } from 'pip-services-tips-node';
import { TipsClientFactory } from 'pip-clients-tips-node';
import { GuidesServiceFactory } from 'pip-services-guides-node';
import { GuidesClientFactory } from 'pip-clients-guides-node';
import { HelpServiceFactory } from 'pip-services-help-node';
import { HelpClientFactory } from 'pip-clients-help-node';
import { DashboardsServiceFactory } from 'pip-services-dashboards-node';
import { DashboardsClientFactory } from 'pip-clients-dashboards-node';
import { ImageSetsServiceFactory } from 'pip-services-imagesets-node';
import { ImageSetsClientFactory } from 'pip-clients-imagesets-node';

import { ContentFacadeFactory } from '../../src/build/ContentFacadeFactory';
import { TestFacadeFactory } from './TestFacadeFactory';

export class TestFactory extends DefaultContainerFactory {

    public constructor() {
        super();

        this.add(new FacadeFactory);
        this.add(new ContentFacadeFactory);
        this.add(new TestFacadeFactory);

        this.add(new TagsServiceFactory);
        this.add(new TagsClientFactory);
        this.add(new QuotesServiceFactory);
        this.add(new QuotesClientFactory);
        this.add(new AttachmentsServiceFactory);
        this.add(new AttachmentsClientFactory);
        this.add(new FilesServiceFactory);
        this.add(new FilesClientFactory);
        this.add(new TipsServiceFactory);
        this.add(new TipsClientFactory);
        this.add(new GuidesServiceFactory);
        this.add(new GuidesClientFactory);
        this.add(new HelpServiceFactory);
        this.add(new HelpClientFactory);
        this.add(new ImageSetsServiceFactory);
        this.add(new ImageSetsClientFactory);
        this.add(new DashboardsServiceFactory);
        this.add(new DashboardsClientFactory);
    }

}
