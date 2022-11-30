import styles from './PostBeep.module.css';
import { FormEventHandler, KeyboardEventHandler, useState } from 'react';
import { apiClient } from '../api-client/api-client';
import { BeepModel } from '../types/BeepModel';

type Props = {
  addBeep: (beep: BeepModel) => void;
};

export default function PostBeep(props: Props) {
  const [content, setContent] = useState<string>('');

  const send: KeyboardEventHandler = (event) => {
    if (event.code === 'Enter') {
      apiClient.post('/beep', { content: content }).then((response) => {
        setContent('');
        const newBeep = response.data;
        props.addBeep(newBeep);
      });
    }
  };

  const updateContent: React.ChangeEventHandler<HTMLTextAreaElement> = (
    event
  ) => {
    setContent(event.target.value);
  };

  return (
    <textarea
      className={`form-control ${styles.textarea}`}
      value={content}
      onKeyUp={send}
      onChange={updateContent}
    ></textarea>
  );
}
