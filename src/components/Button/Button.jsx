import buttonStyles from './Button.module.css';

export const Button = ({ width, height, children }) => (
  <button className={buttonStyles.btn} style={{ width, height }}>
    {children}
  </button>
);
