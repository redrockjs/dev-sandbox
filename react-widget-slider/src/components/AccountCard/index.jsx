import React from "react";
import s from "./styles.modules.css"

export function Widget() {
  return <>
    <div className="box">
      <div className="row">
        <div className="row-account-type">GPB Account</div>
        <div className="row-number">1234567</div>
      </div>
      <div className="row">
        <p className="rowBalance">£ 00.00</p>
      </div>
      <div className="row">
        <p className="rowIban">IBAN</p>
      </div>
      <div className="row">
        <p className="rowIbanNumber">GB29NWBK60161331926819</p>
      </div>
    </div>
  </>
}