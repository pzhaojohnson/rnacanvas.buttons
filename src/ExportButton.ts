import { FloatingButton } from './FloatingButton';

export class ExportButton {
  /**
   * This button wraps a floating button.
   */
  #floatingButton = new FloatingButton('Export');

  constructor() {
    this.domNode.style.width = '56px';
    this.domNode.style.height = '20px';
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
