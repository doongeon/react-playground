import "./games.css";
import { useEffect, useState } from "react";
import GameCard from "./components/game-card";

interface TGameData {
  gameId: string;
  title: string;
  discription: string;
  thumbnail: string;
  url: string;
}

export default function GameList() {
  const [isLoading, setLoading] = useState(true);
  const [games, setGames] = useState<TGameData[]>([]);

  const fetchGames = async () => {
    try {
      const response = await fetch(
        "https://f5j1rhfaph.execute-api.ap-northeast-2.amazonaws.com/api/games"
      );
      if (!response.ok) throw new Error("fail to fetch games");

      const json = await response.json();
      setGames(json);
    } catch (error) {
      console.error("Error fetching games: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGames();
  }, []);

  return (
    <section className="game-list">
      {isLoading ? (
        <div>loading...</div>
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
