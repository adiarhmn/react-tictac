interface props {
  value: string | null | number;
  onSquareClick: () => void;
}

const Square: React.FC<props> = ({ value, onSquareClick }) => {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
};

export default Square;
