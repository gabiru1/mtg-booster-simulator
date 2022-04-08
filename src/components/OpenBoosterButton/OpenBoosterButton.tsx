import "./OpenBoosterButton.css";

interface IOpenBoosterButtonProps {
  setName: string;
  onClick: () => void;
}

export default function OpenBoosterButton({
  setName,
  onClick,
}: IOpenBoosterButtonProps) {
  return (
    <div>
      <button className="button" onClick={onClick} type="button">
        Abrir Booster de {setName}
      </button>
    </div>
  );
}
