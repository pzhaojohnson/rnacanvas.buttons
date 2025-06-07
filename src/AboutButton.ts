import * as styles from './FloatingButton.module.css';

export class AboutButton {
  readonly domNode = document.createElement('p');

  constructor() {
    this.domNode.classList.add(styles['floating-button']);

    this.domNode.textContent = '?';

    this.domNode.style.width = '25px';
    this.domNode.style.height = '25px';

    this.domNode.style.border = '1px solid #cfcfde';

    this.domNode.style.fontSize = '12px';
  }
}
