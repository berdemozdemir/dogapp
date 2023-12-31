import { QueryClientProvider } from "@tanstack/react-query";

import "@/styles/globals.css";
import { queryClient } from "@/util/https";

export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
