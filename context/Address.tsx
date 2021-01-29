import React, { createContext, useContext, useState } from "react";
import ResponseData from "../utils/ResponseData";

const AddressContext = createContext<any>({});

export default function AddressProvider({ children }: any) {
  const [address, setAddress] = useState("");

  return (
    <AddressContext.Provider value={{ address, setAddress }}>
      {children}
    </AddressContext.Provider>
  );
}

export function useAddress() {
  const context = useContext(AddressContext);

  const { address, setAddress: any } = context;
  return { address, setAddress: any };
}
