import { Home, Work } from "@mui/icons-material";
import {
    Card,
    FormControl,
    Grid,
    InputAdornment,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select,
    useMediaQuery
} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import Typography from "@mui/material/Typography";
import { useFormik } from "formik";
import * as React from "react";
import { useState } from "react";
import * as Yup from "yup";
import "./ToggleButton.css";
import "./fonts.css";

const steps = ["Personal Information", "Income", "Result"];

export default function MortageCalaculator() {
  // formik

  const validationSchema = Yup.object({
    // Define validation rules for your form fields here
    maritalStatus: Yup.string().required("Marital Status is required"),
    dependents: Yup.number()
      .required("Dependents is required")
      .min(1, "Dependents must be at least 1"),
  });

  const handleSubmit = (values) => {
    // Handle form submission here
    console.log("Form submitted with values:", values);
    handleNext();
  };

  // Inside your component function...
  const formik = useFormik({
    initialValues: {
      maritalStatus: "single", // Set initial values for your form fields
      dependents: "",
    },
    validationSchema,
    onSubmit: handleSubmit,
  });

  const validationSchema2 = Yup.object({
    income: Yup.number()
      .required("Income is required")
      .min(0, "Income must be a positive number"),
  });

  const handleSubmit2 = (values) => {
    // Handle form submission here
    console.log("Form submitted with values:", values);
  };

  // Inside your component function...
  const formik2 = useFormik({
    initialValues: {
      income: "",
    },
    validationSchema: validationSchema2,
    onSubmit: (values) => {
      // Handle form submission here
      console.log(values);
      handleNext();
    },
  });

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const [selectedCard, setSelectedCard] = React.useState(null);

  const handleCardSelect = (card) => {
    setSelectedCard(card);
  };

  const [count, setCount] = React.useState(0);

  const handleChange = (event) => {
    setCount(event.target.value);
  };

  const [selectedOption, setSelectedOption] = React.useState(null);

  const options = [
    {
      icon: <Home />,
      value: "home",
      label: "single",
    },
    {
      icon: <Work />,
      value: "work",
      label: "couple",
    },
    // {
    //   icon: <Person />,
    //   value: "person",
    // },
    // Add more options as needed
  ];
  const [selectedStatusOption, setSelectedStatusOption] = useState("single");

  const handleOptionChange = (option) => {
    setSelectedStatusOption(option);
  };

  const handleSelectOption = (optionValue) => {
    setSelectedOption(optionValue);
  };
  const isSmallScreen = useMediaQuery("(max-width:900px)");
  return (
    <>
      <Card sx={{ borderRadius: 5, margin: 1, bgcolor: "#F0F0F0" }}>
        <Grid container padding={4}>
          <Grid item xs={12} md={2}>
            <Stepper
              orientation={isSmallScreen ? "horizontal" : "vertical"}
              sx={isSmallScreen ? { minHeight: 30, mb: 3 } : { minHeight: 300 }}
              activeStep={activeStep}
            >
              {steps.map((label, index) => {
                const stepProps = {};
                const labelProps = {};

                if (isStepSkipped(index)) {
                  stepProps.completed = false;
                }
                return (
                  <Step key={label} {...stepProps}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
          </Grid>

          <Grid item xs={12} md={10}>
            {" "}
            <Card sx={{ padding: 5, minHeight: 250 }}>
              {activeStep === steps.length ? (
                <React.Fragment>
                  <Typography sx={{ mt: 2, mb: 1 }}>
                    All steps completed - you&apos;re finished
                  </Typography>
                  <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                    <Box sx={{ flex: "1 1 auto" }} />
                    <Button variant="contained" onClick={handleReset}>
                      ReCalculate
                    </Button>
                  </Box>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {activeStep === 0 ? (
                    <form onSubmit={formik.handleSubmit}>
                      {/* Marital Status */}
                      <Grid container alignItems={"center"}>
                        <Grid item sm={12} md={12} mb={2.5}>
                          Martial Status <span style={{ color: "red" }}>*</span>
                        </Grid>
                      </Grid>
                      <div className="toggle-button">
                        <button
                          style={{
                            borderTopLeftRadius: 50,
                            borderBottomLeftRadius: 50,
                            width: "auto",
                            height: "auto",
                          }}
                          className={
                            formik.values.maritalStatus === "single"
                              ? "active"
                              : ""
                          }
                          onClick={() =>
                            formik.setFieldValue("maritalStatus", "single")
                          }
                          type="button"
                        >
                          Single
                        </button>
                        <button
                          style={{
                            borderTopRightRadius: 50,
                            borderBottomRightRadius: 50,
                            width: "auto",
                            height: "auto",
                          }}
                          className={
                            formik.values.maritalStatus === "couple"
                              ? "active"
                              : ""
                          }
                          onClick={() =>
                            formik.setFieldValue("maritalStatus", "couple")
                          }
                          type="button"
                        >
                          Couple
                        </button>
                      </div>
                      {formik.touched.maritalStatus &&
                        formik.errors.maritalStatus && (
                          <div className="error" style={{ color: "red" }}>
                            {formik.errors.maritalStatus}
                          </div>
                        )}

                      {/* Dependents */}
                      <Grid container alignItems={"center"}>
                        <Grid item sm={12} md={12} mb={2.5} mt={2.5}>
                          Martial Status <span style={{ color: "red" }}>*</span>
                        </Grid>
                      </Grid>
                      <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">
                            Dependents
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name="dependents"
                            value={formik.values.dependents}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            label="Dependents"
                          >
                            <MenuItem value="">Select Dependents</MenuItem>
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={6}>6</MenuItem>
                            <MenuItem value={7}>7</MenuItem>
                            <MenuItem value={8}>8</MenuItem>
                            <MenuItem value={9}>9</MenuItem>
                            <MenuItem value={10}>10</MenuItem>

                            {/* Add more MenuItem elements for other options */}
                          </Select>
                        </FormControl>
                      </Box>
                      {formik.touched.dependents &&
                        formik.errors.dependents && (
                          <div className="error" style={{ color: "red" }}>
                            {formik.errors.dependents}
                          </div>
                        )}

                      {/* Submit button */}

                      {/* <Button variant="contained" type="submit">
                        Next
                      </Button> */}
                      <Box
                        sx={{ display: "flex", flexDirection: "row", pt: 2 }}
                      >
                        <Button
                          // color="inherit"
                          disabled={activeStep === 0}
                          onClick={handleBack}
                          sx={{ mr: 1 }}
                          variant="contained"
                        >
                          Back
                        </Button>
                        <Box sx={{ flex: "1 1 auto" }} />
                        {/* {isStepOptional(activeStep) && (
                    <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                      Skip
                    </Button>
                  )} */}

                        <Button variant="contained" type="submit">
                          Next
                        </Button>
                      </Box>
                      {/* <button type="submit">Submit</button> */}
                    </form>
                  ) : // <>
                  //   <Grid container alignItems={"center"}>
                  //     <Grid item sm={12} md={12} mb={2.5}>
                  //       Martial Status <span style={{ color: "red" }}>*</span>
                  //     </Grid>
                  //     <Grid item sm={12} md={12}>
                  //       <div className="toggle-button">
                  //         <button
                  //           style={{
                  //             borderTopLeftRadius: 50,
                  //             borderBottomLeftRadius: 50,
                  //             width: "auto",
                  //             height: "auto",
                  //           }}
                  //           className={
                  //             selectedStatusOption === "single" ? "active" : ""
                  //           }
                  //           onClick={() => handleOptionChange("single")}
                  //           // style={{ width: '100px' }} // Adjust the width as needed
                  //         >
                  //           Single
                  //         </button>
                  //         <button
                  //           style={{
                  //             borderTopRightRadius: 50,
                  //             borderBottomRightRadius: 50,
                  //             width: "auto",
                  //             height: "auto",
                  //           }}
                  //           className={
                  //             selectedStatusOption === "couple" ? "active" : ""
                  //           }
                  //           onClick={() => handleOptionChange("couple")}
                  //           // style={{}} // Adjust the width as needed
                  //         >
                  //           Couple
                  //         </button>
                  //       </div>
                  //       {/* <IconOptions
                  //         options={options}
                  //         selectedOption={selectedOption}
                  //         onSelectOption={handleSelectOption}
                  //       /> */}
                  //       {/* <Box sx={{ minWidth: 120 }}>
                  //     <FormControl fullWidth>
                  //       <InputLabel id="demo-simple-select-label">
                  //         Dependents
                  //       </InputLabel>
                  //       <Select
                  //         labelId="demo-simple-select-label"
                  //         id="demo-simple-select"
                  //         value={count}
                  //         label="Dependents"
                  //         onChange={handleChange}
                  //       >
                  //         <MenuItem value="">Select Dependents</MenuItem>
                  //         <MenuItem value={1}>1</MenuItem>
                  //         <MenuItem value={2}>2</MenuItem>
                  //         <MenuItem value={3}>3</MenuItem>
                  //         <MenuItem value={4}>4</MenuItem>
                  //         <MenuItem value={5}>5</MenuItem>
                  //         <MenuItem value={6}>6</MenuItem>
                  //         <MenuItem value={7}>7</MenuItem>
                  //         <MenuItem value={8}>8</MenuItem>
                  //         <MenuItem value={9}>9</MenuItem>
                  //         <MenuItem value={10}>10</MenuItem>

                  //       </Select>
                  //     </FormControl>
                  //   </Box> */}
                  //     </Grid>
                  //   </Grid>

                  //   <Grid container alignItems={"center"} mt={5}>
                  //     <Grid item xs={12} sm={12} md={12} mb={3}>
                  //       Dependents <span style={{ color: "red" }}>*</span>
                  //     </Grid>
                  //     <Grid item xs={12} sm={12} md={12}>
                  //       <Box sx={{ minWidth: 120 }}>
                  //         <FormControl fullWidth>
                  //           <InputLabel id="demo-simple-select-label">
                  //             Dependents
                  //           </InputLabel>
                  //           <Select
                  //             labelId="demo-simple-select-label"
                  //             id="demo-simple-select"
                  //             value={count}
                  //             label="Dependents"
                  //             onChange={handleChange}
                  //           >
                  //             <MenuItem value="">Select Dependents</MenuItem>
                  //             <MenuItem value={1}>1</MenuItem>
                  //             <MenuItem value={2}>2</MenuItem>
                  //             <MenuItem value={3}>3</MenuItem>
                  //             <MenuItem value={4}>4</MenuItem>
                  //             <MenuItem value={5}>5</MenuItem>
                  //             <MenuItem value={6}>6</MenuItem>
                  //             <MenuItem value={7}>7</MenuItem>
                  //             <MenuItem value={8}>8</MenuItem>
                  //             <MenuItem value={9}>9</MenuItem>
                  //             <MenuItem value={10}>10</MenuItem>
                  //           </Select>
                  //         </FormControl>
                  //       </Box>
                  //     </Grid>
                  //   </Grid>
                  // </>
                  activeStep === 1 ? (
                    <form onSubmit={formik2.handleSubmit}>
                      <Grid container alignItems="center" mt={5}>
                        <Grid item xs={12} sm={12} md={12} mb={5}>
                          Income <span style={{ color: "red" }}>*</span>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} mb={5.5}>
                          <Box sx={{ maxWidth: "100%" }}>
                            <FormControl fullWidth sx={{ m: 1 }}>
                              <InputLabel htmlFor="outlined-adornment-amount">
                                Amount
                              </InputLabel>
                              <OutlinedInput
                                id="income"
                                type="number"
                                {...formik2.getFieldProps("income")}
                                error={
                                  formik2.touched.income &&
                                  Boolean(formik2.errors.income)
                                }
                                // type="number"
                                startAdornment={
                                  <InputAdornment position="start">
                                    $
                                  </InputAdornment>
                                }
                                label="Amount"
                              />
                            </FormControl>
                            {/* <TextField
                              fullWidth
                              label="Add Income"
                              id="income"
                              type="number"
                              {...formik2.getFieldProps("income")}
                              error={
                                formik2.touched.income &&
                                Boolean(formik2.errors.income)
                              }
                            /> */}
                            {formik2.touched.income && formik2.errors.income ? (
                              <div style={{ color: "red" }}>
                                {formik2.errors.income}
                              </div>
                            ) : null}
                          </Box>
                        </Grid>
                      </Grid>
                      {/* <Button variant="contained" type="submit">
                        Next
                      </Button> */}
                      <Box
                        sx={{ display: "flex", flexDirection: "row", pt: 2 }}
                      >
                        <Button
                          // color="inherit"
                          disabled={activeStep === 0}
                          onClick={handleBack}
                          sx={{ mr: 1 }}
                          variant="contained"
                        >
                          Back
                        </Button>
                        <Box sx={{ flex: "1 1 auto" }} />
                        {/* {isStepOptional(activeStep) && (
                    <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                      Skip
                    </Button>
                  )} */}

                        <Button variant="contained" type="submit">
                          Calculate
                        </Button>
                      </Box>
                      {/* <button type="submit">Submit</button> */}
                    </form>
                  ) : // <>
                  //   <Grid container alignItems={"center"} mt={5}>
                  //     <Grid item xs={12} sm={12} md={12} mb={5}>
                  //       Income <span style={{ color: "red" }}>*</span>
                  //     </Grid>
                  //     <Grid item xs={12} sm={12} md={12} mb={5.5}>
                  //       <Box
                  //         sx={{
                  //           maxWidth: "100%",
                  //         }}
                  //       >
                  //         <TextField
                  //           fullWidth
                  //           label="Add Inncome"
                  //           id="income"
                  //           type="number"
                  //         />
                  //       </Box>
                  //     </Grid>
                  //   </Grid>
                  // </>
                  activeStep === 2 ? (
                    <>
                      <h1 style={{textAlign:'center', fontWeight:'bold'}}>Borrowing Power</h1>

                      <Grid container>
                        <Grid item sm={12} md={12} lg={6} pl={10}>
                          <h2>You can Borrow up to</h2>
                        </Grid>
                        <Grid item sm={12} md={12} lg={6} pl={10}>
                          <Typography
                            align="center"
                            variant="h4"
                            fontWeight={"bold"}
                          >
                            $100000
                          </Typography>
                        </Grid>
                        <Grid container>
                          <Grid item xs={12} sm={12} md={6} lg={4} p={3}>
                            <Typography>Payments</Typography>
                            <Box
                              component="span"
                              sx={{
                                display: "inline-block",
                                mx: "2px",
                                transform: "scale(3)",
                                color: "#557A46",
                              }}
                            >
                              •
                            </Box>
                            <span>$-946/month</span>
                          </Grid>
                          <Grid item xs={12} sm={12} md={6} lg={4} p={3}>
                            <Typography>Expenses</Typography>
                            <Box
                              component="span"
                              sx={{
                                display: "inline-block",
                                mx: "2px",
                                transform: "scale(3)",
                                color: "#64CCC5",
                              }}
                            >
                              •
                            </Box>
                            <span>$-946</span>
                          </Grid>
                          <Grid item xs={12} sm={12} md={6} lg={4} p={3}>
                            <Typography>Remaining</Typography>
                            <Box
                              component="span"
                              sx={{
                                display: "inline-block",
                                mx: "2px",
                                transform: "scale(3)",
                                color: "#EF9595",
                              }}
                            >
                              •
                            </Box>
                            <span>$-946</span>
                          </Grid>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={12} p={3}>
                          <p>
                            Based on 6.09% standard variable rate over 30 years.
                          </p>
                        </Grid>
                      </Grid>
                      <Box
                        sx={{ display: "flex", flexDirection: "row", pt: 2 }}
                      >
                        <Button
                          // color="inherit"
                          disabled={activeStep === 0}
                          onClick={handleBack}
                          sx={{ mr: 1 }}
                          variant="contained"
                        >
                          Back
                        </Button>
                        <Box sx={{ flex: "1 1 auto" }} />

                        <Button variant="contained" onClick={handleReset}>
                          Recalculate
                        </Button>
                      </Box>
                    </>
                  ) : (
                    <>Hello</>
                  )}
                  {/* <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                    <Button
                      // color="inherit"
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      sx={{ mr: 1 }}
                      variant="contained"
                    >
                      Back
                    </Button>
                    <Box sx={{ flex: "1 1 auto" }} />
                   

                    <Button
                      variant="contained"
                      onClick={
                        activeStep === steps.length - 1
                          ? handleReset
                          : handleNext
                      }
                    >
                      {activeStep === steps.length - 1 ? "Recalculate" : "Next"}
                    </Button>
                  </Box> */}
                </React.Fragment>
              )}
            </Card>
          </Grid>
        </Grid>

        {/* <CustomRadioButton
        // {...field}
        icon={<AddCircleIcon />}
        label="Couple"
        value="couple"
        selectedValue={selectedValue}
        onChange={handleChange}
      /> */}
      </Card>
      <Card>
        Hello
      </Card>
    </>
  );
}
