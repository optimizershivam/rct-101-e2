import React from "react";
import Product from "./Product";
import AddProduct from "./AddProduct"
import Pagination from "./Pagination"
import { Flex  } from '@chakra-ui/react'
import { Grid  } from '@chakra-ui/react'

const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  // const Flex = () => <div />;
  // const Grid = () => <div />;

  return (
    <Flex>
      {/*  AddProduct */}
      <AddProduct/>
      <Grid>{/* List of Products */}

      <Product/>

      </Grid>
      {/* Pagination */}
      <Pagination/>

    </Flex>
  );
};

export default Products;
