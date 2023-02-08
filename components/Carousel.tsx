import { useState, useRef, useEffect } from "react";

export default function Carousel({ children }: { children: React.ReactNode[] }) {
  const [current, setCurrent] = useState(0);
  const size = useRef(children.length);
  const [style, setStyle] = useState({
    marginLeft: `-${current}00%`,
  });

  const move = (right: boolean) => {
    setCurrent(prev => {
      if (right) {
        if (current + 1 >= size.current) {
          return 0;
        }
        return current + 1;
      } else {
        if (current - 1 < 0) {
          return size.current - 1;
        }
        return current - 1;
      }
      return 0;
    });
  }

  useEffect(() => {
    setStyle({ marginLeft: `-${current}00%` });
  }, [current]);

  return (
    <div className="">
      <div className="flex">
        <button className="text-5xl" onClick={() => move(false)}>&lt;</button>
        <div className="w-[1000px] h-[400px] overflow-hidden border-2 border-gray-700 rounded-2xl">
          <div className={`flex w-full h-full ml-[-000%] transition-all duration-[1500ms]`} style={style}>
            {children.map((child, i) => (
              <div className="flex-none flex w-full h-full items-center" key={i}>
                {child}
              </div>
            ))}
          </div>
        </div>
        <button className="text-5xl" onClick={() => move(true)}>&gt;</button>
      </div>
      <div className="flex justify-center space-x-4 my-4">
        {children.map((x, i) => (
          <div
            key={i}
            className={`rounded-full w-3 h-3 ${i === current ? "bg-gray-900" : "bg-gray-400"}`}
          ></div>
        ))}
      </div>
    </div>
  );
};
