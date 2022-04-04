import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import RestaurantList from "../components/RestaurantList";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";

const SearchScreen = () => {
    const [searchText, setSearchText] = useState("");
    const [results, onSearchStart] = useResults();
    const filterResults = (price) => {
        return results.filter((result) => {
            return result.price === price;
        });
    };
    return (
        <> 
            <SearchBar
                text={searchText}
                onTextChange={setSearchText}
                onSearchStart={onSearchStart}
            />
            <ScrollView>
                <RestaurantList
                    results={filterResults("$")}
                    category="Cost Effective"
                />
                <RestaurantList
                    results={filterResults("$$")}
                    category="Bit Pricier"
                />
                <RestaurantList
                    results={filterResults("$$$")}
                    category="Big Spender!"
                />
            </ScrollView>
        </>
    );
};

export default SearchScreen;
