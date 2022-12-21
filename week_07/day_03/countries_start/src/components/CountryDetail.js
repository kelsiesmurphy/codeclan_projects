const CountryDetail = ({country}) => {
    return (
        <div className="country-detail">
            The capital city of {country.name.common} is {country.capital}
        </div>
    )
};

export default CountryDetail;