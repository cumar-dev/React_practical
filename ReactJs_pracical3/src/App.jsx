import { useState } from "react";
import Greeting from "../Greeeting";
import ListsArray from "../List";
import Notifications from "../Notifications";
import ToggleVissible from "./ToggleVissibilty";
import EventHandling from "./EventHandling";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [unReadMessages, setUnReadMessages] = useState(["Hello how are you", "Hi What's App"]);
  return(
    <>
    <ListsArray />
    <Greeting isLoggedIn={isLoggedIn} />
    <Notifications unReadMessages={unReadMessages} />
    <ToggleVissible />
    <EventHandling id={1} />
    <EventHandling id={2} />
    </>
  )
}

export default App;