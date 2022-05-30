import React, { useEffect, useState } from "react";
import {
  Stack,
  Image,
  Tag,
  TagLabel,
  Text,
  Heading,
  Box
} from '@chakra-ui/react'
import axios from 'axios';

const Product = () => {
  // TODO: Remove below const and instead import them from chakra
  // const Text = () => <div />;
  // const Image = () => <div />;
  // const Box = () => <div />;
  // const Stack = () => <div />;
  // const Heading = () => <div />;
  // const Tag = () => <div />;
  // const TagLabel = () => <div />;
  const [data, setdata] = useState([])

 useEffect(()=> {
    const getData = async () => 
    {
     let r = await axios.get("http://localhost:8080/products")
     setdata(r.data)

    }
   getData()
 },[] )


  return (
    <Stack data-cy="product">
      {data.map((e)=>(  
      <div >
      <Image data-cy="product-image" src={e.imageSrc} alt='Dan Abramov' />
      <Text data-cy="product-category">{e.category}</Text>
      <Tag>
        <TagLabel data-cy="product-gender">{e.gender}</TagLabel>
      </Tag>
      <Heading data-cy="product-title">{e.title}</Heading>
      <Box data-cy="product-price">{e.price}</Box>
      </div>) )}
    </Stack>
  );
};

export default Product;
