export default function TextContainer({
    title,
    sentence,
}: {
    title?: string;
    sentence: string;
}) {
    return (
        <div className="intro-section__text-container">
            {title ? <h2 className="intro-section__title">{title}</h2> : null}
            {sentence.split("\n").map((aLine, index) => (
                <span key={index}>{aLine}</span>
            ))}
        </div>
    );
}
