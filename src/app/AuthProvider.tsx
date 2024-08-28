"use client";
import { useAuth } from "../utils/useAuth";

 


export default function AuthProvider({ children }: { children: React.ReactNode }) {
  useAuth(); 

  return <>{children}</>;
}
