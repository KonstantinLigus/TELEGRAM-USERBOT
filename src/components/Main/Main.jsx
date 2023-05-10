import mainStyles from './Main.module.css';
import { TelegramUserBotAPISection } from 'components/TelegramUserBotAPISection/TelegramUserBotAPISection';
import { DiffUserBotFromBotSection } from 'components/DiffUserBotFromBotSection/DiffUserBotFromBotSection';
import { SimpleActivationSection } from 'components/SimpleActivationSection/SimpleActivationSection';
import { TariffSection } from 'components/TariffSection/TariffSection';
import { OurCompanySection } from 'components/OurCompany/OurCompanySection';
import { BgRing } from 'components/BgRing/BgRing';

export const Main = () => {
  return (
    <main className={mainStyles.mainContainer}>
      <div className={mainStyles.bgRingWrapper}>
        <BgRing radius="500px" borderRadius="250px" />
      </div>
      <TelegramUserBotAPISection />
      <DiffUserBotFromBotSection />
      <SimpleActivationSection />
      <TariffSection />
      <OurCompanySection />
    </main>
  );
};
