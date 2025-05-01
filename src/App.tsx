import { Route, Switch } from "wouter";
import Home from "./routes/home/home";
import Article from "./routes/article/article";


const App = () => {
  return (
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/article/:id" component={Article} />
      </Switch>
  );
};

export default App;