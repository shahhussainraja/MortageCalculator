import React from 'react'
import { FaChildren, FaPersonCircleQuestion } from 'react-icons/fa6';
import { BsCurrencyDollar } from 'react-icons/bs';
import { Field, Form, Formik } from 'formik';
import { Box, Button, CircularProgress, CloseButton, FormControl, FormErrorMessage, FormLabel, Input, InputGroup, InputLeftElement, ScaleFade, Select, Spinner, useDisclosure } from '@chakra-ui/react'
import "./CustomCSS.css"
import { useRef } from 'react';
import { useState } from 'react';
import mortageCapacity from '../utility/mortageCapacity';


function Calculator() {
    const [ isOpen, setIsOpen ] = useState(false)
    const [loading,setLoading] = useState(false);
    const [bCapacity ,setBCapacity] = useState(0)

    function validateStatus(value) {
        let error
        if (!value) {
            error = 'This status field is required'
        }
        return error
    }

    function validateDependent(value) {
        let error
        if (!value) {
            error = 'This dependent field is required'
        }
        return error
    }

    function validateIncome(value) {
        let error
        if (!value) {
            error = 'This income field is required'
        }else if(value <= 0 ){
            error = 'Value must be greater then 0'
        } 
        return error
    }



    return (
        <>
            <div className="h-screen flex flex-col items-center justify-center relative">

                <div className='h-[80%] w-[75%] rounded-2xl mt-10 flex bg-[#fcfcfc]'>
                    <div className='flex-1 sm:flex-[.6] flex items-start justify-center flex-col px-8'>
                        <p className='font-OpenSansRegular font-bold text-2xl pb-2'>How much can I borrow?</p>
                        <Formik
                            className="min-w-full"
                            initialValues={{ status: "", dependent: "", income: "" }}
                            onSubmit={(values, actions) => {
                                setLoading(true);
                                setBCapacity(mortageCapacity(values.status,values.dependent,values.income));
                                setTimeout(() => {
                                   setLoading(false) 
                                   setIsOpen(true)
                                }, 2000);

                            }}
                        >
                            {(props) => (
                                <Form className='w-full space-y-3 font-OpenSansRegular'>
                                    <Field name='status' validate={validateStatus} >
                                        {({ field, form }) => (
                                            <FormControl isInvalid={form.errors.status && form.touched.status}>
                                                <FormLabel className='flex flex-row items-center' >The loan is for <FaPersonCircleQuestion className='ml-2' /></FormLabel>
                                                <Select {...field} placeholder='Select Status' size={"lg"}>
                                                    <option>Single</option>
                                                    <option>Couple</option>
                                                </Select>
                                                <FormErrorMessage>{form.errors.status}</FormErrorMessage>
                                            </FormControl>
                                        )}
                                    </Field>
                                    <Field name='dependent' validate={validateDependent}>
                                        {({ field, form }) => (
                                            <FormControl isInvalid={form.errors.dependent && form.touched.dependent}>
                                                <FormLabel className='flex flex-row items-center'>Number of Childerns <FaChildren className='ml-2' /></FormLabel>
                                                <Select  {...field} placeholder='Select Number of Dependents' size={"lg"}   >
                                                    <option>0</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                    <option>6</option>
                                                    <option>7</option>
                                                    <option>8</option>
                                                    <option>9+</option>
                                                </Select>
                                                <FormErrorMessage>{form.errors.dependent}</FormErrorMessage>
                                            </FormControl>
                                        )}
                                    </Field>
                                    <Field name='income' validate={validateIncome}>
                                        {({ field, form }) => (
                                            <FormControl isInvalid={form.errors.income && form.touched.income}>
                                                <FormLabel className='flex flex-row items-center'>Gross income (exc Rental) <BsCurrencyDollar /></FormLabel>
                                                <InputGroup className='flex flex-row items-center'>
                                                    <InputLeftElement>
                                                        <BsCurrencyDollar />
                                                    </InputLeftElement>
                                                    <Input  {...field} placeholder='Enter income' type='number' size={'lg'} />
                                                </InputGroup>
                                                <FormErrorMessage>{form.errors.income}</FormErrorMessage>
                                            </FormControl>
                                        )}
                                    </Field>
                                    <Button mt={4} colorScheme='telegram' disabled size={'md'} type='submit'>
                                        Check Borrow Capacity
                                    </Button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                    <div className='hidden sm:block sm:flex-[.4] rounded-xl guideImage '>
                        {/* imge Container */}
                    </div>
                </div>

                {/* result model */}
                <div className={`absolute top-[10%] left-[50] ${isOpen ? 'z-[2]' : 'z-[-1]' } `}>
                    <ScaleFade initialScale={0.2} in={isOpen} >
                        <div className='w-[500px] sm:w-[600px] bg-white-500 rounded-xl p-5 bg-yellow-500 text-white !important'>
                            <div className='min-w-full flex items-end justify-end'>
                                <CloseButton size='md' onClick={()=>{setIsOpen(false)}} />
                            </div>

                            <div className='flex justify-center '>
                                <p className='font-OpenSansRegular text-2xl sm:text-4xl font-bold'>Borrowing power</p>
                            </div>
                            <div className='flex flex-row  justify-between mt-8'>  
                                <p className="font-OpenSansRegular font-bold text-2xl">You could borrow up to</p>
                                <p className="font-OpenSansRegular font-bold text-2xl">$ {bCapacity?.toLocaleString()}</p>
                            </div>
                            <div className='flex flex-row items-end  justify-end min-w-full space-x-2 mt-10'>
                            <Button className='bg-[#006875] !important hover:bg-[#037c8b] !important text-white' onClick={()=>{setIsOpen(false)}}> close</Button>
                            <Button onClick={()=>{setIsOpen(false)}}> Recalculate</Button>
                            </div>
                        </div>
                    </ScaleFade>
                </div>
            </div>


             {/* spinner */}
            <div className={`h-full w-full bg-white bg-opacity-50 z-20 flex flex-col justify-center items-center absolute top-0 ${loading ? 'block' : 'hidden'} `}>
                    <div className='flex flex-col justify-center items-center'>
                    <Spinner
                        thickness='4px'
                        speed='0.65s'
                        emptyColor='gray.200'
                        color='#006875'
                        size='xl'
                    />
                    <p className='font-medium'>Calculating...</p>
                    </div>
                </div>
        </>
    )
}

export default Calculator