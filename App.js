import Main from "./Main";
import { Provider } from "react-redux";
import { PaperProvider } from 'react-native-paper';
import { store } from "./redux/store";
import { StripeProvider } from "@stripe/stripe-react-native";
import Constants from "expo-constants";

const stripeKey = Constants.manifest.extra.STRIPE_API_KEY;


export default function App() {
  return (
    <StripeProvider
      threeDSecureParams={{
        backgroundColor: "#fff",
        timeout: 5,
      }}
      merchantIdentifier="INSERT A RANDOM IDENTIFIER"
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
