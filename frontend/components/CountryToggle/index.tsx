import { MouseEvent } from "react"
import useCountry from "../../hooks/useCountry"

const CountryToggle = () => {
  const { countryCode, toggleCountryCode } = useCountry()
  return (
    <>
      <button
        style={{ color: countryCode === "US" ? "red" : "black" }}
        value="US"
        onClick={(event: MouseEvent<HTMLButtonElement>) => {
          const value = (event.target as HTMLButtonElement).value
          toggleCountryCode(value)
        }}
      >
        US
      </button>
      <button
        style={{ color: countryCode === "RU" ? "red" : "black" }}
        value="RU"
        onClick={(event: MouseEvent<HTMLButtonElement>) => {
          const value = (event.target as HTMLButtonElement).value
          toggleCountryCode(value)
        }}
      >
        RU
      </button>
    </>
  )
}

export default CountryToggle
