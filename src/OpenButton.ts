import * as styles from './FloatingButton.module.css';

export class OpenButton {
  readonly domNode = document.createElement('p');

  constructor() {
    this.domNode.classList.add(styles['floating-button']);

    this.domNode.textContent = 'Open';

    this.domNode.style.width = '56px';
    this.domNode.style.height = '20px';
  }
}
