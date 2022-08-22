import React, {useState, useEffect} from "react";
import axios from "axios";
import { Container, HStack, Stack} from "@chakra-ui/react";
import { CardIbadah } from "./CardIbadah";
import { CardKrw } from "./CardKrw";
import { CardSkeleton } from "./CardSkeleton";

export const CardJadwalSection = () => {
    const[error, setError] = useState(null);
    const[ibadah, setIbadah] = useState([]);

    useEffect(() => {
        axios
            .get("https://gkjwprob.domcloud.io/api/ibadahs/")
            .then(res => setIbadah(res.data))
            .catch(err => setError(err.message));
    } , []);

    const listIbadah = ibadah.data?.map(ibadah => {
        return ibadah[ibadah.length - 1];
    })

    console.log(listIbadah);

    
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
                    <CardIbadah 
                    key={ibadah.id}
                    title={ibadah.attributes?.Title}
                    date={ibadah.attributes?.date}
                    person={ibadah.attributes?.Pelayan}
                    person1={ibadah.attributes?.Pelayan1}
                    person2={ibadah.attributes?.Pelayan2}
                    persons={ibadah.attributes.SongLeader}/>
                </Container>
                )
            })}
            <Container border={'1px'} borderColor={'gray.200'} padding={5} borderRadius={4} w={'calc(100% / 3)'}>
            <CardKrw 
                title={'Jadwal Ibadah KRW'}
                date={'17 April 2022'}
                krw={'Betlehem'}
                person1={'Pdt. Patria Yusak'}/>
            </Container>
        </HStack>
    )
}