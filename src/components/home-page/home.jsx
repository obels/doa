import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function Home(props) {
  // const [count, setCount] = useState(0);
  // const [name, setName] = useState("");

  // useEffect(() => {}, []);

  return (
    <Fragment>
      <h2>Website in Progress</h2>
      <div>
        <ul>
          <Link to="/forms/overtime">Employee Overtime Form</Link>
        </ul>
      </div>
    </Fragment>
  );
}

export default Home;
