import ourCompanyStyles from './OurCompanySection.module.css';

export const OurCompanySection = () => (
  <section className={ourCompanyStyles.secWrap}>
    <div className={ourCompanyStyles.containerUserBot}>
      <div className={ourCompanyStyles.WrapperText}>
        <h3 className={ourCompanyStyles.userBot}>Telegram Userbot</h3>
        <div className={ourCompanyStyles.text}>
          Наша компания специализируется на предоставлении программного
          обеспечения, которое поможет Вам в создании юзерботов для Telegram.
          Юзерботы помогут Вам автоматизировать работу в мессенджере.
          Пользовательские боты могут выполнять различные задачи, такие как
          автоматический постинг контента, уведомления об активности
          пользователей и многое другое.
          <br /> <br />
          Разработка юзерботов в Telegram - это эффективный инструмент для
          автоматизации Вашего бизнеса, который поможет Вам увеличить продажи.
          <br /> <br />
          Использование юзербота - это быстрый и эффективный способ сохранить
          время и увеличить уровень взаимодействия в Telegram. С помощью нашего
          программного обеспечения Вы сможете проработать каждый юзербот, чтобы
          он максимально соответствовал Вашим индивидуальным потребностям и
          ожиданиям. <br /> <br />
          Наша компания - эксперты в области программного обеспечения для
          Telegram на языке программирования Python. Мы предлагаем
          индивидуальные решения, которые наилучшим образом подойдут для вашего
          бизнеса. А ещё у нас Вы сможете получить высокое качество услуг,
          быструю реакцию на Ваши запросы и адекватные цены.
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
);
