import { FloatingButton } from './FloatingButton';

export class SaveButton {
  /**
   * This button wraps a floating button.
   */
  #floatingButton = new FloatingButton('Save');

  constructor() {
    this.domNode.style.width = '56px';
    this.domNode.style.height = '20px';
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
