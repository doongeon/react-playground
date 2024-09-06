interface t_philosophy {
    title: string;
    subtitle?: string;
    sentence?: string;
    source: string;
    img: string;
}

export const philosopies: Array<t_philosophy> = [
    {
        title: "여동생과 놀 수 있는 무언가를 만들고 싶었다.",
        source: "Mark Zuckerberg",
        img: "images/philosophy/facebook.png",
    },
    {
        title: "Just Do It.",
        source: "NIKE",
        img: "images/philosophy/nike.webp",
    },
    {
        title: "작동하기 위해 설명서가 필요한 제품은 고장이 납니다.",
        source: "Elon Musk",
        img: "images/philosophy/elon.webp",
    },
    {
        title: "Quality, Service, Cleanliness, and Value",
        source: "McDonald's",
        img: "images/philosophy/mcdonald.png",
    },
    {
        title: "광인이 아닌 천재의 이름을 하나 대봐",
        source: "Kanye West",
        img: "images/philosophy/kanye.webp",
    },
    {
        title: "조금 더 침착한 자가 승리한다.",
        source: "침착맨",
        img: "images/philosophy/chim.webp",
    },
    {
        title: "One more thing...",
        source: "Steven Jobs",
        img: "images/philosophy/apple.png",
    },
];
