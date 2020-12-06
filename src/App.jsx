import React from "react";
import QuotesData from "./components/QuotesData";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import SearchQuotes from "./components/SearchQuotes";
import SubscriptionPayment from "./components/SubscriptionPayment";
import InsultGenerator from "./components/InsultGenerator";
import { Elements } from "react-stripe-elements";

const App = () => {
  return (
    <div>
      <h1>Trumpster</h1>
      <Elements>
        <SubscriptionPayment />
      </Elements>
      <RegisterForm />
      <LoginForm />
      <QuotesData />
      <SearchQuotes />
      <InsultGenerator />
    </div>
  );
};

export default App;
