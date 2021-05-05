import ClientOnly from "../../components/clientOnly";
import Dashboard from "../../components/dashboard";

const App = () => {
  return (
    <ClientOnly>
      <Dashboard />
    </ClientOnly>
  );
};

export default App;
