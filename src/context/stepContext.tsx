import React from 'react';

export interface StepContextType {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

// Initialize the context with undefined. This is okay because we'll always provide a value in our Provider.
const StepContext = React.createContext<StepContextType | undefined>(undefined);

export default StepContext;
