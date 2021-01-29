import AddressProvider from "../context/Address";

function MyApp({ Component, pageProps }: any) {
  return (
    <AddressProvider>
      <Component {...pageProps} />
    </AddressProvider>
  );
}

export default MyApp;
