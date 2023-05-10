import bgCircleStyles from './BgCircle.module.css';

export const BgCircle = ({ radius, left, bottom }) => (
  <div
    className={bgCircleStyles.circle}
    style={{ width: radius, height: radius, left, bottom }}
  ></div>
);
