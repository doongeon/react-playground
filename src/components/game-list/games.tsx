import "./styles/games.css";
import GameCard from "./components/game-card";
import useGameList from "../../common/hooks/useGameList";

export default function GameList() {
    const { isLoading, games } = useGameList();

    return (
        <section className="game-section">
            <div className="notice">
                <span>Sorry... 😰</span>
                <span>모바일에서는 게임을 즐기실 수 없습니다.</span>
            </div>
            <div className="game-list">
                {isLoading
                    ? "loading"
                    : games.map((game) => {
                          return (
                              <GameCard
                                  key={game.gameId}
                                  id={game.gameId}
                                  title={game.title}
                                  thumbnail={game.thumbnail}
                              />
                          );
                      })}
            </div>
        </section>
    );
}
