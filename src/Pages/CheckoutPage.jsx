import { useState } from "react";
import Shipping from "../Components/Shipping";
import Payment from "../Components/Payment";
import Reviews from "../Components/Reviews";

export default function Stepper() {
  const [steps, setStep] = useState({
    stepsItems: ["SHIPPING", "PAYMENT", "REVIEW AND SUBMIT"],
    currentStep: 1,
  });

  const handleStepClick = (stepIndex) => {
    setStep((prev) => ({
      ...prev,
      currentStep: stepIndex + 1,
    }));
  };

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-0">
      {/* Stepper UI */}
      <ul
        aria-label="Steps"
        className="items-center text-gray-600 font-medium md:flex"
      >
        {steps.stepsItems.map((item, idx) => {
          const isActive = steps.currentStep === idx + 1;
          const isComplete = steps.currentStep > idx + 1;

          return (
            <li
              key={idx}
              onClick={() => handleStepClick(idx)}
              className="flex gap-x-3 md:flex-col md:flex-1 md:gap-x-0 cursor-pointer"
              aria-current={isActive ? "step" : false}
            >
              <div className="flex flex-col items-center md:flex-row md:flex-1">
                <hr
                  className={`w-full border hidden md:block ${
                    idx === 0
                      ? "border-none"
                      : isComplete || isActive
                      ? "border-indigo-600"
                      : ""
                  }`}
                />
                <div
                  className={`w-8 h-8 rounded-full border-2 flex-none flex items-center justify-center ${
                    isComplete
                      ? "bg-indigo-600 border-indigo-600"
                      : isActive
                      ? "border-indigo-600"
                      : ""
                  }`}
                >
                  {isComplete ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  ) : isActive ? (
                    <span className="w-2.5 h-2.5 rounded-full bg-indigo-600"></span>
                  ) : null}
                </div>
                <hr
                  className={`h-12 border md:w-full md:h-auto ${
                    idx + 1 === steps.stepsItems.length
                      ? "border-none"
                      : isComplete
                      ? "border-indigo-600"
                      : ""
                  }`}
                />
              </div>
              <div className="h-8 flex justify-center items-center md:mt-3 md:h-auto">
                <h3 className={`text-sm ${isActive ? "text-indigo-600" : ""}`}>
                  {item}
                </h3>
              </div>
            </li>
          );
        })}
      </ul>

      {/* Step UI Content */}
      <div className=" mt-8 p-4">
        {steps.currentStep === 1 && (
          <div>
         <Shipping/>
          </div>
        )}

        {steps.currentStep === 2 && (
          <div>
           <Payment/>
          </div>
        )}

        {steps.currentStep === 3 && (
          <div>
        <Reviews/>
          </div>
        )}

      
      </div>
    </div>
  );
}
