import React from "react";

function Box ({height, width, backgroundColor}) {
  const styles = {
    height: height,
    width: width,
    backgroundColor: backgroundColor
  }
  return (<div style={styles}></div>);
}

export default Box;
