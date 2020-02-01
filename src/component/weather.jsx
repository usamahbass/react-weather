import React from "react";

export const Weather = props => {
  function minmaxTemp(min, max) {
    if (min && max) {
      return (
        <h3>
          <span className="px-4">{min}&deg;c</span>
          <span>-</span>
          <span className="px-4">{max}&deg;c</span>
        </h3>
      );
    }
  }

  return (
    <div className="container" id={props.idweather}>
      <div className="cards pt-5 mt-4">
        {props.city ? (
          <h1>
            {props.city} {props.country}
          </h1>
        ) : null}
        <h5 className="py-5">
          <i className={`fa ${props.icons} fa-5x`}></i>
        </h5>

        {props.celcius ? <h1 className="py-2">{props.celcius}&deg;C</h1> : null}

        {minmaxTemp(props.tempmin, props.tempmax)}

        <h4 className="py-3 pt-3">{props.descriptions}</h4>

        <buttton
          className="btn btn-outline-white mt-3"
          style={{
            display: "none",
            border: "none",
            borderRadius: 0,
            borderBottom: "1px solid #fff",
            textTransform: "uppercase"
          }}
          id={props.idbutton}
          onClick={props.backclick}
        >
          Kembali
        </buttton>
      </div>
    </div>
  );
};
