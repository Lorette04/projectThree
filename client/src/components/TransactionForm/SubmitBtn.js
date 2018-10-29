import React from "react";

export const SubmitBtn = props => (
  <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success" type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off">
    {props.children}
  </button>
);

