import React from "react";
import s from "./styles.module.scss"

export function AccountCard({currencyType,number, currency, balance, accountType, accountNumber}) {
  return <>
    <div className={s.box}>
      <div className={s.row}>
        <div className={s.rowAccountType}> {currencyType} Account</div>
        <div className={s.rowNumber}>{number}</div>
      </div>
      <div className={s.row}>
        <p className={s.rowBalance}>{`${currency} ${balance}`}</p>
      </div>
      <div className={s.row}>
        <p className={s.rowIban}>{accountType}</p>
      </div>
      <div className={s.row}>
        <p className={s.rowIbanNumber}>{accountNumber}</p>
      </div>
    </div>
  </>
}