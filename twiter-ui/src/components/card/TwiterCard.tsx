import styles from './TwiterCard.module.css';

interface TwiterCardProps {
    name: string;
    username: string;
    isFollowing: boolean;
}

const TwiterCard = (props: TwiterCardProps) => {
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
                <button className={styles.followButton}>
                    {props.isFollowing ? "Siguiendo" : "Seguir"}
                </button>
            </aside>
        </article>
    )
}

export default TwiterCard;