import { BeepModel } from '../types/BeepModel';
import styles from './Beep.module.css';

type Props = {
  beep: BeepModel;
};

export default function Beep(props: Props) {
  return (
    <div className={`card ${styles.beep}`}>
      <div className={`card ${styles.beep2}`}>
        <div className="card-body">
          <h5 className={styles.beepTitle}>
            <img
              className={styles.profilePicture}
              src={props.beep.author.picture}
            />
            <span className={`card-title ${styles.authorName}`}>
              {props.beep.author.username}
            </span>
            <span className={styles.date}>
              {new Date(props.beep.createdAt).toLocaleString()}
            </span>
          </h5>
          <p className="card-text">{props.beep.content}</p>
        </div>
      </div>
    </div>
  );
}
