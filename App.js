import Main from "./Main";
import { Provider } from "react-redux";
import { PaperProvider } from 'react-native-paper';
import { store } from "./redux/store";
import { StripeProvider } from "@stripe/stripe-react-native";

//Erase or Hide your key before deploying to GitHub

const stripeKey = "ADD YOUR STRIPE PUBLISHABLE A.P.I KEY PROVIDED BY STRIPE";

export default function App() {
  return (
    <StripeProvider
      threeDSecureParams={{
        backgroundColor: "#fff",
        timeout: 5,
      }}
      merchantIdentifier="ian-kaire"
      publishableKey={stripeKey}
    >
      <Provider store={store}>
        <PaperProvider>
          <Main />
        </PaperProvider>  
      </Provider>
    </StripeProvider>
  );
}
