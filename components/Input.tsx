import { InputProps } from "../global-types";

function Input({ placeholder, on_change }: InputProps): JSX.Element {
  return (
    <input
      type="text"
      accept="image/svg"
      onChange={(e) => on_change(e)}
      className="border-[2px] w-[350px] border-black mx-[25px] my-[15px] text-center font-mono block text-black"
      placeholder={placeholder}
    />
  );
}

export { Input };
