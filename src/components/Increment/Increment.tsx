import { IncrementBox } from './Increment.styled';

interface IncrementProps {
  quantity: number;
  id_name: string;
  increment: (quantity: number, id: string) => void;
  setQuantity: (quantity: number) => void;
}

export const Increment = ({
  increment,
  id_name,
  quantity,
  setQuantity,
}: IncrementProps) => {
  function incrementHandle(payload: number, id: string) {
    if (payload + quantity === 0) {
      return;
    }
    increment(payload + quantity, id);
    if (setQuantity) {
      setQuantity(payload + quantity);
    }
  }

  return (
    <IncrementBox>
      <button type="button" onClick={() => incrementHandle(-1, id_name)}>
        --
      </button>
      <span>{quantity}</span>
      <button type="button" onClick={() => incrementHandle(1, id_name)}>
        +
      </button>
    </IncrementBox>
  );
};
