const Box = (props) => {
  //css를 js화 할때는 중괄호 2개 필요
  const boxStyle = {
    width: "100px",
    height: "100px",
    backgroundColor: props.backgroundColor,
  };

  return <div style={boxStyle}></div>;
};

export default Box;
