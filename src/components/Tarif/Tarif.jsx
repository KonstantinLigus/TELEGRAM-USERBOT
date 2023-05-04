import { Mark } from 'components/Mark/Mark';
import tarifStyles from './Tarif.module.css';
import { Button } from 'components/Button/Button';

export const Tarif = () => (
  <div className={tarifStyles.tarif}>
    <div className={tarifStyles.listOfLists}>
      <ul>
        <li className={tarifStyles.mark}>
          <Mark width="20px" />
        </li>
        <li className={tarifStyles.mark}>
          <Mark width="20px" />
        </li>
        <li className={tarifStyles.mark}>
          <Mark width="20px" />
        </li>
        <li className={tarifStyles.mark}>
          <Mark width="20px" />
        </li>
        <li className={tarifStyles.mark}>
          <Mark width="20px" />
        </li>
      </ul>
      <ul>
        <li className={tarifStyles.name}>
          Все методы отправки любых сообщений и медиа;
        </li>
        <li className={tarifStyles.name}>
          Все методы отправки любых сообщений и медиа;
        </li>
        <li className={tarifStyles.name}>
          Все методы отправки любых сообщений и медиа;
        </li>
        <li className={tarifStyles.name}>
          Все методы отправки любых сообщений и медиа;
        </li>
        <li className={tarifStyles.name}>
          Все методы отправки любых сообщений и медиа;
        </li>
      </ul>
    </div>
    <div className={tarifStyles.price}>900₽/месяц</div>
    <div className={tarifStyles.btnWrapper}>
      <Button width="215px" height="40px">
        Выбрать
      </Button>
    </div>
  </div>
);
