import { Toaster } from "react-hot-toast";
import { AppContextProvider } from "./context/context";
import Form from "./components/Form";
import Table from "./components/Table";

function App() {
  return (
    <AppContextProvider>
      <div className="my-8 px-6 sm:px-0 w-full">
        <Form />
        <Table />
        <Toaster position="top-right" />
      </div>
    </AppContextProvider>
  );
}

export default App;
