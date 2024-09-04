"use client";

import { type ReactNode, createContext, useRef, useContext } from "react";
import { useStore } from "zustand";

import { type RequestStore, createRequestStore } from "@/stores/request";

export type RequestStoreApi = ReturnType<typeof createRequestStore>;

export const RequestStoreContext = createContext<RequestStoreApi | undefined>(
  undefined
);

export interface RequestStoreProviderProps {
  children: ReactNode;
}

export const RequestStoreProvider = ({
  children,
}: RequestStoreProviderProps) => {
  const storeRef = useRef<RequestStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createRequestStore();
  }

  return (
    <RequestStoreContext.Provider value={storeRef.current}>
      {children}
    </RequestStoreContext.Provider>
  );
};

export const useRequestStore = <T,>(
  selector: (store: RequestStore) => T
): T => {
  const requestStoreContext = useContext(RequestStoreContext);

  if (!requestStoreContext) {
    throw new Error(`useRequestStore must be used within RequestStoreProvider`);
  }

  return useStore(requestStoreContext, selector);
};
