import Header from "./Header";
import Footer from "./Footer";

export default function Layout(props) {
  const mystyle = {
    display: "grid",
    gridTemplateRows: "1fr auto",
    minHeight: "100vh",
  };
  return (
    <div style={mystyle}>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}
