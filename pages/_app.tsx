import "styles/globals.css";
import type { AppProps } from "next/app";
import AppContainer from "components/layout/app-container/AppContainer";

function App({ Component, pageProps }: AppProps) {
  return (
    <AppContainer>
      <Component {...pageProps} />
    </AppContainer>
  );
}

export default App;
