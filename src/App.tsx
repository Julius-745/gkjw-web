import { Route, Switch } from "wouter";
import Home from "./routes/home/home";
import Article from "./routes/article/article";
import WartaPage from "./routes/warta/warta";


const App = () => {
  return (
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/warta/:id" component={WartaPage}/>
        <Route path="/article/:id" component={Article} />
      </Switch>
  );
};

export default App;