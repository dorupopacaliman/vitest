import { useCount } from '../../hooks/useCount';

const Counter = ({ initialCount = 0 }: { initialCount?: number }) => {
  const { count, increment, decrement } = useCount(initialCount);

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span data-testid="count">{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Counter;
