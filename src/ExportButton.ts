import * as styles from './ExportButton.module.css';

export class ExportButton {
  readonly domNode = document.createElement('p');

  constructor() {
    this.domNode.classList.add(styles['export-button']);

    this.domNode.textContent = 'Export';
  }
}
