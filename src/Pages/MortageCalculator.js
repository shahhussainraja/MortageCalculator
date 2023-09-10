import {
  Card,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
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
import "./ToggleButton.css";
import "./fonts.css";
import Person2Icon from "@mui/icons-material/Person2";
import WcIcon from "@mui/icons-material/Wc";

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

  const handleReset = () => {
    setActiveStep(0);
  };

  const isSmallScreen = useMediaQuery("(max-width:900px)");
  return (
    <>
      <Card
        sx={{
          borderRadius: 5,
          margin: 1,
          bgcolor: "#F0F0F0",
          maxWidth: "1440px",
        }}
      >
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
                    <StepLabel
                      {...labelProps}
                      StepIconProps={{
                        style: {
                          color: "#006875",
                        },
                      }}
                    >
                      {label}
                    </StepLabel>
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
                        <Grid
                          item
                          textAlign={"center"}
                          xs={12}
                          sm={12}
                          md={12}
                          mb={5}
                        >
                          <span
                            style={{ fontWeight: "bold", fontSize: "25px" }}
                          >
                            Mortage Calculator
                          </span>
                        </Grid>
                        <Grid item sm={12} md={12} mb={2.5}>
                          Choose Martial Status{" "}
                          <span style={{ color: "red" }}>*</span>
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
                            formik.values.maritalStatus === "single"
                              ? "active"
                              : ""
                          }
                          onClick={() =>
                            formik.setFieldValue("maritalStatus", "single")
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
                            formik.values.maritalStatus === "couple"
                              ? "active"
                              : ""
                          }
                          onClick={() =>
                            formik.setFieldValue("maritalStatus", "couple")
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
                      <Grid container alignItems={"center"}>
                        <Grid item sm={12} md={12} mb={2.5} mt={2.5}>
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
                    <form onSubmit={formik2.handleSubmit}>
                      <Grid container alignItems="center" mt={1}>
                        <Grid
                          item
                          textAlign={"center"}
                          xs={12}
                          sm={12}
                          md={12}
                          mb={5}
                        >
                          <span
                            style={{ fontWeight: "bold", fontSize: "25px" }}
                          >
                            Mortage Calculator
                          </span>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} mb={5}>
                          Income <span style={{ color: "red" }}>*</span>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} mb={5.5}>
                          <Box sx={{ maxWidth: "100%" }}>
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
                                m: 1,
                              }}
                              // fullWidth
                            >
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

                            {formik2.touched.income && formik2.errors.income ? (
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
                    <>
                      <h1 style={{ textAlign: "center", fontWeight: "bold" }}>
                        Borrowing Power
                      </h1>

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
                  ) : (
                    <>Hello</>
                  )}
                </React.Fragment>
              )}
            </Card>
          </Grid>
        </Grid>
      </Card>
    </>
  );
}
