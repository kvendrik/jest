/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const REPL_EXAMPLE_URLS = {
  basic: {
    name: 'Basic',
    url: 'https://repl.it/repls/NanoImmenseAccounting',
  },
};

class Playground extends React.Component {
  render(props) {
    const exampleId = getExampleIdFromQuery() || 'basic';
    console.log(getExampleIdFromQuery());
    const exampleNavItems = Object.keys(REPL_EXAMPLE_URLS).map(id => (
      <li key={id}>
        <a
          href={`?example_id=${encodeURI(id)}`}
          className={id === exampleId && 'playground__link--is-active'}
        >
          {REPL_EXAMPLE_URLS[id].name}
        </a>
      </li>
    ));
    return (
      <section className="playground">
        <aside className="playground__sidebar">
          <h4 className="playground__title">Examples</h4>
          <ul className="playground__nav">{exampleNavItems}</ul>
        </aside>
        <iframe
          height="700px"
          width="100%"
          src={`${getExampleUrlById(exampleId)}?lite=true`}
          scrolling="no"
          frameborder="no"
          allowtransparency="true"
          allowfullscreen="true"
          sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
        ></iframe>
      </section>
    );
  }
}

function getExampleIdFromQuery() {
  if (typeof global.URL === 'undefined') {
    return null;
  }
  return new URL(global.location.href).searchParams.get('example');
}

function getExampleUrlById(id) {
  const details = REPL_EXAMPLE_URLS[id];
  return details ? details.url : REPL_EXAMPLE_URLS.basic.url;
}

module.exports = Playground;
