import { ReactNode } from "react";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient } from "@tanstack/react-query";
import { createIDBPersister } from "./persister";

interface ReactQueryProviderProps {
  children: ReactNode;
}

const ONE_DAY_IN_SECONDS = 1000 * 60 * 60 * 24;

export function ReactQueryProvider({
  children,
}: Readonly<ReactQueryProviderProps>) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        gcTime: ONE_DAY_IN_SECONDS,
      },
    },
  });

  const persister = createIDBPersister();

  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister }}
    >
      <ReactQueryDevtools initialIsOpen={false} />
      {children}
    </PersistQueryClientProvider>
  );
}
