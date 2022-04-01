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
                <View
                    style={{
                        backgroundColor: "#D3D3D3",
                        marginLeft: 15,
                        marginVertical: 10,
                        height: 2,
                    }}
                ></View>
                <RestaurantList
                    results={filterResults("$$")}
                    category="Bit Pricier"
                />
                <View
                    style={{
                        backgroundColor: "#D3D3D3",
                        marginLeft: 15,
                        marginVertical: 10,
                        height: 2,
                    }}
                ></View>
                <RestaurantList
                    results={filterResults("$$$")}
                    category="Big Spender!"
                />
                <View
                    style={{
                        backgroundColor: "#D3D3D3",
                        marginLeft: 15,
                        marginVertical: 10,
                    }}
                ></View>
            </ScrollView>
        </>
    );
};

export default SearchScreen;
