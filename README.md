# Facade Operations for Infrastructure Pip.Services in Node.js

This module contains REST operations for [Client Facade](github.com:pip-services/pip-services3-facade-node.git).
Using these operations developers are able to create facades and fill them with pre-built REST operations for:

* Files
* User guides
* User tips
* Inspirational quotes
* Search tags
* Image sets

<a name="links"></a> Quick Links:

* [Development Guide](doc/Development.md)
* [REST Protocol V1](doc/RestProtocolV1.md)

## Install

Add dependency to the facade and operations into **package.json** file of your project
```javascript
{
    ...
    "dependencies": {
        ....
        "pip-services3-facade-node": "^1.0.*",
        "pip-facade-content-node": "^1.0.*",
        ...
    }
}
```

Then install the dependency using **npm** tool
```bash
# Install new dependencies
npm install

# Update already installed dependencies
npm update
```

## Use

Create facade service
```typescript
import { MainFacadeService } from 'pip-services3-facade-node'

export class MyFacadeServiceV1 extends MainFacadeService {
    ...
}
```

Get or create operations and register routes in the facade service
```typescript
import { FilesOperations } from 'pip-facade-content-node';

export class MyFacadeServiceV1 extends MainFacadeService {

    public register() {
        let files = new FilesOperations();
        this.registerRoute('get', '/files', logging.getFilesOperation());
        this.registerRoute('get', '/files/:file_id', logging.getFileOperation());
        this.registerRoute('post', '/files', logging.createFileOperation());
        this.registerRoute('update', '/files/:file_id', logging.updateFileOperation());
        this.registerRoute('del', '/file/:file_id', logging.deleteFileOperation());
    }

}
```

Instantiate and configure facade. After that create microservice clients and set references to the facade.
When everything is ready, run the facade.
```typescript
let myFacade = new MyFacadeServiceV1();
myFacade.configure(ConfigParams.fromTuples(
    'connection.protocol', 'http',
    'connection.host', '0.0.0.0',
    'connection.port', 8080
));

let filesClient = new FilesHttpClientV1();
filesClient.configure(ConfigParams.fromTuples(
    'connection.protocol', 'http',
    'connection.host', 'localhost',
    'connection.port', 8082
));

let references = References.fromTuples(
    new Descriptor('pip-services-files', 'client', 'http', 'default', '1.0'), filesClient
);
myFacade.setReferences(references)

myFacade.open(null, (err) => {
    if (err) console.error(err);
    else console.log('Client facade is running');
});
```

Alternatively to manual instantiation and cross-referencing you can use Pip.Services container
and instantiate the whole facade using simple configuration:
```yaml
---
-descriptor: pip-services-files:client:http:default:1.0
 connection:
   protocol: http
   host: localhost
   port: 8082

-descriptor: my-facade:service:facade:default:1.0
 connection:
   protocol: http
   host: 0.0.0.0
   port: 8080
```

## Acknowledgements

This client SDK was created and currently maintained by *Sergey Seroukhov*.

