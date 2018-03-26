import { ConfigParams } from 'pip-services-commons-node';
import { Descriptor } from 'pip-services-commons-node';
import { References } from 'pip-services-commons-node';
import { Opener } from 'pip-services-commons-node';
import { Closer } from 'pip-services-commons-node';
import { Referencer } from 'pip-services-commons-node';
import { ManagedReferences } from 'pip-services-container-node';

import { MainFacadeService } from 'pip-services-facade-node';

import { TestFactory } from './TestFactory';
import { TestFacadeService } from './TestFacadeService';

export class TestReferences extends ManagedReferences {
    private _factory = new TestFactory();

    public constructor() {
        super();

        this.appendCore();
        this.appendMicroservices();
        this.appendFacade();

        this.configureService();
    }

    private appendCore(): void {
        this.put(null, this._factory);

        this.append(new Descriptor('pip-services-facade', 'service', 'main', 'default', '*'));
    }

    private appendMicroservices(): void {
        this.append(new Descriptor('pip-services-tags', 'persistence', 'memory', 'default', '*'));
        this.append(new Descriptor('pip-services-tags', 'controller', 'default', 'default', '*'));
        this.append(new Descriptor('pip-services-tags', 'client', 'direct', 'default', '*'));
        this.append(new Descriptor('pip-services-quotes', 'persistence', 'memory', 'default', '*'));
        this.append(new Descriptor('pip-services-quotes', 'controller', 'default', 'default', '*'));
        this.append(new Descriptor('pip-services-quotes', 'client', 'direct', 'default', '*'));
        this.append(new Descriptor('pip-services-files', 'persistence', 'memory', 'default', '*'));
        this.append(new Descriptor('pip-services-files', 'controller', 'default', 'default', '*'));
        this.append(new Descriptor('pip-services-files', 'client', 'direct', 'default', '*'));
        this.append(new Descriptor('pip-services-tips', 'persistence', 'memory', 'default', '*'));
        this.append(new Descriptor('pip-services-tips', 'controller', 'default', 'default', '*'));
        this.append(new Descriptor('pip-services-tips', 'client', 'direct', 'default', '*'));
        this.append(new Descriptor('pip-services-guides', 'persistence', 'memory', 'default', '*'));
        this.append(new Descriptor('pip-services-guides', 'controller', 'default', 'default', '*'));
        this.append(new Descriptor('pip-services-guides', 'client', 'direct', 'default', '*'));
        this.append(new Descriptor('pip-services-help', 'persistence-topics', 'memory', 'default', '*'));
        this.append(new Descriptor('pip-services-help', 'persistence-articles', 'memory', 'default', '*'));
        this.append(new Descriptor('pip-services-help', 'controller', 'default', 'default', '*'));
        this.append(new Descriptor('pip-services-help', 'client', 'direct', 'default', '*'));
        this.append(new Descriptor('pip-services-imagesets', 'persistence', 'memory', 'default', '*'));
        this.append(new Descriptor('pip-services-imagesets', 'controller', 'default', 'default', '*'));
        this.append(new Descriptor('pip-services-imagesets', 'client', 'direct', 'default', '*'));
        this.append(new Descriptor('pip-services-dashboards', 'persistence', 'memory', 'default', '*'));
        this.append(new Descriptor('pip-services-dashboards', 'controller', 'default', 'default', '*'));
        this.append(new Descriptor('pip-services-dashboards', 'client', 'direct', 'default', '*'));
    }

    private appendFacade(): void {
        this.append(new Descriptor('pip-services-facade', 'service', 'test', 'default', '1.0'));
    }

    public append(descriptor: Descriptor): void {
        let component = this._factory.create(descriptor);
        this.put(descriptor, component);
    }

    private configureService(): void {
        // Configure Facade service
        let service = this.getOneRequired<MainFacadeService>(
            new Descriptor('pip-services-facade', 'service', 'main', 'default', '*')
        );
        service.configure(ConfigParams.fromTuples(
            'root_path', '/api/1.0',
            'connection.protocol', 'http',
            'connection.host', '0.0.0.0',
            'connection.port', 3000
        ));
    }

}