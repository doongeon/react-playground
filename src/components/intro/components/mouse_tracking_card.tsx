interface ProgramCardProps {
    cardRef: React.RefObject<HTMLDivElement>;
}

export default function MouseTrackingCard({ cardRef }: ProgramCardProps) {
    return (
        <div ref={cardRef} className="tracking-card">
            <pre>
                <span className="tracking-card__red">int</span>{" "}
                <span className="tracking-card__blue">main</span>(
                <span className="tracking-card__red">string</span>[]{" "}
                <span className="tracking-card__yellow">args</span>) {"{\n"}{" "}
                <span className="tracking-card__blue">printf</span>(
                <span className="tracking-card__purple">"hello world!"</span>);
                {"\n}"}
            </pre>
        </div>
    );
}
