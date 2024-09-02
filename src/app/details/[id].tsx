import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useState, useEffect } from "react";

import { useProductDatabase } from "@/database/useProudctDatabase";
                                   

export default function Details() {
    const [data, setData] = useState({
        name: "",
        quantity: 0
    });

    const productDatabase = useProductDatabase() 
    const params = useLocalSearchParams<{id: string}>();

    useEffect(() => {
        if (params.id) {
            productDatabase.show(Number(params.id)).then(response => {
                if (response) {
                    setData({
                        name: response.name,
                        quantity: response.quantity,

                    })
                }
            })
        }
    },[params.id])

    return (
    <View style={{ flex: 1, justifyContent: "center", paddingHorizontal: 18 }}>
        <Text style={{ fontSize: 32}}>
            <Text style={{ fontSize: 32, fontWeight: "bold"}}> Ord.: </Text> 
            {params.id}</Text>
        <Text style={{ fontSize: 32 }}>
            <Text style={{ fontSize: 32, fontWeight: "bold"}}> Quant.: </Text> 
            {data.quantity} - {data.name}</Text>
        <Text style={{ fontSize: 26 }}>
            <Text style={{ fontSize: 26, fontWeight: "bold"}}>Nome.: </Text>
            {data.name} - {data.name}</Text>
    </View>
    )
}