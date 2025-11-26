import { useState } from "react";
import { twMerge } from "tailwind-merge";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="w-full min-h-screen flex justify-center items-center bg-gray-100">
      <section className="flex flex-col items-center w-[350px] gap-8 bg-white shadow-lg rounded-3xl p-10 border border-gray-200">
        <p
          className={twMerge(
            "text-6xl font-bold text-gray-900",
            count >= 5 && "text-green-500",
            count >= 50 && "text-blue-500",
            count >= 500 && "text-purple-500",
            count <= -5 && "text-red-500",
            count <= -50 && "text-orange-500",
            count <= -500 && "text-yellow-500"
          )}
        >
          {count}
        </p>
        <div className="w-full grid grid-cols-3 gap-3">
          {["+1", "+10", "+100", "-1", "-10", "-100"].map((item) => (
            <button
              key={item}
              className="bg-black text-white py-3 rounded-xl text-lg active:scale-90 transition 
                         flex justify-center items-center cursor-pointer"
              onClick={() => {
                setCount((prev) => {
                  return prev + parseInt(item);
                });
              }}
            >
              {item}
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
