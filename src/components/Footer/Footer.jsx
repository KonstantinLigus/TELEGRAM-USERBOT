import footerStyles from './Footer.module.css';

export const Footer = () => (
  <footer className={footerStyles.footerWrapper}>
    <p className={footerStyles.policy}>Политика конфиденциальности</p>
    <p className={footerStyles.offert}>Договор-Оферта</p>
    <p className={footerStyles.offert}>Все права защищены © 2020 - 2023</p>
    <a href="https://tilda.cc/?upm=5744040" className={footerStyles.bg}>
      <span className={footerStyles.name}>Made on</span>
      <img
        width="30px"
        src="https://static.tildacdn.com/img/tildacopy.png"
        alt="tilda"
      />
      <span className={footerStyles.name}>Tilda</span>
    </a>
  </footer>
);
