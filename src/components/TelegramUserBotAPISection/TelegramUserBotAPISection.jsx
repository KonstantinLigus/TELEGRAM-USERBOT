import { Mark } from 'components/Mark/Mark';
import tgUserBotApiStyles from './TelegramUserBotAPISection.module.css';
import { Button } from 'components/Button/Button';
import { AnimatedIcon } from 'components/AnimatedIcon/AnimatedIcon';
import { BgCircle } from 'components/BgCircle/BgCircle';

export const TelegramUserBotAPISection = () => (
  <section className={tgUserBotApiStyles.sectionWrapper}>
    <div className={tgUserBotApiStyles.animatedIconsWrapp}>
      <AnimatedIcon width="121px" right="20px" bottom="0" />
      <AnimatedIcon width="70px" right="370px" bottom="200px" />
      <AnimatedIcon width="50px" right="0" bottom="400px" />
    </div>
    <BgCircle radius="260px" left="450px" bottom="100px" />
    <div className={tgUserBotApiStyles.wrapper}>
      <h2 className={tgUserBotApiStyles.TgUserBotApiTitle}>
        <strong>Telegram Userbot API</strong>
      </h2>
      <h3 className={tgUserBotApiStyles.subTitle}>
        Стабильный REST API для персонального (номерного) Telegram для отправки
        и чтения сообщений через HTTP запросы
      </h3>
      <p className={tgUserBotApiStyles.paragraf}>
        Для интеграции номерного Telegram в CRM или любую другую систему
      </p>
      <ul className={tgUserBotApiStyles.list}>
        <li className={tgUserBotApiStyles.listItem}>
          <Mark width="30px" />
          <p className={tgUserBotApiStyles.listItem}>
            <span className={tgUserBotApiStyles.paragrafAccentPart}>
              Можно писать первым
            </span>
            &nbsp;по номеру телефона
          </p>
        </li>
        <li className={tgUserBotApiStyles.listItem}>
          <Mark width="30px" />
          <p className={tgUserBotApiStyles.paragrafAccent}>
            Есть возможность&nbsp;
            <span className={tgUserBotApiStyles.paragrafAccentPart}>
              читать сообщения в группах
            </span>
          </p>
        </li>
        <li className={tgUserBotApiStyles.listItem}>
          <Mark width="30px" />
          <p className={tgUserBotApiStyles.paragrafAccent}>
            Возможность&nbsp;
            <span className={tgUserBotApiStyles.paragrafAccentPart}>
              общаться через интерфейс
            </span>
            &nbsp;Telegram
          </p>
        </li>
      </ul>
      <Button width="235px" height="55px">
        Попробовать бесплатно!
      </Button>
    </div>
    <img
      src="https://static.tildacdn.com/tild6235-3461-4466-b436-396665663533/6_1566.png"
      alt="bg-phone"
      width="470px"
      className={tgUserBotApiStyles.bgImg}
    />
  </section>
);
