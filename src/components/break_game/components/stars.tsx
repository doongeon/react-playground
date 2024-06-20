export default function Stars() {
  return [...Array(100)].map((__, index) => {
    return (
      <div
        key={index}
        className="star"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 1.5}s`,
        }}
      />
    );
  });
}
