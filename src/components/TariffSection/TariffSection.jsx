import tariffSectionStyles from './TariffSection.module.css';
import { PayIcons } from 'components/PayIcons/PayIcons';
import { Tarif } from 'components/Tarif/Tarif';
import { BgCircle } from 'components/BgCircle/BgCircle';
import { BgRing } from 'components/BgRing/BgRing';

export const TariffSection = () => (
  <section className={tariffSectionStyles.section}>
    <div className={tariffSectionStyles.bgCircleWrapper}>
      <BgCircle radius="300px" left="0" />
    </div>
    <div className={tariffSectionStyles.bgRingWrapper}>
      <BgRing radius="490px" borderRadius="245px" right="0" />
    </div>
    <h2 className={tariffSectionStyles.titleSection}>ТАРИФ</h2>
    <div className={tariffSectionStyles.tarifWrapper}>
      <Tarif />
    </div>
    <PayIcons />
  </section>
);
