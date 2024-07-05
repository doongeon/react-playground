import { Link, useParams } from "react-router-dom";
import "./game-player.css";
import { useEffect, useRef, useState } from "react";

interface TGameData {
  gameId: string;
  title: string;
  discription: string;
  thumbnail: string;
  url: string;
  gitRepo: string;
}

export default function GamePlayer() {
  const { gameId } = useParams();
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [isLoading, setLoading] = useState(true);
  const [game, setGame] = useState<TGameData | undefined>();

  useEffect(() => {
    const fetchGame = async () => {
      try {
        const response = await fetch(
          `https://f5j1rhfaph.execute-api.ap-northeast-2.amazonaws.com/api/games/${gameId}`
        );
        if (!response.ok) throw new Error("fail to fetch games");

        const json = await response.json();
        setGame(json);
      } catch (error) {
        console.error("Error fetching games: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGame();
  }, [gameId]);

  useEffect(() => {
    const handleIframeMessage = (event: MessageEvent) => {
      // Ensure that the message is from the expected origin
      if (event.origin !== "https://dogwjefyhsbjy.cloudfront.net") return;

      // Check if the message is to block scrolling
      if (event.data === "block-keys") {
        const handleKeyDown = (e: KeyboardEvent) => {
          const keysToBlock = [
            "ArrowUp",
            "ArrowDown",
            "ArrowLeft",
            "ArrowRight",
            " ",
          ];
          if (keysToBlock.includes(e.key)) {
            e.preventDefault();
          }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
          window.removeEventListener("keydown", handleKeyDown);
        };
      }
    };

    window.addEventListener("message", handleIframeMessage);

    return () => {
      window.removeEventListener("message", handleIframeMessage);
    };
  }, []);

  return (
    <div className="game-player">
      {isLoading ? (
        <div>loading...</div>
      ) : (
        <>
          <h1 className="game-player__title">{game?.title}</h1>
          <div className="game-player__discription">
            <span>{game?.discription}</span>
            <a
              href={game?.gitRepo}
              target="_blank"
              className="game-player__git-anchor"
            >
              visit git repo
            </a>
          </div>
          <iframe
            ref={iframeRef}
            src={game?.url}
            width="600"
            height="900"
            scrolling="no"
          />
          <Link to={"/games"}>목록으로</Link>
        </>
      )}
    </div>
  );
}
