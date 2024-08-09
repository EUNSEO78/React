const Profileimage = (props) => {
  const imgBox = {
    width: "50px",
    height: "50px",
  };
  return (
    <div style={imgBox}>
      <img
        src={props.src}
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "9999px",
          objectFit: "cover",
        }}
      ></img>
    </div>
  );
};

export default Profileimage;
