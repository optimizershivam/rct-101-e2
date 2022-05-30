import React from "react";
import { Button, FormControl, FormLabel } from '@chakra-ui/react'
import {
  
  Modal,
  ModalBody,
  Input,
  Select,
  RadioGroup,
  Radio,
  useDisclosure,
  ModalCloseButton,
  ModalOverlay,
  ModalContent,
  ModalHeader
} from '@chakra-ui/react'


const AddProduct = () => {
  // TODO: Remove below const and instead import them from chakra
  // const Button = () => <div />;
  // const Modal = () => <div />;
  // const ModalBody = () => <div />;
  // const Input = () => <div />;
  // const Select = () => <div />;
  // const RadioGroup = () => <div />;
  // const Radio = () => <div />;
  const { isOpen, onOpen, onClose } = useDisclosure()
  // const [form, setform] = useState({})
  const handlesubmit = (e) =>
  {
    e.preventDefault();

  }


  return (
    <>
      <Button my={4} data-cy="add-product-button" colorScheme='teal' size='md'onClick={onOpen}> Add New Products</Button>
     
      <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
        <ModalContent>
        <ModalHeader>Add New Product</ModalHeader>
      <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl >
          <FormLabel htmlFor='title'>Title</FormLabel>
          <Input data-cy="add-product-title" />
          <FormLabel htmlFor='title'>Category</FormLabel>
          <Select data-cy="add-product-category">
            <option data-cy="add-product-category-shirt" Value="shirt">Shirt</option>
            <option data-cy="add-product-category-pant"Value="pant">Pant </option>
            <option data-cy="add-product-category-jeans" Value="jeans"> Jeans</option>
          </Select>
          <FormLabel htmlFor='title'>Gender</FormLabel>
          <RadioGroup data-cy="add-product-gender">
            <Radio data-cy="add-product-gender-male" value="male">Male</Radio>
            <Radio data-cy="add-product-gender-female" value="female" >Female</Radio>
            <Radio data-cy="add-product-gender-unisex" value="unisex">Unisex</Radio>
          </RadioGroup>
          <FormLabel htmlFor='title'>Price</FormLabel>
          <Input data-cy="add-product-price" />
          </FormControl>
          <Button data-cy="add-product-submit-button"  colorScheme='blue' mr={3} type ="submit" onClick={handlesubmit}> Create</Button>
         
        </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddProduct;
