import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function Home(props) {
  // const [count, setCount] = useState(0);
  // const [name, setName] = useState("");

  // useEffect(() => {}, []);

  return (
    <Fragment>
      <div
        className="container"
        style={{
          height: 1500,
          width: 1500,
          textAlign: "center",
          backgroundColor: "lightblue",
        }}
      >
        <h5>Welcome to Clark County Employee Website</h5>
        <div
          className="sidebar"
          style={{ height: 700, width: 350, backgroundColor: "lightgray" }}
        >
          <div style={{ textAlign: "left" }}>
            <h5> Employee Forms</h5>
            <ul>
              <Link to="/forms/overtime">Employee Overtime Form</Link>
            </ul>
          </div>
        </div>

        <div></div>
      </div>
    </Fragment>
  );
}

export default Home;
