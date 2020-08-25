import Vue from 'vue';
import Content from './Content.vue';

// Reference to the Vue Component we'll be injecting into Youtube.
let componentRef;


console.log('Generating Vue');

const UI_INJECT_NODE_ID_NAME = 'hololive-schedule-container';
const UI_INJECT_NODE_ID_SELECTOR = `#${UI_INJECT_NODE_ID_NAME}`;

// this block simplifies dev process
if (window.hololive_keepalive) {
  window.location.reload();
  clearInterval(window.hololive_keepalive);
}
// window.hololive_keepalive = null;

function setup() {
  const toCleanUp = document.querySelector(UI_INJECT_NODE_ID_SELECTOR);
  if (toCleanUp) {
    if (componentRef) componentRef.$destroy();
    window.location.reload();
  }

  console.log('setting up');

  const node = document.createElement('div');
  node.id = UI_INJECT_NODE_ID_NAME;
  node.appendChild(document.createElement('plugin'));

  const container = document.querySelector('#buttons.ytd-masthead');
  container.insertBefore(node, container.childNodes[0]);
  // eslint-disable-next-line no-new
  componentRef = new Vue({
    el: `${UI_INJECT_NODE_ID_SELECTOR}>plugin`,
    props: {},
    render: (h) => h(Content),
  });

  if (!window.hololive_keepalive) {
    window.hololive_keepalive = setInterval(() => {
      if (document.querySelector(UI_INJECT_NODE_ID_SELECTOR) == null) {
        setup();
      }
    }, 2000);
  }
}

function waitForElementToDisplay(selector, time) {
  if (document.querySelector(selector) != null) {
    setup();
  } else {
    setTimeout(() => {
      waitForElementToDisplay(selector, time);
    }, time);
  }
}

waitForElementToDisplay('#buttons.ytd-masthead', 100);
