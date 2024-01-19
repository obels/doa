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
        }}
      >
        <h5>Welcome to Clark County Employee Website</h5>
        <div className="sidebar" style={{ height: 700, width: 350 }}>
          <div style={{ textAlign: "left" }}>
            <h6> Employee Forms</h6>
            <ul className="list-unstyled">
              <Link to="/forms/overtime">
                <i
                  class="fa fa-file-text"
                  style={{ marginRight: 5 }}
                  aria-hidden="true"
                ></i>
                Employee Overtime Form
              </Link>
            </ul>
          </div>
        </div>

        <div></div>
      </div>
    </Fragment>
  );
}

export default Home;
