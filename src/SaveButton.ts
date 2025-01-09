import * as styles from './SaveButton.module.css';

export class SaveButton {
  readonly domNode = document.createElement('p');

  constructor() {
    this.domNode.classList.add(styles['save-button']);

    this.domNode.textContent = 'Save';
  }
}
