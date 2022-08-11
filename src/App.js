import { Route, Redirect } from "react-router-dom";
import ProfileCard from "./components/ProfileCard";
import TimeCards from "./components/TimeCards";

const App = () => {
  return (
    <main>
      <Route path="" exact>
        <Redirect to="/dashboard/weekly" />
      </Route>
      <Route path="/dashboard/:time">
        <ProfileCard />
        <TimeCards />
      </Route>
    </main>
  );
};

export default App;
