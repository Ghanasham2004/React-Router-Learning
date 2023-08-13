import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
// this is simple import of about component
// import About from "./components/About";
import Navbar from "./components/Navbar";
import OrderSummary from "./components/OrderSummary";
import NoMatch from "./components/NoMatch";
import Products from "./components/Products";
import FeaturedProducts from "./components/FeaturedProducts";
import NewProducts from "./components/NewProducts";
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";
import Admin from "./components/Admin";
import Profile from "./components/Profile";
// import AuthProvider
import { AuthProvider } from "./components/auth";
import Login from "./components/Login";
import RequireAuth from "./components/RequireAuth";

// import lazy loading of about component
const LazyAbout = React.lazy(() => import("./components/About"));
function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* // this is for lazy loading of about component  */}
        <Route
          path="about"
          element={
            <React.Suspense fallback="loading">
              {" "}
              <LazyAbout />{" "}
            </React.Suspense>
          }
        />
        {/* <Route path="about" element={<About />} /> */}
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="products" element={<Products />}>
          {/* add index route for when user render products route then we show feature content first */}
          <Route index element={<FeaturedProducts />} />
          <Route path="feature" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
        <Route path="users" element={<Users />}>
          {/* // add dynamic route for user details page and admin page  */}
          <Route path=":userId" element={<UserDetails />} />
          <Route path="admin" element={<Admin />} />
        </Route>

        <Route
          path="profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth> // this is for protected route
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
