import React, { useState } from "react";
import {
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Select,
  Card,
  CardHeader,
  Heading,
  CardBody,
  Text,
  CardFooter,
  GridItem,
  // Grid
  RadioGroup,
  Radio,
  Stack,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputLeftElement,
  InputGroup,
  ScaleFade,
  CloseButton,
  Spinner,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { FaChildren, FaPersonCircleQuestion, IoPersonSharp } from "react-icons/fa6";
import CustomRadioButton from "./CustomRadio";
import mortageCapacity from "../utility/mortageCapacity";
import { BsCurrencyDollar } from "react-icons/bs";

const steps = [
  { title: "First", description: "Here's will be 2 questions" },
  { title: "Second", description: "Household income and jo marzi" },
  { title: "Third", description: "Select Rooms" },
];

export default function CalculatorNew() {
  const [activeStep, setActiveStep] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  // const { isOpen, onOpen, onClose } = useDisclosure();

  // const [ isOpen, setIsOpen ] = useState(false)
  const [loading, setLoading] = useState(false);
  const [bCapacity, setBCapacity] = useState(0);

  const handleNextStep = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1);
    } else {
      setTimeout(() => {
        setLoading(false);
        setIsOpen(true);
      }, 2000);
      // Open the congratulatory popup when all steps are completed
    }
  };

  const handlePreviousStep = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  function validateStatus(value) {
    let error;
    if (!value) {
      error = "This field is required";
    }
    return error;
  }

  function validateDependent(value) {
    let error;
    if (!value) {
      error = "This field is required";
    }
    return error;
  }

  function validateIncome(value) {
    let error;
    if (!value) {
      error = "This field is required";
    } else if (value <= 0) {
      error = "Value must be greater then 0";
    }
    return error;
  }

  // let content;
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (value) => {
    setSelectedValue(value);
  };
  // if (activeStep === 0) {
  //   content = (
  //     <div>
  //       <>
  //         <Stack direction="row">
  //           <CustomRadioButton
  //             label="single"
  //             icon={<FaChildren />}
  //             value="1"
  //             selectedValue={selectedValue}
  //             onChange={handleChange}
  //           />
  //           <CustomRadioButton
  //             icon={<FaChildren />}
  //             label="Couple"
  //             value="2"
  //             selectedValue={selectedValue}
  //             onChange={handleChange}
  //           />
  //         </Stack>
  //         <label style={{ marginTop: "20px" }}>Hello</label>
  //         <Select placeholder="Select option">
  //           <option value="option1">Single</option>
  //           <option value="option2">Married</option>
  //         </Select>
  //       </>
  //     </div>
  //   );
  // } else if (activeStep === 1) {
  //   content = <div>Household income and jo marzi</div>;
  // }

  return (
    <>
      <Card bg="#F0F0F0" margin={3}>
        <CardBody>
          <div style={{ display: "flex", alignItems: "flex-start" }}>
            <Stepper
              index={activeStep+1}
              orientation="vertical"
              height="350px"
              gap="0"
            >
              {steps.map((step, index) => (
                <Step key={index}>
                  <StepIndicator>
                    <StepStatus
                      complete={<StepIcon />}
                      incomplete={<StepNumber />}
                      active={<StepNumber />}
                    />
                  </StepIndicator>

                  <Box flexShrink="0">
                    <StepTitle>{step.title}</StepTitle>
                    <StepDescription>{step.description}</StepDescription>
                  </Box>

                  <StepSeparator />
                </Step>
              ))}
            </Stepper>

            <Formik
              className="min-w-full"
              initialValues={{ status: "", dependent: "", income: "" }}
              onSubmit={(values, actions) => {
                setLoading(true);
                setBCapacity(
                  mortageCapacity(
                    values.status,
                    values.dependent,
                    values.income
                  )
                );
                setTimeout(() => {
                  setLoading(false);
                  setIsOpen(true);
                }, 2000);
              }}
            >
              {(props) => (
                <Form>
                  <div style={{ marginLeft: "20px" }}>
                    <Card className="w-full md:w-800 lg:w-1000" height="350px">
                      <CardBody>
                        {activeStep === 0 ? (
                          <>
                            <div>
                              <>
                                <Stack direction="row">
                                  <Field
                                    name="status"
                                    validate={validateStatus}
                                  >
                                    {({ field, form }) => (
                                      <FormControl
                                        isInvalid={
                                          form.errors.status &&
                                          form.touched.status
                                        }
                                      >
                                        <FormLabel
                                          style={{ marginTop: 5 }}
                                          className="flex flex-row items-center"
                                        >
                                          Martial Status{" "}
                                          <FaPersonCircleQuestion className="ml-2" />
                                        </FormLabel>
                                        <div style={{ display: "flex" }}>
                                          <CustomRadioButton
                                            {...field}
                                            icon={<FaChildren />}
                                            label="Single"
                                            value="single"
                                            selectedValue={selectedValue}
                                            onChange={handleChange}
                                          />

                                          <CustomRadioButton
                                            {...field}
                                            icon={<FaChildren />}
                                            label="Couple"
                                            value="couple"
                                            selectedValue={selectedValue}
                                            onChange={handleChange}
                                          />
                                        </div>

                                        <FormErrorMessage>
                                          {form.errors.status}
                                        </FormErrorMessage>
                                      </FormControl>
                                    )}
                                  </Field>
                                </Stack>
                                <Field
                                  name="dependent"
                                  validate={validateDependent}
                                >
                                  {({ field, form }) => (
                                    <FormControl
                                      isInvalid={
                                        form.errors.dependent &&
                                        form.touched.dependent
                                      }
                                    >
                                      <FormLabel
                                        style={{ marginTop: 10 }}
                                        className="flex flex-row items-center"
                                      >
                                        Number of Childerns{" "}
                                        <FaChildren className="ml-2" />
                                      </FormLabel>
                                      <Select
                                        {...field}
                                        placeholder="Select Number of Childerns"
                                        size={"md"}
                                      >
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
                                      <FormErrorMessage>
                                        {form.errors.dependent}
                                      </FormErrorMessage>
                                    </FormControl>
                                  )}
                                </Field>
                              </>
                            </div>
                          </>
                        ) : activeStep===1 ? (
                          <Field name="income" validate={validateIncome}>
                            {({ field, form }) => (
                              <FormControl
                                isInvalid={
                                  form.errors.income && form.touched.income
                                }
                              >
                                <FormLabel className="flex flex-row items-center">
                                  Gross income (exc Rental) <BsCurrencyDollar />
                                </FormLabel>
                                <InputGroup className="flex flex-row items-center">
                                  <InputLeftElement>
                                    <BsCurrencyDollar />
                                  </InputLeftElement>
                                  <Input
                                    {...field}
                                    placeholder="Enter income"
                                    type="number"
                                    size={"md"}
                                  />
                                </InputGroup>
                                <FormErrorMessage>
                                  {form.errors.income}
                                </FormErrorMessage>
                              </FormControl>
                            )}
                          </Field>
                        ): (<>hello</>)}
                      </CardBody>
                      <CardBody>
                        <div>
                          <Button
                            float="right"
                            // type="submit"
                            // mt={1}
                            ml={2}
                            colorScheme="telegram"
                            onClick={handleNextStep}
                            // disabled={activeStep === steps.length - 1}
                          >
                            {activeStep === steps.length - 1
                              ? "Recalculate"
                              : "Next"}
                          </Button>
                          {activeStep !== 0 && (
                            <Button
                              float="right"
                              // mt={3}
                              colorScheme="telegram"
                              onClick={handlePreviousStep}
                              disabled={activeStep === 0}
                            >
                              Previous
                            </Button>
                          )}
                        </div>
                      </CardBody>
                    </Card>
                  </div>
                </Form>
              )}
            </Formik>

            {/* <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Congratulations!</ModalHeader>
                <ModalBody>
                  You have completed all the steps. Your task is finished.
                </ModalBody>
                <ModalFooter>
                  <Button colorScheme="telegram" onClick={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal> */}
            {/* <div
              className={`absolute  top-[10%] left-[50] ${
                isOpen ? "z-[2]" : "z-[-1]"
              } `}
            >
              <ScaleFade initialScale={0.2} in={isOpen}>
                <div className="bg-white-500 rounded-xl p-5 bg-[#006875] text-white !important ml-3 mr-3">
                  <div className="min-w-full flex items-end justify-end">
                    <CloseButton
                      size="md"
                      onClick={() => {
                        setIsOpen(false);
                      }}
                    />
                  </div>

                  <div className="flex justify-center ">
                    <p className="font-OpenSansRegular text-3xl sm:text-4xl font-bold ">
                      Borrowing power
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row  justify-between mt-8">
                    <p className="font-OpenSansRegular font-bold text-2xl ">
                      You could borrow up to
                    </p>
                    <p className="font-OpenSansRegular font-extrabold text-3xl">
                      $ {bCapacity?.toLocaleString()}
                    </p>
                  </div>
                  <p className="font-OpenSansRegular italic px-1 mt-2 opacity-80 text-xs ">
                    (Disclaimer: Estimates provided are not financial advice;
                    consult with a qualified professional for personalized
                    information.)
                  </p>
                  <div className="flex flex-row items-end  justify-end min-w-full space-x-2 mt-10">
                    <Button
                      onClick={() => {
                        setIsOpen(false);
                      }}
                    >
                      Close
                    </Button>
                    <Button
                      onClick={() => {
                        setIsOpen(false);
                      }}
                    >
                      {" "}
                      Recalculate
                    </Button>
                  </div>
                  <div className="flex flex-row items-end  justify-end min-w-full space-x-2 mt-10">
                    hello
                  </div>
                                  </div>
              </ScaleFade>
            </div> */}
          </div>
        </CardBody>
        <Card bg="#9E9FA5">
          {" "}
          {/* Set the background color and text color */}
          <CardBody>
            <Text>
              View a summary of all your customers over the last month.
            </Text>
          </CardBody>
        </Card>
      </Card>
      <div
        className={`h-full w-full bg-white bg-opacity-50 z-20 flex flex-col justify-center items-center absolute top-0 ${
          loading ? "block" : "hidden"
        } `}
      >
        <div className="flex flex-col justify-center items-center">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="#006875"
            size="xl"
          />
          <p className="font-medium">Calculating...</p>
        </div>
      </div>
    </>
  );
}
