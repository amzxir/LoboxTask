import { useEffect, useRef, useState } from "react";
import { IoIosArrowUp, IoIosArrowDown, IoMdCheckmark } from "react-icons/io";

type SelectType<T> = {
  options: SelectProps<T>[];
  selected: SelectProps<T>;
  onChange: (opt: SelectProps<T>) => void;
};

export function Select<T>({ options, selected, onChange }: SelectType<T>) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      )
        setIsOpen(false);
    };
    window.addEventListener("click", handler);
    return () => window.removeEventListener("click", handler);
  }, []);

  return (
    <div ref={containerRef} className="form-control">
      <div
        className="select-control"
        onClick={() => setIsOpen((o) => !o)}
        tabIndex={0}
      >
        <span>
          {selected.label}
          {selected.emoji && <span>{selected.emoji}</span>}
        </span>
        <span className="icon">
          {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </span>
      </div>

      {isOpen && (
        <div className="select-menus">
          {options.map((opt) => {
            const isSel = opt.value === selected.value;
            return (
              <div
                className={`select-item ${isSel ? "selected" : ""}`}
                key={String(opt.value)}
                onClick={() => {
                  onChange(opt);
                  setIsOpen(false);
                }}
              >
                <span>
                  {opt.label}
                  {opt.emoji && <span>{opt.emoji}</span>}
                </span>
                {isSel ? <IoMdCheckmark /> : null}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
