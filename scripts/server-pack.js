/*eslint no-console:0 */
const octo = require('@octopusdeploy/octopackjs');
const version = `1.0.${process.env.OCTO_VERSION || 'local-test'}`;

octo.pack('targz', { id: 'keyteki-node', version: version })
    .append('./version.js')
    .append('./index.js')
    .append('./package.json')
    .append('./config/**/*')
    .append('./server/**/*.js')
    .append('./keyteki-json-data/**/*')
    .toFile('./out', function (err, data) {
        console.log('Package Saved: ' + data.name);
    });
