import MainLayout from "../layouts/MainLayout";
import Header from "../components/Header";
import Footer from "../components/Footer";

import "../styles/styles.scss";

function Contact() {
  return (
    <MainLayout>
      <Header />
      <main role="main" className="inner">
        <h1>Contact Us</h1>
      </main>
      <Footer />
    </MainLayout>
  );
}

export default Contact;
