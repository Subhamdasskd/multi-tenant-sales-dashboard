import { ReactNode } from "react";
import { useAuth } from "../contexts/AuthContext";

const Protected = ({
  allowedRoles,
  children,
}: {
  allowedRoles: string[];
  children: ReactNode;
}) => {
  const { role } = useAuth();

  if (!allowedRoles.includes(role)) {
    return <p>Access Denied</p>;
  }

  return <>{children}</>;
};

export default Protected;
