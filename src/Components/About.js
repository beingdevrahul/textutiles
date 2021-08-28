// import React, { useState } from "react";

export default function About(props) {
  let myStyle = {
    color: props.Mode === "light" ? "black" : "white",
    backgroundColor: props.Mode === "light" ? "white" : "#212529",
    border: "0.2px solid white",
  };
  // const[btntext,setBtntext]=useState("Enable Dark mode")
  // const [myStyle, setMyStyle] = useState({
  //   color: "#212529",
  //   backgroundColor: "white",
  //   border:" 0.5px solid black"
  // });
  // const toggleStyle = () => {
  //   if (myStyle.color === "white") {
  //     setMyStyle({
  //       color: "#212529",
  //       backgroundColor: "white",
  //       border:" 0.5px solid black"
  //     });
  //     setBtntext("Enable Dark mode")
  //   } else {
  //     setMyStyle({
  //       color: "white",
  //       backgroundColor: "#212529",
  //       border:" 0.5px solid white"
  //     });
  //     setBtntext("Enable Light mode")
  //   }
  // };
  return (
    <>
      <div className="container my-3 py-2" style={myStyle}>
        <h1 className="my-3">About us</h1>
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item my-3" style={myStyle}>
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
                style={myStyle}
              >
                About Textutils
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Here in this TextUtils application{" "}
                <strong>
                  you can manupulate the text in the way as you want.✌
                </strong>
              </div>
            </div>
          </div>
          <div className="accordion-item my-3" style={myStyle}>
            <h2 className="accordion-header" id="flush-headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
                style={myStyle}
              >
                About developer
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                👋 hey there! I recently completed 6th semester of <strong>my engineering in computer science.</strong> If you have any suggestions or ideas related to this application you can contact me, email us.  <strong>gmail -  <em>beingdevrahul@gmail.com</em></strong>
              </div>
            </div>
          </div>
        </div>
        <div className="container my-3">
          {/* <button
            type="button"
            className="btn btn-primary"
            onClick={toggleStyle}
          >
            {btntext}
          </button> */}
        </div>
      </div>
    </>
  );
}
