interface ContainerProps {
  id: string;
  bg: string;
  children: React.ReactNode;
  style?: string;
}

export function Container({ id, bg, children, style = "" }: ContainerProps) {
  return (
    <div
      id={id}
      className={`${bg} flex flex-col justify-between rounded-md h-fit lg:h-full p-8 ${style}`}
    >
      {children}
    </div>
  );
}
