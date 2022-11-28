import { Button } from "./Button";
import { v4 as uuidv4 } from "uuid";
import React from "react";

function Navbar({ contacts, content, title }: NavbarProps): JSX.Element {
  return (
    <div className="max-w-[175px]">
      {content.map((el) => {
        return (
          <Button
            key={uuidv4()}
            title={el}
            className="mx-[25px] my-[15px]  rounded-none "
          />
        );
      })}
      <div className="grid text-center border-[3px] w-[75px] mx-[25px] border-black">
        {contacts.map((cont) => {
          return (
            <a key={uuidv4()} className="py-[15px]">
              <img
                className="inline py-[5px] px-[5px]"
                src={`/icons/icons8-${cont.contact.toLowerCase()}.svg`}
              />
            </a>
          );
        })}
      </div>
    </div>
  );
}

export { Navbar };
