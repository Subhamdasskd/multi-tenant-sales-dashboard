import { createContext, useContext, useState, ReactNode } from "react";

export type Role = "Admin" | "Agent";

interface AuthContextType {
  role: Role;
  loginAs: (role: Role) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [role, setRole] = useState<Role>("Admin");

  const loginAs = (role: Role) => {
    setRole(role);
  };

  return (
    <AuthContext.Provider value={{ role, loginAs }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};
