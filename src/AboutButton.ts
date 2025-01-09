import * as styles from './AboutButton.module.css';

export class AboutButton {
  readonly domNode = document.createElement('p');

  constructor() {
    this.domNode.classList.add(styles['about-button']);

    this.domNode.textContent = '?';
  }
}
