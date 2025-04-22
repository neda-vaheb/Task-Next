import HomePage from "@/components/HomePage";
import UserProvider from "@/provider/UserContext";
import { Suspense } from "react";
import Loader from "./Loader";

export default function Home() {
  return (
<UserProvider>
  <Suspense fallback={<Loader/>}>
  <HomePage/>
  </Suspense>
 
</UserProvider>
  );
}
