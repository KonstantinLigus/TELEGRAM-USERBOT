import payIconsStyles from './PayIcons.module.css';

export const PayIcons = () => (
  <ul className={payIconsStyles.payIconsList}>
    <li>
      <img
        src="https://static.tildacdn.com/tild3334-3461-4033-a635-653665373666/master_card.svg"
        alt="masterCard"
      />
    </li>
    <li>
      <img
        src="https://static.tildacdn.com/tild3736-6132-4666-b363-313666616161/visa.svg"
        alt="masterCard"
      />
    </li>
    <li>
      <img
        src="https://static.tildacdn.com/tild3063-6136-4331-b831-363034666533/mir.svg"
        alt="masterCard"
      />
    </li>
    <li>
      <img
        src="https://thumb.tildacdn.com/tild3435-3564-4833-a230-383464396563/-/resize/150x/-/format/webp/1920px-Bitcoin_logos.png"
        alt="masterCard"
      />
    </li>
    <li>
      <img
        src="https://thumb.tildacdn.com/tild3564-6162-4733-b933-366662323034/-/resize/136x/-/format/webp/2000px-Tether_Logosv.png"
        alt="masterCard"
      />
    </li>
  </ul>
);
