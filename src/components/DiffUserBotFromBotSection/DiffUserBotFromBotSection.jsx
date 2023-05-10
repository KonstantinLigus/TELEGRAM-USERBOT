import diffUserBotFromBotSectionStyles from './DiffUserBotFromBotSection.module.css';

export const DiffUserBotFromBotSection = () => (
  <section className={diffUserBotFromBotSectionStyles.sectionMargin}>
    <h2 className={diffUserBotFromBotSectionStyles.presentationTitle}>
      ОТЛИЧИЯ
      <br />
      <span className={diffUserBotFromBotSectionStyles.presentationTitleDiff}>
        ЮЗЕРБОТА ОТ БОТА
      </span>
    </h2>
    <table className={diffUserBotFromBotSectionStyles.table}>
      <thead>
        <tr className={diffUserBotFromBotSectionStyles.tableHeadRow}>
          <th className={diffUserBotFromBotSectionStyles.tableD}></th>
          <th className={diffUserBotFromBotSectionStyles.tableHead}>
            TELEGRAM ЮЗЕРБОТ
          </th>
          <th className={diffUserBotFromBotSectionStyles.tableHead}>
            TELEGRAM БОТ
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className={diffUserBotFromBotSectionStyles.tableD}>
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
              <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
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
              <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
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
          <td className={diffUserBotFromBotSectionStyles.tableD}>
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
              <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
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
              <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
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
          <td className={diffUserBotFromBotSectionStyles.tableD}>
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
              <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
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
              <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
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
          <td className={diffUserBotFromBotSectionStyles.tableD}>
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
              <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
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
              <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
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
);
