import HomePage from "@/components/HomePage";
import UserProvider from "@/provider/UserContext";

export default function Home() {
  return (
<UserProvider>
  <HomePage/>
</UserProvider>
  );
}
