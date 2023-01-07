import React, {useState, useEffect} from 'react'

const PageWrapper = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries();
  }, [])

  const getCountries = function(){
      fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(countries => setCountries(countries))
  }

  return (
    <div>
      <p>Hello World</p>
    </div>
  )
}

export default PageWrapper