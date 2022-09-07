import './App.css';
import 'react-phone-number-input/style.css'

import React from 'react';
import { useState } from 'react';

import PropTypes from 'prop-types'
import { getCountries, getCountryCallingCode } from 'react-phone-number-input/input'
import en from 'react-phone-number-input/locale/en.json'


function App() {

  const [currentCountry, setCurrentCountry] = useState('ru');

  const CountrySelect = ({ value, onChange, labels, ...rest }) => (
    <select
      {...rest}
      value={value}
      // style={{ background: 'yellow' }}
      style={{ background: `no-repeat url:("https://flag.pk/flags/4x3/${currentCountry}.svg")` }}


      onChange={event => {
        onChange(event.target.value || undefined)
        console.log(event.target.value);
        setCurrentCountry(event.target.value)
      }}>
      <option value="">
        {labels['ZZ']}
      </option>
      {
        getCountries().map((country) => {
          // console.log(country);
          return (
            <option
              key={country}
              value={country}
            >
              {labels[country]} + {getCountryCallingCode(country)}
            </option>
          )
        })
      }
    </select >
  )

  CountrySelect.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    labels: PropTypes.objectOf(PropTypes.string).isRequired
  }

  const [country, setCountry] = useState()


  return (
    <>
      <CountrySelect
        labels={en}
        value={country}
        onChange={setCountry} />
    </>
  );
}

export default App;
