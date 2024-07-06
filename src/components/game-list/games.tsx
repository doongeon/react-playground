import "./styles/games.css";
import GameCard from "./components/game-card";
import GameCardSkeleton from "./components/game-card-skeleton";
import useGameList from "./hooks/useGameList";

export default function GameList() {
  const { isLoading, games } = useGameList();

  return (
    <section className="game-list">
      {isLoading ? (
        <GameCardSkeleton />
      ) : (
        games.map((game) => {
          return (
            <GameCard
              key={game.gameId}
              id={game.gameId}
              title={game.title}
              thumbnail={game.thumbnail}
            />
          );
        })
      )}
    </section>
  );
}
