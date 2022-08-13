import React from "react";
import { Text, Button, Container, Box, Flex} from "@chakra-ui/react";
import { FaUserAlt, FaWallet } from "react-icons/fa";
import PropTypes from "prop-types";

export const CardLalu = ({title, date, persons1, persons2, persons3, fund, fund1, fund2}) => {
    return (
        <Container border={'1px'} borderColor={'gray.200'} padding={5} borderRadius={4} w={'calc(100% / 3)'}> 
            <Text fontSize={'3xl'} fontWeight="bold">
                {title}
            </Text>
            <Text fontSize={'2xl'} fontWeight="bold">
                {date}
            </Text>
            <Flex fontSize={'xl'} paddingTop={25} flexDirection={'column'}>
                <Flex flexDirection={'row'} justifyContent={'flex-start'}>
                    <Flex>
                        <FaUserAlt/>
                        <Text paddingLeft={15}>
                            {persons1}
                        </Text>
                    </Flex>
                    <Flex paddingLeft={25}>
                        <FaUserAlt/>
                        <Text paddingLeft={15}>
                            {persons2}
                        </Text>
                    </Flex>
                </Flex>
                <Flex display={'flex'} flexDirection={'row'} paddingTop={5}>
                    <FaWallet/>
                    <Text paddingLeft={15}>
                        {fund}
                    </Text>
                </Flex>
                <Flex display={'flex'} flexDirection={'row'} paddingTop={5}>
                    <FaWallet/>
                    <Text paddingLeft={15}>
                        {fund1}
                    </Text>
                </Flex>
                <Flex display={'flex'} flexDirection={'row'} paddingTop={5}>
                    <FaWallet/>
                    <Text paddingLeft={15}>
                        {fund2}
                    </Text>
                </Flex>
            </Flex>
            <Button variant={'solid'} color={'white'} bgColor={'#3C64B1'} float={"right"} marginTop={10}>Detail</Button>
        </Container>
    )
}

CardLalu.propTypes = {
    title: PropTypes.string,
    date: PropTypes.string,
    persons1: PropTypes.string,
    persons2: PropTypes.string,
    fund: PropTypes.number,
    fund1: PropTypes.number,
    fund2: PropTypes.number,
}