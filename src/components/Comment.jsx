import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';

export function Comment({ content, onDeleteComment }) {

  // inicia um estado de like como 0 para ser incrementado
  const [likeCount, setLikeCount] = useState(0); 

  function userDeleteComment() {
    onDeleteComment(content);
  }

  function userAddLikeComment() {
    // para atualizar o valor de likes, preciso do valor anterior de likes
    setLikeCount((state) => {
      return state + 1;
    });
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/yukimurajohn.png"/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>John Lennon</strong>
              <time title='5 de abril de 2023 às 18:00' dateTime='2023-04-05 18:00:30'>Cerca de 1h atrás</time>
            </div>

            <button onClick={userDeleteComment} title='Deletar comentário'>
              <Trash size={24}/>
            </button>
          </header>
          
          <p>
            {content}
          </p>
        </div>

        <footer>
          <button onClick={userAddLikeComment}>
            <ThumbsUp size={24}/>
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}