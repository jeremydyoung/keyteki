/*eslint no-console:0 */
const octo = require('@octopusdeploy/octopackjs');
const version = `1.0.${process.env.OCTO_VERSION || 'local-test'}`;

octo.pack('targz', { version: version })
    .append('./version.js')
    .append('./index.js')
    .append('./package.json')
    .append('./server/**/*.js')
    .append('./server/scripts/fetchdata/fonts/*')
    .append('./public/**/*')
    .append('./config/**/*')
    .append('./keyteki-json-data/**/*')
    .append('./views/**/*.pug')
    .append('./webpack*.js')
    .append('./dist/**/*')
    .toFile('./out', function (err, data) {
        console.log('Package Saved: ' + data.name);
    });
