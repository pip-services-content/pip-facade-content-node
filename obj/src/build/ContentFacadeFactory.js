"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services_commons_node_1 = require("pip-services-commons-node");
const pip_services_commons_node_2 = require("pip-services-commons-node");
const TagsOperationsV1_1 = require("../operations/version1/TagsOperationsV1");
const QuotesOperationsV1_1 = require("../operations/version1/QuotesOperationsV1");
const ApplicationsOperationsV1_1 = require("../operations/version1/ApplicationsOperationsV1");
const TipsOperationsV1_1 = require("../operations/version1/TipsOperationsV1");
const GuidesOperationsV1_1 = require("../operations/version1/GuidesOperationsV1");
const HelpOperationsV1_1 = require("../operations/version1/HelpOperationsV1");
const ImageSetsOperationsV1_1 = require("../operations/version1/ImageSetsOperationsV1");
const FilesOperationsV1_1 = require("../operations/version1/FilesOperationsV1");
const DashboardsOperationsV1_1 = require("../operations/version1/DashboardsOperationsV1");
const MessageTemplatesOperationsV1_1 = require("../operations/version1/MessageTemplatesOperationsV1");
class ContentFacadeFactory extends pip_services_commons_node_1.Factory {
    constructor() {
        super();
        this.registerAsType(ContentFacadeFactory.TagsOperationsV1Descriptor, TagsOperationsV1_1.TagsOperationsV1);
        this.registerAsType(ContentFacadeFactory.QuotesOperationsV1Descriptor, QuotesOperationsV1_1.QuotesOperationsV1);
        this.registerAsType(ContentFacadeFactory.ApplicationsOperationsV1Descriptor, ApplicationsOperationsV1_1.ApplicationsOperationsV1);
        this.registerAsType(ContentFacadeFactory.TipsOperationsV1Descriptor, TipsOperationsV1_1.TipsOperationsV1);
        this.registerAsType(ContentFacadeFactory.GuidesOperationsV1Descriptor, GuidesOperationsV1_1.GuidesOperationsV1);
        this.registerAsType(ContentFacadeFactory.HelpOperationsV1Descriptor, HelpOperationsV1_1.HelpOperationsV1);
        this.registerAsType(ContentFacadeFactory.ImageSetsOperationsV1Descriptor, ImageSetsOperationsV1_1.ImageSetsOperationsV1);
        this.registerAsType(ContentFacadeFactory.FilesOperationsV1Descriptor, FilesOperationsV1_1.FilesOperationsV1);
        this.registerAsType(ContentFacadeFactory.DashboardsOperationsV1Descriptor, DashboardsOperationsV1_1.DashboardsOperationsV1);
        this.registerAsType(ContentFacadeFactory.MessageTemplatesOperationsV1Descriptor, MessageTemplatesOperationsV1_1.MessageTemplatesOperationsV1);
    }
}
ContentFacadeFactory.Descriptor = new pip_services_commons_node_2.Descriptor("pip-facade-content", "factory", "default", "default", "1.0");
ContentFacadeFactory.TagsOperationsV1Descriptor = new pip_services_commons_node_2.Descriptor("pip-facade-content", "operations", "tags", "*", "1.0");
ContentFacadeFactory.QuotesOperationsV1Descriptor = new pip_services_commons_node_2.Descriptor("pip-facade-content", "operations", "quotes", "*", "1.0");
ContentFacadeFactory.ApplicationsOperationsV1Descriptor = new pip_services_commons_node_2.Descriptor("pip-facade-content", "operations", "applications", "*", "1.0");
ContentFacadeFactory.TipsOperationsV1Descriptor = new pip_services_commons_node_2.Descriptor("pip-facade-content", "operations", "tips", "*", "1.0");
ContentFacadeFactory.GuidesOperationsV1Descriptor = new pip_services_commons_node_2.Descriptor("pip-facade-content", "operations", "guides", "*", "1.0");
ContentFacadeFactory.HelpOperationsV1Descriptor = new pip_services_commons_node_2.Descriptor("pip-facade-content", "operations", "help", "*", "1.0");
ContentFacadeFactory.ImageSetsOperationsV1Descriptor = new pip_services_commons_node_2.Descriptor("pip-facade-content", "operations", "imagesets", "*", "1.0");
ContentFacadeFactory.FilesOperationsV1Descriptor = new pip_services_commons_node_2.Descriptor("pip-facade-content", "operations", "files", "*", "1.0");
ContentFacadeFactory.DashboardsOperationsV1Descriptor = new pip_services_commons_node_2.Descriptor("pip-facade-content", "operations", "dashboards", "*", "1.0");
ContentFacadeFactory.MessageTemplatesOperationsV1Descriptor = new pip_services_commons_node_2.Descriptor("pip-facade-content", "operations", "msgtemplates", "*", "1.0");
exports.ContentFacadeFactory = ContentFacadeFactory;
//# sourceMappingURL=ContentFacadeFactory.js.map