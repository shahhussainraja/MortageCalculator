import React from "react";
import { Button } from "@chakra-ui/react";
import "./CustomCSS.css";
import { useNavigate } from "react-router-dom";

function StartGuide() {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex justify-center ">
      <div className="h-[80%] w-full sm:w-[75%] rounded-md mt-10 flex bg-[#fcfcfc] bg-GuideBackground bg-cover sm:bg-none">
        <div className="flex-[.6] flex items-start justify-center flex-col px-8 space-y-2">
          <p className="font-OpenSansRegular font-extrabold text-2xl lg:text-3xl text-white sm:text-[#006875] ">
            Home Loan Borrowing Power Calculator!<br></br>
          </p>
          <p className="font-OpenSansRegular font-medium text-sm lg:text-xl opacity-90 text-white sm:text-black">
            Wondering how much you can borrow for a home loan? Start your
            property journey by calculating your borrowing power estimate in a
            few simple steps{" "}
          </p>
          <p className="font-OpenSansRegular italic px-1 mt-2 opacity-80 text-xs lg:text-sm text-white sm:text-black">
            (Disclaimer: Estimates provided are not financial advice; consult
            with a qualified professional for personalized information.)
          </p>
          <Button
            mt={3}
            colorScheme="telegram"
            onClick={() => navigate("/Calculate")}
          >
            Get Started
          </Button>
          <Button
            mt={3}
            colorScheme="telegram"
            onClick={() => navigate("/calculation")}
          >
            Get Started New
          </Button>
        </div>
        <div className="hidden sm:block sm:flex-[.4] rounded-xl guideImage">
          {/* imge Container */}
        </div>
      </div>
    </div>
  );
}

export default StartGuide;
