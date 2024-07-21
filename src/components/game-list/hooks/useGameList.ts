import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { gamesAtom } from "../../../utils/games-atom";

export default function useGameList() {
    const [isLoading, setLoading] = useState(true);
    const [games, setGames] = useRecoilState(gamesAtom);

    useEffect(() => {
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

        if (games.length === 0) {
            fetchGames();
        } else {
            setLoading(false);
        }
    }, [setGames, games.length]);

    return { isLoading, games };
}
