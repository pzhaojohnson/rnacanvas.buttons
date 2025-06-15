import * as styles from './FloatingButton.module.css';

export class FloatingButton {
  readonly domNode = document.createElement('p');

  constructor(textContent?: string) {
    this.domNode.classList.add(styles['floating-button']);

    this.domNode.textContent = textContent ?? '';
  }

  get theme(): 'light' | 'dark' {
    return this.domNode.classList.contains(styles['dark']) ? 'dark' : 'light';
  }

  set theme(theme) {
    if (theme === 'light') {
      this.domNode.classList.remove(styles['dark']);
    } else if (theme === 'dark') {
      this.domNode.classList.add(styles['dark']);
    }
  }
}
