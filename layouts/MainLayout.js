import Head from "next/head";
import { Container } from "react-bootstrap";

const Layout = props => (
  <>
    <Head>
      <title>NextJS / Bootstrap Boilerplate</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <Container className="container">{props.children}</Container>
  </>
);

export default Layout;
