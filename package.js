/**
 * Created by clarencel on 7/1/15.
 */
Package.describe({
  summary: "Add Drilldown module to Highcharts - this will add the maazalik:highcharts package",
  version: "0.3.0",
  git: "https://github.com/ClarenceL/meteor-highcharts-drilldown.git",
  name: "clarencel:highcharts-drilldown"
});


Package.onUse( function( api ){

  api.versionsFrom('METEOR@1.0.3.2');
  api.use('jquery');
  api.use('templating');

  // basic highcharts
  api.use('maazalik:highcharts@0.3.0');
  api.imply('maazalik:highcharts@0.3.0');

  // drilldowns
  api.addFiles([
    'lib/highcharts-drilldown.js',
  ], 'client');
});

