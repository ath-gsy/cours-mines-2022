import PostBeep from '../../../components/PostBeep';
import Tweet from '../../../components/Tweet';
import { Tweet as TweetModel } from '../../../types/Tweet';
import styles from './Twitter.module.css';

const tweets: TweetModel[] = [
  {
    id: '1',
    message: 'Test 1',
    date: new Date(),
    likeCount: 2,
    retweetCount: 0,
    author: {
      id: '1',
      pseudo: 'Martin',
    },
    liked: true,
    retweeted: false,
  },
  {
    id: '2',
    message: 'Test 2',
    date: new Date(),
    likeCount: 0,
    retweetCount: 3,
    author: {
      id: '2',
      pseudo: 'Julien',
    },
    liked: false,
    retweeted: true,
  },
  {
    id: '3',
    message: 'Test 3',
    date: new Date(),
    likeCount: 2,
    retweetCount: 3,
    author: {
      id: '1',
      pseudo: 'Martin',
    },
    liked: false,
    retweeted: false,
  },
];

export default function Timeline() {
  return (
    <div className="container">
      <PostBeep />
      <div className={styles.messages}>
        <h1>Timeline</h1>
        <div>
          {tweets.map((tweet) => (
            <Tweet key={tweet.id} tweet={tweet} />
          ))}
        </div>
      </div>
    </div>
  );
}
