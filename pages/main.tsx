import Layout from "../components/Layout";
import "semantic-ui-css/semantic.min.css";
import ItemsRender from "../components/ItemsRender";

export default function Main() {
  return (
    <div>
      <Layout>
        <ItemsRender />
      </Layout>
    </div>
  );
}
