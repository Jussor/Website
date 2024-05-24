
import { Helmet } from "react-helmet";
import Routes from "./Routes/index";

function App() {
  return (
    <>
      <Helmet>
        <title>Jusoor News</title>
      </Helmet>
      <Routes />
    </>
  );
}

export default App;
