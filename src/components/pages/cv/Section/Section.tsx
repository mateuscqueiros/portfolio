"use client";

interface CVSectionProps {
  icon: JSX.Element;
  title: string;
  text: string[];
}

export function CVSection({ icon, text, title }: CVSectionProps) {
  return (
    <>
      <div className="flex flex-row ml-5">
        <div className="flex flex-col items-middle justify-center text-cv-dark-color">
          <div className="mb-[10px]">{icon}</div>
          <div className="h-full w-[2px] bg-cv-dark-color m-auto mt-4 flex flex-col items-center">
            <div className="w-[2px] h-[2px] border-4 border-cv-dark-color rounded-full"></div>
          </div>
        </div>
        <div className="flex flex-col ml-5">
          <h2 className="font-['Nats'] uppercase text-2xl text-cv-dark-color mb-[10px]">
            {title}
          </h2>
          <div>
            {text.map((item, index) => (
              <p
                key={`text-${title}-${index}`}
                className="mb-[3px] text-[1.2em] font-['Mada'] leading-[1.75em]"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
