import { useRef } from 'react';
import mainStyles from './Main.module.css';
import { MessageCard } from 'components/Cards/Cards';
import { Tarif } from 'components/Tarif/Tarif';
import { Mark } from 'components/Mark/Mark';
import { Button } from 'components/Button/Button';
import { PayIcons } from 'components/PayIcons/PayIcons';

export const Main = () => {
  const sendMessLink = useRef(null);
  const sendFotoLink = useRef(null);
  const findUserLink = useRef(null);

  const sendMessLinkClickHandler = e => {
    e.target.style.fontWeight = 600;
    sendFotoLink.current.style.fontWeight = 400;
    findUserLink.current.style.fontWeight = 400;
  };

  const sendFotoLinkClickHandler = e => {
    e.target.style.fontWeight = 600;
    sendMessLink.current.style.fontWeight = 400;
    findUserLink.current.style.fontWeight = 400;
  };

  const findUserLinkClickHandler = e => {
    e.target.style.fontWeight = 600;
    sendMessLink.current.style.fontWeight = 400;
    sendFotoLink.current.style.fontWeight = 400;
  };

  return (
    <main className={mainStyles.mainContainer}>
      <div className={mainStyles.bgArcWrapper}>
        <div className={mainStyles.bgArc}></div>
      </div>
      <section className={mainStyles.sectionWrapper}>
        <div>
          <h2 className={mainStyles.presentationTitle}>
            <strong>Telegram Userbot API</strong>
          </h2>
          <h3 className={mainStyles.subTitle}>
            Стабильный REST API для персонального (номерного) Telegram для
            отправки и чтения сообщений через HTTP запросы
          </h3>
          <p className={mainStyles.paragraf}>
            Для интеграции номерного Telegram в CRM или любую другую систему
          </p>
          <ul className={mainStyles.list}>
            <li className={mainStyles.listItem}>
              <Mark width="30px" />
              <p className={mainStyles.paragrafAccent}>
                <span className={mainStyles.paragrafAccentPart}>
                  Можно писать первым
                </span>
                &nbsp;по номеру телефона
              </p>
            </li>
            <li className={mainStyles.listItem}>
              <Mark width="30px" />
              <p className={mainStyles.paragrafAccent}>
                Есть возможность&nbsp;
                <span className={mainStyles.paragrafAccentPart}>
                  читать сообщения в группах
                </span>
              </p>
            </li>
            <li className={mainStyles.listItem}>
              <Mark width="30px" />
              <p className={mainStyles.paragrafAccent}>
                Возможность&nbsp;
                <span className={mainStyles.paragrafAccentPart}>
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
        />
      </section>
      <section className={mainStyles.sectionMargin}>
        <h2 className={mainStyles.presentationTitle}>
          ОТЛИЧИЯ
          <br />
          <span className={mainStyles.presentationTitleDiff}>
            ЮЗЕРБОТА ОТ БОТА
          </span>
        </h2>
        <table className={mainStyles.table}>
          <thead>
            <tr className={mainStyles.tableHeadRow}>
              <th className={mainStyles.tableD}></th>
              <th className={mainStyles.tableHead}>TELEGRAM ЮЗЕРБОТ</th>
              <th className={mainStyles.tableHead}>TELEGRAM БОТ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={mainStyles.tableD}>
                Можно писать первым по номеру телефона
              </td>
              <td>
                <svg
                  role="img"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <circle fill="#25B309" cx="12" cy="12" r="12"></circle>
                    <polygon
                      fill="#FFFFFF"
                      points="10.776 16.32 5.184 10.728 5.688 10.2 10.776 15.288 18.792 7.272 19.296 7.8"
                    ></polygon>
                  </g>
                </svg>
              </td>
              <td>
                <svg
                  role="img"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <circle fill="#F24611" cx="12" cy="12" r="12"></circle>
                    <polygon
                      fill="#FFFFFF"
                      points="17.28 7.32 16.8 6.84 12.072 11.592 7.32 6.84 6.84 7.32 11.592 12.072 6.84 16.8 7.32 17.28 12.072 12.528 16.8 17.28 17.28 16.8 12.528 12.072"
                    ></polygon>
                  </g>
                </svg>
              </td>
            </tr>

            <tr>
              <td className={mainStyles.tableD}>
                Возможность читать сообщения в группах
              </td>
              <td>
                <svg
                  role="img"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <circle fill="#25B309" cx="12" cy="12" r="12"></circle>
                    <polygon
                      fill="#FFFFFF"
                      points="10.776 16.32 5.184 10.728 5.688 10.2 10.776 15.288 18.792 7.272 19.296 7.8"
                    ></polygon>
                  </g>
                </svg>
              </td>
              <td>
                <svg
                  role="img"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <circle fill="#F24611" cx="12" cy="12" r="12"></circle>
                    <polygon
                      fill="#FFFFFF"
                      points="17.28 7.32 16.8 6.84 12.072 11.592 7.32 6.84 6.84 7.32 11.592 12.072 6.84 16.8 7.32 17.28 12.072 12.528 16.8 17.28 17.28 16.8 12.528 12.072"
                    ></polygon>
                  </g>
                </svg>
              </td>
            </tr>
            <tr>
              <td className={mainStyles.tableD}>
                Возможность общаться через интерфейс Telegram
              </td>
              <td>
                <svg
                  role="img"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <circle fill="#25B309" cx="12" cy="12" r="12"></circle>
                    <polygon
                      fill="#FFFFFF"
                      points="10.776 16.32 5.184 10.728 5.688 10.2 10.776 15.288 18.792 7.272 19.296 7.8"
                    ></polygon>
                  </g>
                </svg>
              </td>
              <td>
                <svg
                  role="img"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <circle fill="#F24611" cx="12" cy="12" r="12"></circle>
                    <polygon
                      fill="#FFFFFF"
                      points="17.28 7.32 16.8 6.84 12.072 11.592 7.32 6.84 6.84 7.32 11.592 12.072 6.84 16.8 7.32 17.28 12.072 12.528 16.8 17.28 17.28 16.8 12.528 12.072"
                    ></polygon>
                  </g>
                </svg>
              </td>
            </tr>
            <tr>
              <td className={mainStyles.tableD}>
                Все возможности обычного пользователя Telegram
              </td>
              <td>
                <svg
                  role="img"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <circle fill="#25B309" cx="12" cy="12" r="12"></circle>
                    <polygon
                      fill="#FFFFFF"
                      points="10.776 16.32 5.184 10.728 5.688 10.2 10.776 15.288 18.792 7.272 19.296 7.8"
                    ></polygon>
                  </g>
                </svg>
              </td>
              <td>
                <svg
                  role="img"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <circle fill="#F24611" cx="12" cy="12" r="12"></circle>
                    <polygon
                      fill="#FFFFFF"
                      points="17.28 7.32 16.8 6.84 12.072 11.592 7.32 6.84 6.84 7.32 11.592 12.072 6.84 16.8 7.32 17.28 12.072 12.528 16.8 17.28 17.28 16.8 12.528 12.072"
                    ></polygon>
                  </g>
                </svg>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <section className={mainStyles.section}>
        <h2 className={mainStyles.presentationTitleDiff}>
          БЫСТРАЯ И ПОНЯТНАЯ
          <br />
          <span className={mainStyles.presentationTitle}>
            САМОСТОЯТЕЛЬНАЯ АКТИВАЦИЯ
          </span>
          <br />
          УЧЕТНОЙ ЗАПИСИ
        </h2>
        <div className={mainStyles.exampleWrapper}>
          <ul className={mainStyles.exampleList}>
            <li
              ref={sendMessLink}
              onClick={sendMessLinkClickHandler}
              className={mainStyles.activationItem}
            >
              <span className={mainStyles.activationIcon}>1</span>
              &nbsp;&nbsp;Отправить сообщение
            </li>
            <li
              ref={sendFotoLink}
              onClick={sendFotoLinkClickHandler}
              className={mainStyles.activationItem}
            >
              <span className={mainStyles.activationIcon}>2</span>
              &nbsp;&nbsp;Отправить фото
            </li>
            <li
              ref={findUserLink}
              onClick={findUserLinkClickHandler}
              className={mainStyles.activationItem}
            >
              <span className={mainStyles.activationIcon}>3</span>
              &nbsp;&nbsp;найти пользователя по номеру телефона
            </li>
          </ul>
          <MessageCard />
        </div>
      </section>
      <section>
        <h2 className={mainStyles.titleSection}>ТАРИФ</h2>
        <div className={mainStyles.tarifWrapper}>
          <Tarif />
        </div>
        <PayIcons />
      </section>
      <section className={mainStyles.secWrap}>
        <div className={mainStyles.containerUserBot}>
          <div className={mainStyles.WrapperText}>
            <h3 className={mainStyles.userBot}>Telegram Userbot</h3>
            <div className={mainStyles.text}>
              Наша компания специализируется на предоставлении программного
              обеспечения, которое поможет Вам в создании юзерботов для
              Telegram. Юзерботы помогут Вам автоматизировать работу в
              мессенджере. Пользовательские боты могут выполнять различные
              задачи, такие как автоматический постинг контента, уведомления об
              активности пользователей и многое другое.
              <br /> <br />
              Разработка юзерботов в Telegram - это эффективный инструмент для
              автоматизации Вашего бизнеса, который поможет Вам увеличить
              продажи.
              <br /> <br />
              Использование юзербота - это быстрый и эффективный способ
              сохранить время и увеличить уровень взаимодействия в Telegram. С
              помощью нашего программного обеспечения Вы сможете проработать
              каждый юзербот, чтобы он максимально соответствовал Вашим
              индивидуальным потребностям и ожиданиям. <br /> <br />
              Наша компания - эксперты в области программного обеспечения для
              Telegram на языке программирования Python. Мы предлагаем
              индивидуальные решения, которые наилучшим образом подойдут для
              вашего бизнеса. А ещё у нас Вы сможете получить высокое качество
              услуг, быструю реакцию на Ваши запросы и адекватные цены.
              <br />
              <br />
              Мы используем самые современные технологии и алгоритмы, чтобы
              обеспечить нашим клиентам надежное и профессиональное программное
              обеспечение.
            </div>
          </div>
          <img
            src="https://thumb.tildacdn.com/tild3735-6237-4131-b062-303163343036/-/cover/560x700/center/center/-/format/webp/Berserk__telegram_bo.png"
            alt="bot"
          />
        </div>
      </section>
    </main>
  );
};
