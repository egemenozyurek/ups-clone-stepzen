import { TailwindProvider } from "tailwind-rn";
import utilities from "./tailwind.json";

import RootNavigator from "./navigator/RootNavigator";
import { NavigationContainer } from "@react-navigation/native";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://whitstable.stepzen.net/api/jolly-dragonfly/__graphql",
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    //@ts-ignore - TailwindProvider is missing a type definition

    <TailwindProvider utilities={utilities}>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </ApolloProvider>
    </TailwindProvider>
  );
}
