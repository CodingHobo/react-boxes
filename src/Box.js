import React from "react";

function Box ({id, height, width, backgroundColor, deleteBox}) {
  const styles = {
    height: height,
    width: width,
    backgroundColor: backgroundColor
  }

  function handleRemove() {
    deleteBox(id);
  }

  return (
    <div>
      <div position="relative" style={styles}></div>
      <button
        style={{
          position: "relative",
          bottom: height,
          left: width,
          }}
        onClick={handleRemove}>X
      </button>
    </div>
  );
}

export default Box;
