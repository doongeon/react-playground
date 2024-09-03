import { Link } from "react-router-dom";

interface GameCardProps {
    id: string;
    title: string;
    thumbnail: string;
}

export default function GameCard({ id, title, thumbnail }: GameCardProps) {
    return (
        <Link to={`/game/${id}`} key={id} className="game-card">
            <div className="game-card__img-container">
                <img
                    className="game-card__img"
                    src={thumbnail}
                    alt="game-preview"
                />
            </div>
            <div className="game-card__text-container">
                <h2 className="game-card__title">{title}</h2>
            </div>
        </Link>
    );
}
