import bgRingStyles from './BgRing.module.css';

export const BgRing = ({ radius, borderRadius, left, right }) => (
  <div
    className={bgRingStyles.bgRing}
    style={{ width: radius, height: radius, borderRadius, left, right }}
  />
);
