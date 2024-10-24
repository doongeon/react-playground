interface content {
    img: string;
    gameId?: string;
    url?: string;
}

export const contents: content[] = [
    {
        img: "images/spreadBorad_contents/bg3.png",
        url: "",
    },
    {
        img: "images/spreadBorad_contents/snc.png",
    },
    {
        img: "images/spreadBorad_contents/tetris.png",
        gameId: "2",
    },
    {
        img: "images/spreadBorad_contents/breakout.png",
        gameId: "1",
    },
    {
        img: "images/spreadBorad_contents/animation.png",
        gameId: "3",
    },
];
