import { Avatar } from './Avatar';
import {Trash, ThumbsUp} from 'phosphor-react'
import { useState } from 'react';
import styles from '../styles/Comment.module.css'

export function Comment({content, onDeleteComment}){

    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment(){
        console.log('delete')

        onDeleteComment (content)
    }

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1;
        })
    }

    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/facefusion.png" alt="User Picture" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.aoutherAdnTime}>
                            <strong>Sahra Jones - </strong>
                            <time title="May 13 at 08:13PM" dateTime="2023-05-13 20:13:30">
                                Arround 1 hour ago
                            </time>
                        </div>
                        <button onClick={handleDeleteComment} title='Delete comment'>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Like<span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}