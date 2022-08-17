import React from "react";
import { Text, Button, Container, calc, Box, Flex, VStack, Spacer } from "@chakra-ui/react";
import { FaUserAlt } from "react-icons/fa";
import PropTypes from "prop-types";

export const CardKrw = ({title, date, krw, person1}) => {
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return(
        <Container border={'1px'} borderColor={'gray.200'} padding={5} borderRadius={4} w={'calc(100% / 3)'} justifyItems={'center'}> 
            <Text fontSize={'3xl'} fontWeight="bold">
                {title}
            </Text>
            <Text fontSize={'2xl'} fontWeight="bold">
                {new Date(date).toLocaleDateString("id-ID", options)} 
            </Text>
            <Flex fontSize={'xl'} paddingTop={15} flexDirection={'column'} fontWeight={'bold'}>
                <Box display={'flex'} flexDirection={'row'} paddingLeft={35}>
                    <Text>
                        {krw}
                    </Text>
                    <Text paddingLeft={35}>
                        {person1}
                    </Text>
                </Box>
                <Box display={'flex'} flexDirection={'row'} marginTop={2} paddingLeft={35}>
                    <Text>
                        {krw}
                    </Text>
                    <Text paddingLeft={35}>
                        {person1}
                    </Text>
                </Box>
                <Box display={'flex'} flexDirection={'row'} marginTop={2} paddingLeft={35}>
                    <Text>
                        {krw}
                    </Text>
                    <Text paddingLeft={35}>
                        {person1}
                    </Text>
                </Box>
                <Box display={'flex'} flexDirection={'row'} marginTop={2} paddingLeft={35}>
                    <Text>
                        {krw}
                    </Text>
                    <Text paddingLeft={35}>
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