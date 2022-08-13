import React from "react";
import { Container, HStack, Stack} from "@chakra-ui/react";
import { CardIbadah } from "./CardIbadah";
import { CardLalu } from "./CardLalu";
import { CardKrw } from "./CardKrw";

export const CardIbadahLalu = () => {
    return(
        <HStack padding={16}>
            <CardLalu 
                title={'Jadwal Ibadah Minggu'} 
                date={'17 April 2022'}
                persons1={'50'}
                persons2={'50'}
                fund={10000000}
                fund1={10000000}
                fund2={10000000}
                />
            <CardIbadah 
                title={'Jadwal Ibadah Minggu Sukapura'} 
                date={'17 April 2022'}
                person={'Pdt. Patria Yusak'}
                person1={'Dkn Ruspandi'}
                person2={'Sdr. Gradian'}
                persons={'Ibu Naomi, Ibu Marta'}/>
            <CardLalu 
                title={'Jadwal Ibadah Minggu'} 
                date={'17 April 2022'}
                persons1={'50'}
                persons2={'50'}
                fund={10000000}
                fund1={10000000}
                fund2={10000000}
                />
        </HStack>
    )
}