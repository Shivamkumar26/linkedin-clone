import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import { useEffect } from "react";
import { getUserAuth } from "./actions";
import { connect } from "react-redux";

function App(props) {
  useEffect(() => {
    props.getUserAuth();
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          {/* <Route exact path = "/home" element={<Header/>}/>  */}
          <Route
            exact
            path="/home"
            element={
              <>
                {" "}
                <Header /> <Home />{" "}
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

const mapStatetoProps = (state) => {
  return {};
};

const mapDispatchtoProps = (dispatch) => ({
  getUserAuth: () => dispatch(getUserAuth()),
});

export default connect(mapStatetoProps, mapDispatchtoProps)(App);
