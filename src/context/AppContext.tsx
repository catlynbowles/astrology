import React, { useContext, createContext, useState, Context } from "react";

// step 1: create context type
type authContextType = {
  sign: string;
  day: string;
  setSign: (sign: string) => void;
  setDay: (day: string) => void;
};

// step 2: create context default values
const authContextDefaultValues: authContextType = {
  sign: "",
  day: "",
  setSign: () => {},
  setDay: () => {},
};

// step 3: createContext & useContext
const AuthContext = createContext<authContextType>(authContextDefaultValues);

export function useAuth() {
  return useContext(AuthContext);
}

// step 4: create a provider function
interface Props {
  children: React.ReactNode;
}

export function AuthProvider({ children }: Props) {
  const [sign, setSign] = useState('');
  const [day, setDay] = useState('');
  console.log(sign, day)

  return (
    <AuthContext.Provider value={{ sign, day, setSign, setDay }}>
      {children}
    </AuthContext.Provider>
  );
};
