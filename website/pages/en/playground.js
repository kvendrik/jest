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
    url: 'https://repl.it/@amasad/try-jest',
  },
};

function Playground(props) {
  const exampleId = 'basic';
  const exampleNavItems = Object.keys(REPL_EXAMPLE_URLS).map(id => (
    <li key={id}>
      <a href={`?example_id=${encodeURI(id)}`}>{REPL_EXAMPLE_URLS[id].name}</a>
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

function getExampleUrlById(id) {
  const details = REPL_EXAMPLE_URLS[id];
  return details ? details.url : REPL_EXAMPLE_URLS.basic.url;
}

module.exports = Playground;
