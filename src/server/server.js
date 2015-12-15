import express from 'express';
import webpack from 'webpack';
import webpackConfig from '../../webpack.config';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from '../universal/store/configureStore';
import App from '../universal/containers/App/App.js';

const app = express();
const renderFullPage = (html, initialState) => {
  return `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Isomorphic Redux Example</title>
        <link rel="stylesheet" type="text/css" href="/static/app.css">
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
        </script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
  `;
}

if(process.env.NODE_ENV !== 'production'){
  const compiler = webpack(webpackConfig);
  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }));
  app.use(webpackHotMiddleware(compiler));
}else{
  app.use('/static', express.static(__dirname + '/../../dist'));
}

app.get('/*', function (req, res) {
  const store = configureStore();

  const InitialView = (
    <Provider store={store} >
      <App />
    </Provider>
  );
  const componentHTML = React.renderToString(InitialView);
  const initialState = store.getState();
  res.status(200).end(renderFullPage(componentHTML, initialState));
});

const server = app.listen(3002, function () {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
