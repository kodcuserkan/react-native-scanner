import { ReactQueryProvider } from "./api/TanStackProvider";
import Navigation from "./Navigation";

export default function App() {
  return (
    <ReactQueryProvider>
      <Navigation />
    </ReactQueryProvider>
  );
}
