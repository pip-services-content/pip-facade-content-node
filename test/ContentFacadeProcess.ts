import { IReferences } from 'pip-services-commons-node';
import { ProcessContainer } from 'pip-services-container-node';

import { TestFactory } from './fixtures/TestFactory';

export class ContentFacadeProcess extends ProcessContainer {

    public constructor() {
        super("content", "Client facade for content management microservices");
        this._factories.add(new TestFactory);
    }

}
