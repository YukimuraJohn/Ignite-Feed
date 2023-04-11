import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment({ content, onDeleteComment }) {

  function userDeleteComment() {
    onDeleteComment(content);
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
          <button>
            <ThumbsUp size={24}/>
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}