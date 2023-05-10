import { useRef } from 'react';
import cardStyles from './Cards.module.css';

export const MessageCard = () => {
  const curlLink = useRef(null);
  const pythonLink = useRef(null);

  const codePython = `import requests

r = requests.post("https://userbot-api.tech/api/v1/telegram/send_message",
params = {
"chat_id": "1234567890",
"message": "Hello World!"
}, headers = {
"Authorization": "Bearer <Your token>"
})
print(r.status_code, r.json())
  `;

  const codeCurl = `
curl \\
-d '' \\
-H 'accept: application/json' \\
-H 'Authorization: Bearer <Your token>' \\
-X 'POST' \\
'https://userbot-api.tech/api/v1/telegram/send_message?
chat_id=1234567890&message=Hello%20World%21' \\
`;

  const curlClickHandler = e => {
    pythonLink.current.style.display = 'none';
    curlLink.current.style.display = 'block';
  };

  const pythonClickHandler = e => {
    curlLink.current.style.display = 'none';
    pythonLink.current.style.display = 'block';
  };

  return (
    <div className={cardStyles.messCard}>
      <div className={cardStyles.title}>Отправить СООБЩЕНИЕ</div>
      <div className={cardStyles.langList}>
        <div onClick={curlClickHandler} className={cardStyles.langItem}>
          Curl (Bash)
        </div>
        <div onClick={pythonClickHandler} className={cardStyles.langItem}>
          Python
        </div>
      </div>
      <div>
        <pre className={cardStyles.pre}>
          <code ref={curlLink} className={cardStyles.code}>
            {codeCurl}
          </code>
          <code ref={pythonLink} className={cardStyles.codePytnon}>
            {codePython}
          </code>
        </pre>
      </div>
    </div>
  );
};
