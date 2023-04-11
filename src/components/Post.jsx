// biblioteca para formatar data/horario
import { format, formatDistanceToNow } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';
import { useState } from 'react';


// estado = variáveis que eu quero que o componente monitore

export function Post({ author, published, content }) {

    // criando estados
    const [comments, setComments] = useState([
        'Post massa demais, hein!'
    ])

    const [newCommentText, setNewCommentText] = useState('')


    // formatando a data e hora
    const publishedDateFormatted = format(published, "d 'de' LLLL 'de' y 'às' HH:mm",{
        locale: ptBr,
    })

    // data relativa ao momento atual
    const publishedDateRelativeToNow = formatDistanceToNow(published, {
        locale: ptBr,
        addSuffix: true,
    })

    function userCreateNewComment() {
        // previnindo comportamento padrão do html
        event.preventDefault()

        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }

    function userNewCommentChange() {
        setNewCommentText(event.target.value)
    }

    function deleteComment(comment) {
        console.log(`Deletar comentário ${comment}`)
    }

    return (
    <article className={styles.post}>
        <header>
            <div className={styles.author}>
                <Avatar src={author.avatar_url} />
                <div className={styles.authorInfo}>
                    <strong>{author.name}</strong>
                    <span>{author.role}</span>
                </div>
            </div>
            <time title={publishedDateFormatted} dateTime={published.toISOString()}>
                {publishedDateRelativeToNow}
            </time>
        </header>

        <div className={styles.content}>
            {content.map(item => {
                if (item.type === 'paragraph') {
                    return <p key={item.content}>{item.content}</p>;
                } else if (item.type === 'link') {
                    return <p key={item.content}><a href="#">{item.content}</a></p>;
                }
            })}
            
        </div>

        <form onSubmit={userCreateNewComment} className={styles.commentForm}>
            <strong>Deixe seu feedback</strong>

            <textarea
                name='comment'
                placeholder='Deixe um comentário'
                value={newCommentText}
                onChange={userNewCommentChange}
            />

            <footer>
                <button type='submit'>Publicar</button>
            </footer>
        </form>

        <div className={styles.commentList}>
            {comments.map( comment => {
                return (
                    <Comment 
                        key={comment} 
                        content={comment} 
                        onDeleteComment={deleteComment} 
                    />
                )
            })}
        </div>
    </article>
  )
    
}
