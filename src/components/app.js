import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { BrowserRouter, Routes } from "react-router-dom";
import Post from "./Post";
import LoginForm from "./LoginForm";
import Home from "./Home";
import { makeHeaders } from "./fetch";
import NavBar from "./NavBar";

const App = () => {
  const [me, setMe] = useState();
  const [searchTerm, setSearchTerm] = useState();
  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState(window.localStorage.getItem("token"));
  useEffect(() => {
    if (
      !token &&
      !window.location.href.indexOf("login") &&
      !window.location.href.indexOf("register")
    ) {
      window.location = "/login";
    }
  }, [token]);
  useEffect(() => {
    if (token) {
      fetch(
        "https://strangers-things.herokuapp.com/api/2204-ftb-mt-web-pt/users/me",
        makeHeaders("get")
      )
        .then((response) => response.json())
        .then(({ data }) => {
          console.log(data);
          setMe(data);
        });
    }
  }, [token]);
  return (
    <main>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route
            exact
            path="/"
            element={<><Home posts={posts} setPosts={setPosts} />
            <Post
                posts={posts}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                setPosts={setPosts}
              />
            </>}
          ></Route>
          <Route
            path="/posts"
            element={
              <Post
                posts={posts}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                setPosts={setPosts}
              />
            }
          ></Route>
          <Route
            path="/login"
            element={<LoginForm isLogIn setToken={setToken} />}
          ></Route>
          <Route
            path="/register"
            element={<LoginForm setToken={setToken} />}
          ></Route>
          <Route path="/logout" element={<div>logout</div>}></Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
