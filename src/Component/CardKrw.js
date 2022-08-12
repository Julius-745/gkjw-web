import React from "react";
import { Text, Button, Container, calc, Box, Flex, VStack, Spacer } from "@chakra-ui/react";
import { FaUserAlt } from "react-icons/fa";
import PropTypes from "prop-types";

export const CardKrw = ({title, date, krw, person1}) => {
    return(
        <Container border={'1px'} borderColor={'gray.200'} padding={5} borderRadius={4} w={'calc(100% / 3)'}> 
            <Text fontSize={'3xl'} fontWeight="bold">
                {title}
            </Text>
            <Text fontSize={'2xl'} fontWeight="bold">
                {date} 
            </Text>
            <Flex fontSize={'xl'} paddingTop={25} flexDirection={'column'}>
                <Box display={'flex'} flexDirection={'row'}>
                    <Text>
                        {krw}
                    </Text>
                    <Text paddingLeft={15}>
                        {person1}
                    </Text>
                </Box>
                <Box display={'flex'} flexDirection={'row'} paddingTop={5}>
                    <Text>
                        {krw}
                    </Text>
                    <Text paddingLeft={15}>
                        {person1}
                    </Text>
                </Box>
                <Box display={'flex'} flexDirection={'row'} paddingTop={5}>
                    <Text>
                        {krw}
                    </Text>
                    <Text paddingLeft={15}>
                        {person1}
                    </Text>
                </Box>
            </Flex>
            <Button variant={'solid'} color={'white'} bgColor={'#3C64B1'} float={"right"} marginTop={10}>Detail</Button>
        </Container>
    )
}

CardKrw.propTypes = {
    title: PropTypes.string,
    date: PropTypes.string,
    krw: PropTypes.string,
    person1: PropTypes.string
}