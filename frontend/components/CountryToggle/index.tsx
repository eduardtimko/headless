//Core
import { useCallback, useState } from "react"
import useCountry from "../../hooks/useCountry"
import useDidMountEffect from "../../hooks/useDidMountEffect"

const CountryToggle = ({ country, availableCountries }) => {
  const [selectCountry, setSelectCountry] = useState(country)
  const { countryCode, toggleCountryCode } = useCountry()

  const handleChange = useCallback(
    ({ target }) => {
      toggleCountryCode(
        availableCountries.find((item) => item.isoCode === target.value).isoCode
      )
    },
    [selectCountry, availableCountries]
  )

  useDidMountEffect(() => {
    setSelectCountry(
      availableCountries.find((item) => item.isoCode === countryCode)
    )
  }, [countryCode])

  return (
    <select defaultValue={selectCountry.isoCode} onChange={handleChange}>
      {availableCountries?.map((item) => {
        return (
          <option
            key={item.isoCode}
            value={item.isoCode}
            style={{
              color: selectCountry.isoCode === item.isoCode ? "red" : "black",
            }}
          >
            {item.name}
          </option>
        )
      })}
    </select>
  )
}

export default CountryToggle
