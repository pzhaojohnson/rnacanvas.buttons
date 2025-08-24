import { FloatingButton } from './FloatingButton';

export class EditButton {
  /**
   * This button wraps a floating button.
   */
  #floatingButton = new FloatingButton('Edit');

  constructor() {
    this.domNode.style.fontSize = '11px';

    this.domNode.style.width = '46px';
    this.domNode.style.height = '24px';
  }

  get domNode() {
    return this.#floatingButton.domNode;
  }

  hide(): void {
    this.#floatingButton.hide();
  }

  show(): void {
    this.#floatingButton.show();
  }

  get theme() {
    return this.#floatingButton.theme;
  }

  set theme(theme) {
    this.#floatingButton.theme = theme;
  }
}
