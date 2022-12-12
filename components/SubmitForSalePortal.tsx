import { Dispatch, SetStateAction } from "react";
import { Header, Portal, Segment } from "semantic-ui-react";
import AddItem from "./AddItem";

type PortalProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export default function SubmitForSalePortal({ open, setOpen }: PortalProps) {
  return (
    <Portal onClose={() => setOpen(false)} open={open}>
      <Segment
        style={{
          left: "40%",
          position: "fixed",
          top: "20%",
          zIndex: 1000,
        }}>
        <Header>Submit your commodity here!</Header>
        <AddItem setOpen={setOpen} open={open} />
      </Segment>
    </Portal>
  );
}
