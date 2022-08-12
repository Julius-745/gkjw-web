import React from "react";
import { Text, Button, Container, Box, Flex} from "@chakra-ui/react";
import { FaUserAlt } from "react-icons/fa";
import PropTypes from "prop-types";

export const CardIbadah = ({title, date, person1, person2, persons}) => {
    return (
        <Container border={'1px'} borderColor={'gray.200'} padding={5} borderRadius={4} w={'calc(100% / 3)'}> 
            <Text fontSize={'3xl'} fontWeight="bold">
                {title}
            </Text>
            <Text fontSize={'2xl'} fontWeight="bold">
                {date}
            </Text>
            <Flex fontSize={'xl'} paddingTop={25} flexDirection={'column'}>
                <Box display={'flex'} flexDirection={'row'}>
                    <FaUserAlt/>
                    <Text paddingLeft={15}>
                        {person1}
                    </Text>
                </Box>
                <Box display={'flex'} flexDirection={'row'} paddingTop={5}>
                    <FaUserAlt/>
                    <Text paddingLeft={15}>
                        {person2}
                    </Text>
                </Box>
                <Box display={'flex'} flexDirection={'row'} paddingTop={5}>
                    <FaUserAlt/>
                    <Text paddingLeft={15}>
                        {persons}
                    </Text>
                </Box>
            </Flex>
            <Button variant={'solid'} color={'white'} bgColor={'#3C64B1'} float={"right"} marginTop={10}>Detail</Button>
        </Container>
    )
}

CardIbadah.propTypes = {
    title: PropTypes.string,
    date: PropTypes.string,
    person1: PropTypes.string,
    person2: PropTypes.string,
    persons: PropTypes.string
}