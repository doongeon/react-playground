import "../styles/game-card-skeleton.css";

export default function GameCardSkeleton() {
  return [...Array(2)].map(() => {
    return (
      <div className="loading-card">
        <div className="loading-card__text-container">
          <h2 className="loading-card__title"></h2>
        </div>
        <div className="loading-card__img" />
      </div>
    );
  });
}