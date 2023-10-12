import React from "react";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
// import { img } from "../public/pizzas/focaccia.jpg";
import "./index.css"; // web pack take care of it to inject it

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return <h1>Fast React Pizza Co.</h1>;
}

function Footer() {
  const hour = new Date().getHours();
  console.log(hour);
  //   const openHour = 12;
  //   const closeHour = 22;

  //   if (hour >= openHour && hour <= closeHour) {
  //     alert("We are open");
  //   } else {
  //     alert("We are closed");
  //   }

  return <h1> {new Date().toLocaleTimeString()}Thank you for ordering</h1>;
}
function Menu() {
  return (
    <div>
      <h3>Our Menu</h3>
      <Pizza
        name="Focaccia"
        ingredients="Tomato and mozarella"
        price={6}
        photoName="pizzas/focaccia.jpg"
      />
      <Pizza
        name="Pizza Margherita"
        ingredients="Bread with italian olive oil and rosemary"
        price={10}
        photoName="pizzas/margherita.jpg"
      />
      <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        price={16}
        photoName="pizzas/spinaci.jpg"
      />
    </div>
  );
}
function Pizza(props) {
  return (
    <div>
      <img src={props.photoName} alt={props.name} width="30%" height="300px" />
      <h2>{props.name}</h2>
      <h4>{props.ingredients}</h4>
      <p>Price : {props.price}</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
