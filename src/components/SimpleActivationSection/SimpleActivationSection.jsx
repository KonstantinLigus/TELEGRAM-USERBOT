import { useRef } from 'react';
import simpleActivationSectionStyles from './SimpleActivationSection.module.css';
import { MessageCard } from 'components/Cards/Cards';
import { BgCircle } from 'components/BgCircle/BgCircle';

export const SimpleActivationSection = () => {
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
    <section className={simpleActivationSectionStyles.sectionWrapper}>
      <div className={simpleActivationSectionStyles.BgCircleWrapper}>
        <BgCircle radius="350px" right="0" />
      </div>
      <div className={simpleActivationSectionStyles.sectionWidth}>
        <h2 className={simpleActivationSectionStyles.presentationTitleDiff}>
          БЫСТРАЯ И ПОНЯТНАЯ
          <br />
          <span className={simpleActivationSectionStyles.presentationTitle}>
            САМОСТОЯТЕЛЬНАЯ АКТИВАЦИЯ
          </span>
          <br />
          УЧЕТНОЙ ЗАПИСИ
        </h2>
        <div className={simpleActivationSectionStyles.exampleWrapper}>
          <ul className={simpleActivationSectionStyles.exampleList}>
            <li
              ref={sendMessLink}
              onClick={sendMessLinkClickHandler}
              className={simpleActivationSectionStyles.activationItem}
            >
              <span className={simpleActivationSectionStyles.activationIcon}>
                1
              </span>
              &nbsp;&nbsp;Отправить сообщение
            </li>
            <li
              ref={sendFotoLink}
              onClick={sendFotoLinkClickHandler}
              className={simpleActivationSectionStyles.activationItem}
            >
              <span className={simpleActivationSectionStyles.activationIcon}>
                2
              </span>
              &nbsp;&nbsp;Отправить фото
            </li>
            <li
              ref={findUserLink}
              onClick={findUserLinkClickHandler}
              className={simpleActivationSectionStyles.activationItem}
            >
              <span className={simpleActivationSectionStyles.activationIcon}>
                3
              </span>
              &nbsp;&nbsp;найти пользователя по номеру телефона
            </li>
          </ul>
          <MessageCard />
        </div>
      </div>
    </section>
  );
};
