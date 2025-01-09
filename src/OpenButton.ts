import * as styles from './OpenButton.module.css';

export class OpenButton {
  readonly domNode = document.createElement('p');

  constructor() {
    this.domNode.classList.add(styles['open-button']);

    this.domNode.textContent = 'Open';
  }
}
