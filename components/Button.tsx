import React from "react";

interface ButtonProps {
  children: string;
}

export default function Button(props: ButtonProps) {
  const { children } = props;

  return (
    <>
      <div className="w-[450px] h-[150px] m-4 border-black border-solid border flex items-center justify-center hover:cursor-pointer text-3xl flex-col">
        {children}
      </div>
    </>
  );
}
