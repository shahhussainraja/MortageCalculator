import {
  Card,
  CircularProgress,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Tooltip,
  useMediaQuery,
} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import Typography from "@mui/material/Typography";
import { useFormik } from "formik";
import * as React from "react";
import * as Yup from "yup";
import "./Button.css";
import "./fonts.css";
import Person2Icon from "@mui/icons-material/Person2";
import WcIcon from "@mui/icons-material/Wc";
import { useState } from "react";
import mortageCapacity from "../../utility/mortageCapacity";
import { useEffect } from "react";
import { motion } from "framer-motion";
import InfoIcon from "@mui/icons-material/Info";

const steps = ["Personal Information", "Gross Income", "Borrow Capacity"];

export default function MortageCalaculator() {
  // formik

  const validationSchema = Yup.object({
    // Define validation rules for your form fields here
    maritalStatus: Yup.string().required("Marital Status is required"),
    dependents: Yup.string()
      .required("Dependents is required")
      .min(1, "Dependents must be at least 1"),
  });

  const [form1, setForm1] = React.useState({});
  const [income, setInccome] = useState();
  const [bCapacity, setBCapacity] = useState(0);
  const [loading, setLoading] = useState(false);
  const [information, setInformation] = useState("Hello g");

  const [tax, setTax] = useState(0);

  const handleSubmit = (values) => {
    // Handle form submission here
    console.log("Form submitted with values:", values);
    setForm1(values);
    // console.log("Form submitted with values in state:", form1);
    handleNext();
  };

  // Inside your component function...
  const formik = useFormik({
    initialValues: {
      maritalStatus: "", // Set initial values for your form fields
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

  // const handleSubmit2 = (values) => {
  //   // Handle form submission here
  //   console.log("Form submitted with values:", values);
  // };

  // Inside your component function...
  const formik2 = useFormik({
    initialValues: {
      income: "",
    },
    validationSchema: validationSchema2,
    onSubmit: (values) => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 3500);
      handleNext();
      // Handle form submission here

      // console.log(values);
      // console.log(form1?.maritalStatus, form1?.dependents, values.income);

      // setTimeout(() => {
      setInccome(values.income);

      if (values.income >= 0 && values.income <= 18200) {
        setTax(0);
      } else if (values.income >= 18201 && values.income <= 45000) {
        setTax(19);
      } else if (values.income >= 45001 && values.income <= 120000) {
        setTax(32.5);
      } else if (values.income >= 120001 && values.income <= 180000) {
        setTax(37);
      } else if (values.income >= 180001) {
        setTax(45);
      } else {
        setTax(0);
      }

      setBCapacity(
        mortageCapacity(form1?.maritalStatus, form1?.dependents, values.income)
      );
    },
  });

  const [loan, setLoan] = useState(0);
  const [minLoan, setMinLoan] = useState(0);
  const [payments, setPayments] = useState(0);
  useEffect(() => {
    // console.log("tax is ", tax);

    const BC = income / 12 - (income * tax) / 1200 - bCapacity;
    // console.log("Hem Value is", bCapacity);
    // console.log("mortage capacity is", BC);
    setPayments(BC);

    const Loan = Math.round(
      (12 / 0.0584) * (BC * (1 - Math.pow(1 + 0.0584 / 12, -360)))
    );
    const MP = Math.round(
      (Loan * (0.0584 / 12)) / (1 - Math.pow(1 + 0.0584 / 12, -360))
    );
    console.log("payent hoo me", MP);

    // console.log("Im loan", Loan);
    setLoan(Loan);
    // const Loan = BC * 360;
    // const abc = Loan + Loan * 0.05;
    // console.log("loan is ", abc);
  }, [bCapacity]);

  //Calculate minimum loan
  useEffect(() => {
    const MinLoan = loan - 0.3 * loan;
    setMinLoan(MinLoan);
    const text = (
      <p style={{fontSize:'14px', padding:"4px"}}>  
        Important Information: Estimate is based on an annual household gross
        income of ${income}, household expenses are ${bCapacity} per month and a
        household with {form1?.dependents} occupant and includes any existing
        lending. All financial figures provided are estimates only and do not
        take into account your full financial situation. Nothing provided in
        this tool constitutes financial advice and should not be taken as such.
        These are not to be relied on as true indication of your borrowing
        capacity, nor is it a quote or indication of pre-qualification for any
        credit product. The estimate presented does not constitute financial
        advice or a recommendation and is not intended to constitute an offer or
        invitation in relation to the issue, sale or purchase of any financial
        products
      </p>
    );

    setInformation(text);
  }, [loan]);
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

  const handleReset = () => {
    console.log("mil gyi capacity", bCapacity);
    setActiveStep(0);
    formik.resetForm();
    formik2.resetForm();
  };

  const isSmallScreen = useMediaQuery("(max-width:900px)");
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <Card
          sx={{
            marginTop: 2,
            borderRadius: 2,
            marginX: "auto",
            backgroundColor: "#f8f8f8",
            maxWidth: "1200px",
            // maxHeight: "500px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Grid
            container
            padding={4}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Grid item xs={12} md={2}>
              <Stepper
                orientation={isSmallScreen ? "horizontal" : "vertical"}
                sx={
                  isSmallScreen ? { minHeight: 30, mb: 3 } : { minHeight: 350 }
                }
                activeStep={activeStep}
              >
                {steps.map((label, index) => {
                  const stepProps = {};
                  const labelProps = {};

                  if (isStepSkipped(index)) {
                    stepProps.completed = false;
                  }

                  if (activeStep === 2) {
                    stepProps.completed = true;
                  }

                  return (
                    <Step key={label} {...stepProps}>
                      <StepLabel
                        {...labelProps}
                        StepIconProps={{
                          style: {
                            color: "#006875",
                          },
                        }}
                      >
                        <h1>{label}</h1>
                      </StepLabel>
                    </Step>
                  );
                })}
              </Stepper>
            </Grid>

            <Grid item xs={12} md={10}>
              {" "}
              <Card sx={{ padding: 5, minHeight: "400px" }}>
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
                  // Form 1
                  <React.Fragment>
                    {activeStep === 0 ? (
                      <form onSubmit={formik.handleSubmit}>
                        {/* Marital Status */}
                        <Grid
                          container
                          alignItems={"center"}
                          sx={{ maxHeight: "180px" }}
                        >
                          <Grid
                            item
                            textAlign={"center"}
                            xs={12}
                            sm={12}
                            md={12}
                          >
                            <span
                              style={{ fontWeight: "bolder", fontSize: "30px" }}
                              className="text-color"
                            >
                              Borrowing power
                            </span>
                          </Grid>
                          <Grid
                            item
                            sm={12}
                            md={12}
                            mb={1}
                            sx={{ fontSize: "18px" }}
                          >
                            The Loan for <span style={{ color: "red" }}>*</span>
                          </Grid>
                        </Grid>
                        <div className="toggle-button">
                          <button
                            style={{
                              // borderTopLeftRadius: 50,
                              // borderBottomLeftRadius: 50,
                              width: "auto",
                              height: "auto",
                            }}
                            className={
                              formik.values.maritalStatus === "Single"
                                ? "active"
                                : ""
                            }
                            onClick={() =>
                              formik.setFieldValue("maritalStatus", "Single")
                            }
                            type="button"
                          >
                            <Person2Icon /> Single
                          </button>
                          <button
                            style={{
                              // borderTopRightRadius: 50,
                              // borderBottomRightRadius: 50,
                              width: "auto",
                              height: "auto",
                            }}
                            className={
                              formik.values.maritalStatus === "Couple"
                                ? "active"
                                : ""
                            }
                            onClick={() =>
                              formik.setFieldValue("maritalStatus", "Couple")
                            }
                            type="button"
                          >
                            <WcIcon /> Couple
                          </button>
                        </div>
                        {formik.touched.maritalStatus &&
                          formik.errors.maritalStatus && (
                            <div className="error" style={{ color: "red" }}>
                              {formik.errors.maritalStatus}
                            </div>
                          )}

                        {/* Dependents */}
                        <Grid container alignItems={"center"} mt={2}>
                          <Grid
                            item
                            sm={12}
                            md={12}
                            mb={2.5}
                            mt={1}
                            sx={{ fontSize: "20px" }}
                          >
                            No. of Dependents{" "}
                            <span style={{ color: "red" }}>*</span>
                          </Grid>
                        </Grid>
                        <Box sx={{ minWidth: 120 }}>
                          <FormControl
                            sx={{
                              minWidth: "500px",
                              "& .Mui-focused": {
                                color: "#006875",
                              },
                              "& .MuiOutlinedInput-root": {
                                "&.Mui-focused fieldset": {
                                  borderColor: "#006875",
                                },
                              },
                            }}
                          >
                            <InputLabel id="demo-simple-select-label">
                              Dependents
                            </InputLabel>
                            <Select
                              sx={{
                                fontSize: "18px",
                              }}
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              name="dependents"
                              value={formik.values.dependents}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              label="Dependents"
                            >
                              <MenuItem value="">Select Dependents</MenuItem>
                              <MenuItem value={"0"}>0</MenuItem>
                              <MenuItem value={"1"}>1</MenuItem>
                              <MenuItem value={"2"}>2</MenuItem>
                              <MenuItem value={"3"}>3</MenuItem>
                              <MenuItem value={"4"}>4</MenuItem>
                              <MenuItem value={"5"}>5</MenuItem>
                              <MenuItem value={"6"}>6</MenuItem>
                              <MenuItem value={"7"}>7</MenuItem>
                              <MenuItem value={"8"}>8</MenuItem>
                              <MenuItem value={"9+"}>9+</MenuItem>
                              {/* <MenuItem value={10}>10</MenuItem> */}

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

                        <Box
                          sx={{ display: "flex", flexDirection: "row", pt: 2 }}
                        >
                          <Button
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
                            sx={{
                              backgroundColor: "#006875",
                              color: "#fff",
                              "&:hover": {
                                backgroundColor: "#00555d",
                              },
                            }}
                            type="submit"
                          >
                            Next
                          </Button>
                        </Box>
                        {/* <button type="submit">Submit</button> */}
                      </form>
                    ) : activeStep === 1 ? (
                      // Form 2
                      <form onSubmit={formik2.handleSubmit}>
                        <Grid
                          container
                          alignItems="center"
                          mt={1}
                          sx={{ minHeight: "180px" }}
                        >
                          <Grid
                            item
                            textAlign={"center"}
                            xs={12}
                            sm={12}
                            md={12}
                            mb={5}
                          >
                            <span
                              style={{ fontWeight: "bolder", fontSize: "30px" }}
                              className="text-color"
                            >
                              Borrowing power
                            </span>
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            sm={12}
                            md={12}
                            mb={1}
                            sx={{ fontSize: "20px" }}
                          >
                            Annual income before tax{" "}
                            <span style={{ color: "red" }}>*</span>
                          </Grid>
                          <Grid item xs={12} sm={12} md={12} mb={5.5}>
                            <Box sx={{ maxWidth: "100%" }}>
                              <FormControl
                                sx={{
                                  "& .Mui-focused": {
                                    color: "#006875",
                                  },
                                  "& .MuiOutlinedInput-root": {
                                    "&.Mui-focused fieldset": {
                                      borderColor: "#006875",
                                    },
                                  },
                                  m: 1,
                                }}
                                className="w-[100%] sm:w-[500px]"
                                // fullWidth
                              >
                                <InputLabel htmlFor="outlined-adornment-amount">
                                  Amount
                                </InputLabel>
                                <OutlinedInput
                                  sx={{
                                    fontSize: "18px",
                                  }}
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

                              {formik2.touched.income &&
                              formik2.errors.income ? (
                                <div style={{ color: "red" }}>
                                  {formik2.errors.income}
                                </div>
                              ) : null}
                            </Box>
                          </Grid>
                        </Grid>

                        <Box
                          sx={{ display: "flex", flexDirection: "row", pt: 2 }}
                        >
                          <Button
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{
                              mr: 1,
                              backgroundColor: "#006875",
                              color: "#fff",
                              "&:hover": {
                                backgroundColor: "#00555d",
                              },
                            }}
                            variant="contained"
                          >
                            Back
                          </Button>
                          <Box sx={{ flex: "1 1 auto" }} />

                          <Button
                            variant="contained"
                            sx={{
                              backgroundColor: "#006875",
                              color: "#fff",
                              "&:hover": {
                                backgroundColor: "#00555d",
                              },
                            }}
                            type="submit"
                          >
                            Calculate
                          </Button>
                        </Box>
                        {/* <button type="submit">Submit</button> */}
                      </form>
                    ) : activeStep === 2 ? (
                      // Form 3
                      <>
                        {loading ? (
                          <>
                            <Grid
                              container
                              sx={{
                                display: "flex",
                                justifyContent: "start",
                                alignItems: "center",
                                height: "300px",
                              }}
                            >
                              <Grid item sx={{ margin: "auto" }}>
                                <CircularProgress
                                  disableShrink
                                  sx={{ color: "#00555d" }}
                                />
                              </Grid>
                            </Grid>
                          </>
                        ) : (
                          <>
                            {loan < 0 ? (
                              <>
                                <Grid
                                  container
                                  sx={{
                                    minHeight: "180px",
                                    display: "flex",
                                    justifyContent: "center",
                                  }}
                                >
                                  <Grid item sx={{ margin: "auto" }}>
                                    <p className="font-bold text-lg">
                                      We were unable to calculate a borrowing
                                      capacity for you based on the information
                                      provided.
                                    </p>
                                  </Grid>
                                </Grid>
                              </>
                            ) : (
                              <>
                                <Grid container sx={{ minHeight: "180px" }}>
                                  <Grid
                                    item
                                    sm={12}
                                    md={12}
                                    lg={6}
                                    pl={10}
                                    mb={5}
                                  >
                                    <p
                                      style={{
                                        fontWeight: "bolder",
                                        fontSize: "28px",
                                      }}
                                    >
                                      You can Borrow up to
                                    </p>
                                  </Grid>
                                  <Grid item sm={12} md={12} lg={6} pl={10}>
                                    <h2
                                      style={{
                                        fontWeight: "bolder",
                                        fontSize: "28px",
                                        letterSpacing: 1,
                                      }}
                                    >
                                      $ {parseInt(minLoan).toLocaleString()} - ${"  "}
                                      {parseInt(loan).toLocaleString()}{" "}
                                    </h2>
                                  </Grid>
                                  <Grid container>
                                    <Grid
                                      item
                                      xs={12}
                                      sm={12}
                                      md={6}
                                      lg={4}
                                      p={3}
                                    >
                                      <p
                                        style={{
                                          fontSize: "18px",
                                        }}
                                      >
                                        Expected re-payments
                                      </p>
                                      <Box
                                        component="span"
                                        sx={{
                                          display: "flex",
                                          flexDirection: "row",
                                          gap: 1,
                                          alignItems: "center",
                                        }}
                                      >
                                        <Box
                                          component="span"
                                          sx={{
                                            display: "inline-block",
                                            mx: "2px",
                                            mt: "5px",
                                            transform: "scale(5)",
                                            color: "#557A46",
                                          }}
                                        >
                                          •
                                        </Box>
                                        <span className="text-lg">
                                          ${payments.toFixed(2)}/month
                                        </span>
                                      </Box>
                                    </Grid>
                                    <Grid
                                      item
                                      xs={12}
                                      sm={12}
                                      md={6}
                                      lg={4}
                                      p={3}
                                    >
                                      <p
                                        style={{
                                          fontSize: "18px",
                                          display:"flex",
                                          alignItems: "baseline",
                                        }}
                                      >
                                        Expenses <p style={{fontSize:"13px",opacity:"70%",fontStyle:"italic",paddingLeft:"2px"}}>as per HEM</p>
                                      </p>
                                      <Box
                                        component="span"
                                        sx={{
                                          display: "flex",
                                          flexDirection: "row",
                                          gap: 1,
                                          alignItems: "center",
                                        }}
                                      >
                                        <Box
                                          component="span"
                                          sx={{
                                            display: "inline-block",
                                            mx: "2px",
                                            mt: "5px",
                                            transform: "scale(5)",
                                            color: "#64CCC5",
                                          }}
                                        >
                                          •
                                        </Box>
                                        <span className="text-lg">
                                          ${bCapacity}
                                        </span>
                                      </Box>
                                    </Grid>
                                    <Grid
                                      item
                                      xs={12}
                                      sm={12}
                                      md={6}
                                      lg={4}
                                      p={3}
                                    >
                                      <p
                                        style={{
                                          fontSize: "18px",
                                        }}
                                      >
                                        Duration of the loan
                                      </p>
                                      <Box
                                        component="span"
                                        sx={{
                                          display: "flex",
                                          flexDirection: "row",
                                          gap: 1,
                                          alignItems: "center",
                                        }}
                                      >
                                        <Box
                                          component="span"
                                          sx={{
                                            display: "inline-block",
                                            mx: "2px",
                                            mt: "5px",
                                            transform: "scale(5)",
                                            color: "#EF9595",
                                          }}
                                        >
                                          •
                                        </Box>
                                        <span className="text-lg">
                                          360 Months
                                        </span>
                                      </Box>
                                    </Grid>
                                  </Grid>
                                  <Grid
                                    item
                                    display={"flex"}
                                    xs={12}
                                    sm={12}
                                    md={6}
                                    lg={12}
                                    p={3}
                                  >
                                    <p className="font-bold opacity-80">
                                      Based on 5.84% standard variable rate over
                                      30 years.
                                    </p>

                                    <Tooltip title={information} arrow>
                                      <div className="icon-container">
                                        <InfoIcon color="#7D7C7C" />
                                      </div>
                                    </Tooltip>
                                  </Grid>
                                </Grid>
                              </>
                            )}

                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "row",
                                pt: 2,
                              }}
                            >
                              <Button
                                // color="inherit"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{
                                  mr: 1,
                                  backgroundColor: "#006875",
                                  color: "#fff",
                                  "&:hover": {
                                    backgroundColor: "#00555d", // Customize the hover color as needed
                                  },
                                }}
                                variant="contained"
                              >
                                Back
                              </Button>
                              <Box sx={{ flex: "1 1 auto" }} />

                              <Button
                                variant="contained"
                                sx={{
                                  backgroundColor: "#006875",
                                  color: "#fff",
                                  "&:hover": {
                                    backgroundColor: "#00555d", // Customize the hover color as needed
                                  },
                                }}
                                onClick={handleReset}
                              >
                                Recalculate
                              </Button>
                            </Box>
                          </>
                        )}
                      </>
                    ) : (
                      <></>
                    )}
                  </React.Fragment>
                )}
              </Card>
            </Grid>
          </Grid>
        </Card>
      </motion.div>
    </>
  );
}
