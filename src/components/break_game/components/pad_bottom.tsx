interface PadBottomProps {
  button: React.ReactNode;
}

export default function PadBottom({ button }: PadBottomProps) {
  return (
    <div className="buttons-wrap">
      <div className="arrow-btn">
        <div className="arrow-btn-item" />
        <div className="arrow-btn-item" />
        <div className="arrow-btn-item" />
        <div className="arrow-btn-item" />
        <div className="arrow-btn-item" />
        <div className="arrow-btn-item" />
        <div className="arrow-btn-item" />
        <div className="arrow-btn-item" />
        <div className="arrow-btn-item" />
      </div>
      <div className="circle-btn">
        <div className="circle-btn-item" />
        <div className="circle-btn-item" />
        <div className="circle-btn-item" />
        {button}
      </div>
    </div>
  );
}
