import React, {useState, useEffect} from "react";
import axios from "axios";
import { Container, HStack, Stack} from "@chakra-ui/react";
import { CardIbadah } from "./CardIbadah";
import { CardLalu } from "./CardLalu";
import { CardKrw } from "./CardKrw";
import { CardSkeleton } from "./CardSkeleton";

export const CardIbadahLalu = () => {
    const[error, setError] = useState(null);
    const[ibadah, setIbadah] = useState([]);

    useEffect(() => {
        axios
            .get("https://gkjwprob.domcloud.io/api/ibadahs/")
            .then(res => setIbadah(res.data))
            .catch(err => setError(err.message));
    } , []);

    if(error) {
        return <div>An error occured: {error.message}</div>
    }

    return(
        <HStack padding={16}>
            {ibadah.data?.map(ibadah => {
                return ibadah.isLoading ? (
                    <Container border={'1px'} borderColor={'gray.200'} padding={5} borderRadius={4} w={'calc(100% / 3)'}>
                        <CardSkeleton />
                    </Container>
                ) : (
                    <Container border={'1px'} borderColor={'gray.200'} padding={5} borderRadius={4} w={'calc(100% / 3)'}>
                <CardLalu 
                    title={ibadah.attributes?.Title}
                    date={ibadah.attributes?.date}
                    persons1={ibadah.attributes?.pria}
                    persons2={ibadah.attributes?.wanita}
                    fund={ibadah.attributes?.fund}
                    fund1={ibadah.attributes?.fund1}
                    fund2={ibadah.attributes?.fund2}
                    />
                </Container>
                )
            })}
            <Container border={'1px'} borderColor={'gray.200'} padding={5} borderRadius={4} w={'calc(100% / 3)'}>
            <CardLalu 
                title={'Jadwal Ibadah Minggu'} 
                date={'17 April 2022'}
                persons1={'50'}
                persons2={'50'}
                fund={10000000}
                fund1={10000000}
                fund2={10000000}
                />
            </Container>
        </HStack>
    )
}