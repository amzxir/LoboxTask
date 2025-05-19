import { useEffect, useRef, useState } from "react";

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
    <div ref={containerRef} className="">
      <div className="" onClick={() => setIsOpen((o) => !o)}>
        <span>
          {selected.emoji && <span>{selected.emoji}</span>}
          {selected.label}
        </span>
        <span>{isOpen ? "▴" : "▾"}</span>
      </div>

      {isOpen && (
        <div>
          {options.map((opt) => {
            const isSel = opt.value === selected.value;
            return (
              <div
                key={String(opt.value)}
                onClick={() => {
                  onChange(opt);
                  setIsOpen(false);
                }}
              >
                {opt.emoji && <span>{opt.emoji}</span>}
                {opt.label}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
