import Vue from 'vue';
import Buefy from 'buefy';
import Content from './Content.vue';


Vue.use(Buefy);

console.log('Generating Vue');

const UI_INJECT_NODE_ID_NAME = 'hololive-schedule-container';
const UI_INJECT_NODE_ID_SELECTOR = `#${UI_INJECT_NODE_ID_NAME}`;

if (window.hololive_keepalive) {
  window.location.reload();
  clearInterval(window.hololive_keepalive);
}
// window.hololive_keepalive = null;

function setup() {
  const toCleanUp = document.querySelector(UI_INJECT_NODE_ID_SELECTOR);
  if (toCleanUp) { window.location.reload(); } // toCleanUp.remove();

  console.log('setting up');
  // debugger;

  const node = document.createElement('div');
  node.id = UI_INJECT_NODE_ID_NAME;
  node.appendChild(document.createElement('plugin'));

  const container = document.querySelector('#buttons.ytd-masthead');
  container.insertBefore(node, container.childNodes[0]);
  // eslint-disable-next-line no-new
  new Vue({
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
