import { FloatingButton } from './FloatingButton';

export class AboutButton {
  /**
   * This button wraps a floating button.
   */
  #floatingButton = new FloatingButton('?');

  constructor() {
    this.domNode.style.width = '25px';
    this.domNode.style.height = '25px';

    this.domNode.style.fontSize = '12px';
  }

  get domNode() {
    return this.#floatingButton.domNode;
  }

  get theme() {
    return this.#floatingButton.theme;
  }

  set theme(theme) {
    this.#floatingButton.theme = theme;
  }
}
