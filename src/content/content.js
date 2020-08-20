import Vue from 'vue';
import Content from './Content.vue';

console.log('Generating Vue');

function setup() {
  const toCleanUp = document.querySelector('#hololive-schedule-container');
  if (toCleanUp) toCleanUp.remove();
  // debugger;

  const node = document.createElement('div');
  node.id = 'hololive-schedule-container';
  node.appendChild(document.createElement('plugin'));

  const container = document.querySelector('#buttons.ytd-masthead');
  container.insertBefore(node, container.childNodes[0]);
  // eslint-disable-next-line no-new
  new Vue({
    el: '#hololive-schedule-container>plugin',
    props: {
    },
    render: (h) => h(Content),
  });
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
