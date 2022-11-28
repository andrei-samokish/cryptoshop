import Layout from "../components/Layout";
import { AddItem } from "../components/AddItem";
import "semantic-ui-css/semantic.min.css";

export default function Main() {
  return (
    <div>
      <Layout>
        <AddItem></AddItem>
      </Layout>
    </div>
  );
}
