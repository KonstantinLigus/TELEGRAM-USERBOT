import { Button } from 'components/Button/Button';
import headerStyles from './Header.module.css';

export const Header = () => (
  <header>
    <nav className={headerStyles.navWrapper}>
      <a href="https://userbot-api.tech/">
        <img
          src="https://thumb.tildacdn.com/tild3462-3531-4236-b830-666334313562/-/cover/69x69/center/center/-/format/webp/telegram_logo_png_im.png"
          alt="telegram-icon"
          width="60px"
        />
      </a>
      <ul className={headerStyles.navContainer}>
        <li>
          <a
            href="https://userbot-api.tech/#rec460954310"
            className={headerStyles.menuLink}
          >
            Тариф
          </a>
        </li>
        <li>
          <a
            href="http://t.me/userbot_support_bot"
            className={headerStyles.menuLink}
          >
            Поддержка
          </a>
        </li>
        <li>
          <a
            href="http://docs.userbot-api.tech/"
            className={headerStyles.menuLink}
          >
            Документация
          </a>
        </li>
        <li>
          <a
            href="https://userbot-api.tech/blog"
            className={headerStyles.menuLink}
          >
            Полезные статьи
          </a>
        </li>
      </ul>
      <div className={headerStyles.btnWrapper}>
        <Button height="40px" width="160px">
          Личный кабинет
        </Button>
      </div>
      <ul className={headerStyles.flagsWrapper}>
        <li>
          <a href="https://userbot-api.tech/">
            <img
              src="https://thumb.tildacdn.com/tild3931-6435-4235-a634-616435663339/-/cover/25x25/center/center/-/format/webp/Flag_of_Russiasvg.png"
              alt="rusFlag"
              width="25px"
              className={headerStyles.linkFlag}
            />
          </a>
        </li>
        <li>
          <a href="https://userbot-api.tech/eng">
            <img
              src="https://thumb.tildacdn.com/tild6130-6632-4665-b430-633237653564/-/cover/25x25/center/center/-/format/webp/Flag_of_the_United_K.png"
              alt="rusFlag"
              width="25px"
              className={headerStyles.linkFlag}
            />
          </a>
        </li>
      </ul>
    </nav>
  </header>
);
