import { useState } from 'react';

import './style.css';

const StepForm = (props) => {
	const [activeStep, setActiveStep] = useState(0);
	const { steps, Finish, alignment } = props;
	  
	const handleStepChange = (activeStep) => setActiveStep(activeStep);
	const nextStep = () => { if (activeStep < steps.length - 1) setActiveStep(activeStep + 1) };
	const previousStep = () => { if (activeStep > 0) setActiveStep(activeStep - 1) };
	  
	  const stepIndicators = steps.map((step, i) => {
		return (
		  <div className="stepper-inner" onClick={() => handleStepChange(i)} key={i}>
			<div className={`stepper-number ${activeStep === i && 'active'}`}>
				<span>{i+1}</span>
				<div className="line-linkage"></div>
			</div>
  
			{i !== steps.length && <div className="stepper-label"> {step.label} </div>}
		  </div>
		 );
	  });
	  
	  return (
		<div className="step-form-container">
			<div className={alignment ? 'stepper-indicator' : "stepper-indicator vertical"}>
				{stepIndicators}
			</div>

			<div className="stepper-steps">
				{steps[activeStep].component}
			</div>
			
			<div className="stepper-actions">
				<button onClick={() => previousStep()}> Previous </button>
				{ activeStep === steps.length - 1 ?
					<button disabled={!!steps[activeStep].exitValidation} onClick={() => Finish()}> Submit </button> : 
					<button disabled={!!steps[activeStep].exitValidation} onClick={() => nextStep()}> Next </button> }
			</div>
		</div>
	  )
  }
export default StepForm;

		
 
