let ContentFacadeProcess = require('../obj/test/ContentFacadeProcess').ContentFacadeProcess;

try {
    new ContentFacadeProcess().run(process.argv);
} catch (ex) {
    console.error(ex);
}
