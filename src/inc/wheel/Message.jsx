import { usePaulContext } from "../../AppContext";

const Message = () => {
  const { message, result } = usePaulContext();
  return (
    <div>
      <h3>Congrats: {result}</h3>
    </div>
  );
};

export default Message;
