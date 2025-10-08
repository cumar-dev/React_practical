import Count from "./Count";
import FetchData from "./DataFetching";
import Documenttitle from "./Document_title";
import Timer from "./StopWatch(timer)";
import WindowResize from "./Window_Resize";
function App() {
  return(
    <>
    <Documenttitle />
    <Count />
    <WindowResize />
    <Timer />
    <FetchData />
    </>
  )
}

export default App;