import React from "react";
import "../styles/form.css";

function error() {
  return (
    <div className="alert alert-light mx-5" role="alert">
      Please enter your City and Country
    </div>
  );
}

export const Form = props => {
  return (
    <div className="container">
      <div>{props.error ? error() : null}</div>
      <form onSubmit={props.searchweather} id={props.idform}>
        <div className="row">
          <div className="col-md-3 offset-md-2">
            <input
              type="text"
              name="city"
              autoComplete="off"
              placeholder="Kota"
            />
            <span className="form-span">Kota</span>
          </div>
          <div className="col-md-3">
            <input
              type="text"
              name="country"
              autoComplete="off"
              placeholder="Negara"
            />
            <span className="form-span">Negara</span>
          </div>
          <div className="col-md-3 md-mt-0 text-md-left">
            <button className="btn btn-outline-white">Cek Cuaca</button>
          </div>
        </div>
      </form>
    </div>
  );
};
