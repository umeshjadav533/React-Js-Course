import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import { lazy, Suspense } from "react";

// import Home from "./Home";
// import About from "./About";
// import Contact from "./Contact";
// import Products from "./Products";
// import Phone from "./Phone";
// import Laptop from "./Laptop";
// import App_Old from "./App_Old";

const Home = lazy(() => import('./Home'))
const About = lazy(() => import('./About'))
const Contact = lazy(() => import('./Contact'))
const Products = lazy(() => import('./Products'))
const Phone = lazy(() => import('./Phone'))
const Laptop = lazy(() => import('./Laptop'))
const App_Old = lazy(() => import('./App_Old'));

function App() {
  function User() {
    console.log(useParams());
    const { id } = useParams();
    return <h2>User Profile for ID: {id}</h2>;
  }

  function NotFound() {
    return <h2>404 - Page Not Found</h2>;
  }

  return (
    <BrowserRouter>
      <h1>React Router Example</h1>

      <nav>
        <Link to="/">Home</Link> |<Link to="/about">About</Link> |
        <Link to="/contact">Contact</Link> |<Link to="/user/10">User</Link> |
        <Link to="/products">Products</Link> |<Link to="/app-old">app old</Link>
      </nav>

      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="/products" element={<Products />}>
          <Route path="phone" element={<Phone />} />
          <Route path="laptop" element={<Laptop />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route path="/app-old" element={<App_Old />} />
      </Routes> */}

      <Suspense fallback={<p>Loading data...</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="/products" element={<Products />}>
            <Route path="phone" element={<Phone />} />
            <Route path="laptop" element={<Laptop />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
