import styles from './Home.module.css';
import Beep from '../../../../components/Beep';
import PostTweet from '../../../../components/PostTweet';
import { BeepModel } from '../../../../types/BeepModel';
import { useEffect, useState } from 'react';
import { apiClient } from '../../../../api-client/api-client';

export default function Home() {
  const [beeps, setBeeps] = useState<BeepModel[]>([]);

  useEffect(() => {
    apiClient.get('/home').then((response) => setBeeps(response.data));
  }, []);

  return (
    <div className={`container ${styles.mainContent}`}>
      <h1>Home</h1>
      <PostTweet></PostTweet>
      {beeps.map((beep) => (
        <Beep beep={beep} key={beep.id}></Beep>
      ))}
    </div>
  );
}

const beeps: BeepModel[] = [
  {
    id: 'c621df50-17d3-48dc-a23a-19676c75b90e',
    authorId: 'auth0|6377b507c3cfed678ac0d4b2',
    createdAt: new Date('2022-11-28T12:15:56.259Z'),
    content: 'Je poste pour Julien',
    likeCount: 1,
    liked: true,
    author: {
      userId: 'auth0|6377b507c3cfed678ac0d4b2',
      username: 'FAKE-martin',
      picture:
        'https://s.gravatar.com/avatar/fbbe81138495184fa853e17ae5f68018?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fma.png',
    },
  },
  {
    id: '8a0aab3c-1516-4e08-85f8-684708daf3e5',
    authorId: 'auth0|6377b507c3cfed678ac0d4b2',
    createdAt: new Date('2022-11-27T11:24:34.112Z'),
    content: 'Ccoucou je poste des messages',
    likeCount: 1,
    liked: true,
    author: {
      userId: 'auth0|6377b507c3cfed678ac0d4b2',
      username: 'FAKE-martin',
      picture:
        'https://s.gravatar.com/avatar/fbbe81138495184fa853e17ae5f68018?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fma.png',
    },
  },
  {
    id: 'abe318bc-36fd-49c9-8f84-e048f7537beb',
    authorId: 'auth0|637ea02ec0f8aabff64a760f',
    createdAt: new Date('2022-11-27T02:09:36.692Z'),
    content:
      'Do you know where the wild things go?\nThey go along to take your honey (La la la la)\nBreak down, now weep, build up breakfast\nNow let’s eat, my love, my love, love, love (La la la la)',
    likeCount: 0,
    liked: false,
    author: {
      userId: 'auth0|637ea02ec0f8aabff64a760f',
      username: 'FAKE-contotesto',
      picture:
        'https://s.gravatar.com/avatar/25a5015b9a665f869fd05e0aa733b4bc?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fel.png',
    },
  },
  {
    id: 'debc9dd9-65f1-43dc-a31d-d58b63bdb0ae',
    authorId: 'auth0|6377b507c3cfed678ac0d4b2',
    createdAt: new Date('2022-11-27T02:06:35.889Z'),
    content:
      'She may contain the urge to run away\nBut hold her down with soggy clothes and breezeblocks\nCetirizine, your fever’s gripped me again\nNever kisses, all you ever send are fullstops (La la la la)',
    likeCount: 2,
    liked: true,
    author: {
      userId: 'auth0|6377b507c3cfed678ac0d4b2',
      username: 'FAKE-martin',
      picture:
        'https://s.gravatar.com/avatar/fbbe81138495184fa853e17ae5f68018?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fma.png',
    },
  },
];
