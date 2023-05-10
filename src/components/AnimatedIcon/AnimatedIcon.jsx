import animatedIcon from './AnimatedIcon.module.css';

export const AnimatedIcon = ({ width, right, bottom }) => (
  <img
    src="https://thumb.tildacdn.com/tild6130-6565-4364-b133-386366653964/-/resize/121x/-/format/webp/photo.png"
    alt="telegramAnimation"
    className={animatedIcon.animation}
    width={width}
    style={{ right, bottom }}
  />
);
