import axios from "axios";

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization:
            "Bearer QogYvvNcYtLPSdDyOdAZR6jdbBgOMNOatMtqPPX2Twe6mMZ0QPSX6MwB0uDrPNDMCtSQSV0xs8vKbNJaE7HHaAziFYCjqefIw8OY3qwrjxktmwWUlS5eE0Ad9p1DYnYx",
    },
});
