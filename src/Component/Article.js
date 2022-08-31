import {
    Box,
    Container,
    Stack,
    Image,
    Text,
    Button,
    Flex
  } from '@chakra-ui/react'
  import React, {useState, useEffect} from 'react'
  import axios from 'axios';
  import Photo  from './Majelis.svg';

  export const Article = () => {
    const[error, setError] = useState(null);
    const[article, setArticle] = useState([]);

    useEffect(() => {
        axios
            .get("https://gkjwprob.domcloud.io/api/articles?populate=*")
            .then(res => setArticle(res.data))
            .catch(err => setError(err.message));
    } , []);

    
    if(error) {
        return <div>An error occured: {error.message}</div>
    }
    return(
        article.data?.map(article => (
            <Flex paddingTop={10} paddingLeft={16} paddingBottom={10} flexDirection={'column'}>
            <Box h={'81px'} textAlign={'center'}>
                <Text fontSize={'4xl'} fontWeight={'bold'}>{article.attributes?.category}</Text>
                <Text fontSize={'xl'}>{article.attributes.createdAt}</Text>
            </Box>
            <Box textAlign={'left'} paddingTop={20}>
                <Text fontSize={'3xl'} fontWeight={'bold'}>{article.attributes.title}</Text>
                <Text fontSize={'xl'}>Ayat</Text>
            </Box>
            <Box display={'flex'} alignItems="center" flexDirection={'column'} paddingTop={45}>
                <Image src={article.attributes.image?.data.attributes.url}/>
                <Text fontSize={'md'} textAlign={'left'} maxW={'1128px'} paddingTop={25}>{article.attributes.content}</Text>
            </Box>
        </Flex>
        ))
    )
  }