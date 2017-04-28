import { Factory } from 'pip-services-commons-node';
import { Descriptor } from 'pip-services-commons-node';

import { TagsOperationsV1 } from '../operations/version1/TagsOperationsV1';
import { QuotesOperationsV1 } from '../operations/version1/QuotesOperationsV1';
import { TipsOperationsV1 } from '../operations/version1/TipsOperationsV1';
import { GuidesOperationsV1 } from '../operations/version1/GuidesOperationsV1';
import { ImageSetsOperationsV1 } from '../operations/version1/ImageSetsOperationsV1';
import { FilesOperationsV1 } from '../operations/version1/FilesOperationsV1';

export class ContentFacadeFactory extends Factory {
	public static Descriptor = new Descriptor("pip-facade-content", "factory", "default", "default", "1.0");

	public static TagsOperationsV1Descriptor = new Descriptor("pip-facade-content", "operations", "tags", "*", "1.0");
	public static QuotesOperationsV1Descriptor = new Descriptor("pip-facade-content", "operations", "quotes", "*", "1.0");
	public static TipsOperationsV1Descriptor = new Descriptor("pip-facade-content", "operations", "tips", "*", "1.0");
	public static GuidesOperationsV1Descriptor = new Descriptor("pip-facade-content", "operations", "guides", "*", "1.0");
	public static ImageSetsOperationsV1Descriptor = new Descriptor("pip-facade-content", "operations", "imagesets", "*", "1.0");
	public static FilesOperationsV1Descriptor = new Descriptor("pip-facade-content", "operations", "files", "*", "1.0");
	
	public constructor() {
		super();

		this.registerAsType(ContentFacadeFactory.TagsOperationsV1Descriptor, TagsOperationsV1);
		this.registerAsType(ContentFacadeFactory.QuotesOperationsV1Descriptor, QuotesOperationsV1);
		this.registerAsType(ContentFacadeFactory.TipsOperationsV1Descriptor, TipsOperationsV1);
		this.registerAsType(ContentFacadeFactory.GuidesOperationsV1Descriptor, GuidesOperationsV1);
		this.registerAsType(ContentFacadeFactory.ImageSetsOperationsV1Descriptor, ImageSetsOperationsV1);
		this.registerAsType(ContentFacadeFactory.FilesOperationsV1Descriptor, FilesOperationsV1);
	}
	
}
