import { useParams } from "react-router-dom";

const LinkParam = (props) => {
  let { id } = useParams();
  return <h2>Your id is {id} </h2>;
};

export default LinkParam;
