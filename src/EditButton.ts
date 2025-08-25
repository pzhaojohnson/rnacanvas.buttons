import { FloatingButton } from './FloatingButton';

export class EditButton {
  /**
   * This button wraps a floating button.
   */
  #floatingButton = new FloatingButton('Edit');

  constructor() {
    this.domNode.title = 'Open in a new tab.';

    this.domNode.style.fontSize = '10px';

    this.domNode.style.width = '47px';
    this.domNode.style.height = '22px';
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
