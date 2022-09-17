import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {ChakraProvider} from "@chakra-ui/react";
import {Provider} from "react-redux";
import Store from "../utils/Store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
  )
}


export default MyApp;
//export default Wrapper.withRedux(MyApp);
