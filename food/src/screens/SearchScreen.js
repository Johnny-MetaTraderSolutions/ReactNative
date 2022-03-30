import React, {useState } from "react";
import { View, Text } from "react-native";
import RestaurantList from "../components/RestaurantList";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";

const SearchScreen = () => {
    const [searchText, setSearchText] = useState("");
    const [results,onSearchStart] = useResults()

    return (
        <View>
            <SearchBar
                text={searchText}
                onTextChange={setSearchText}
                onSearchStart={onSearchStart}
            />
            <Text>we got {results.length} results</Text>
            <RestaurantList category = "Cost Effective"/>
            <RestaurantList category = "Bit Pricier"/>
            <RestaurantList category = "BiG Spender!"/>
        </View>
    );
};

export default SearchScreen;
