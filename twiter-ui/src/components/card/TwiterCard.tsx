import styles from './TwiterCard.module.css';
import { useState } from 'react';

interface TwiterCardProps {
    children?: React.ReactNode;
    name: string;
    username: string;
}

const TwiterCard = (props: TwiterCardProps) => {
    const [isFollowing, setIsFollowing] = useState(false);

    const handleFollow = () => {
        setIsFollowing(!isFollowing);
    }

    return (
        <article className={styles.card}>
            <header className={styles.cardHeader}>
                <img src={`https://unavatar.io/${props.username}`} alt={props.username} className={styles.avatar} />
                <div className={styles.cardInfo}>
                    <strong className={styles.title}>{props.name}</strong>
                    <span className={styles.user}>@{props.username}</span>
                </div>
            </header>

            <aside>
                <button className={isFollowing ? `${styles.followButton} ${styles.isFollowing}` : styles.followButton}
                    onClick={handleFollow}>
                    <span className={styles.followText}>{isFollowing ? "Siguiendo" : "Seguir"}</span>
                    <span className={styles.stopFollow}>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}

export default TwiterCard;