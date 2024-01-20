const ReqFieldMsg = ({ error, onTouch }) => {
  return (
    error &&
    onTouch && (
      <div>
        <p
          style={{
            color: "light",
            fontSize: 12,
            textAlign: "center",
            backgroundColor: "#f8d7da",
            borderRadius: 3,
          }}
        >
          {error}
        </p>
      </div>
    )
  );
};

export default ReqFieldMsg;
