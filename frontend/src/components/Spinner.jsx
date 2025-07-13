import "./components.styles.css";

function Spinner() {
  return (
    <div className="flex flex-row gap-2 items-center h-screen justify-center">
      <div className="w-4 h-4 rounded-full bg-red-800 animate-bounce"></div>
      <div className="w-4 h-4 rounded-full bg-red-800 animate-bounce [animation-delay:-.3s]"></div>
      <div className="w-4 h-4 rounded-full bg-red-800 animate-bounce [animation-delay:-.5s]"></div>
    </div>
  );
}

export default Spinner;
