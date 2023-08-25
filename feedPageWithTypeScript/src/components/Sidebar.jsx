import styles from '../styles/Sidebar.module.css'
import {PencilLine} from 'phosphor-react'
import {Avatar} from '../components/Avatar'

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>

            <img 
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1498550744921-75f79806b8a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50"
                alt="cover picture" />

            <div className={styles.profile}>
                <Avatar 
                    src="https://github.com/amaralBruno27866.png"
                    alt="user picture"
                />

                <strong>Bruno Amaral</strong>

                <span>Intern Programmer</span>
                
            </div>

            <footer>
                <a href="#">
                <PencilLine size={20}/> 
                Edit you profile
                </a>
            </footer>
        </aside>
    );
}