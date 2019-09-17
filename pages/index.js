import MainLayout from "../layouts/MainLayout";
import Header from "../components/Header";
import Footer from "../components/Footer";

import "../styles/styles.scss";

function Home() {
  return (
    <MainLayout>
      <Header />
      <main role="main" className="inner">
        <h1>Welcome to NextJS</h1>
      </main>
      <Footer />
    </MainLayout>
  );
}

export default Home;
