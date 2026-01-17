import { createContext, useContext, useState, ReactNode } from "react";

export type Tenant = "orgA" | "orgB";

interface TenantContextType {
  tenant: Tenant;
  switchTenant: (tenant: Tenant) => void;
}

const TenantContext = createContext<TenantContextType | undefined>(undefined);

export const TenantProvider = ({ children }: { children: ReactNode }) => {
  const [tenant, setTenant] = useState<Tenant>("orgA");

  const switchTenant = (tenant: Tenant) => {
    setTenant(tenant);
  };

  return (
    <TenantContext.Provider value={{ tenant, switchTenant }}>
      {children}
    </TenantContext.Provider>
  );
};

export const useTenant = () => {
  const context = useContext(TenantContext);
  if (!context) {
    throw new Error("useTenant must be used within TenantProvider");
  }
  return context;
};
