import { IReferences } from 'pip-services3-commons-node';
import { ProcessContainer } from 'pip-services3-container-node';

import { TestFactory } from './fixtures/TestFactory';

export class ContentFacadeProcess extends ProcessContainer {

    public constructor() {
        super("content", "Client facade for content management microservices");
        this._factories.add(new TestFactory);
    }

}
