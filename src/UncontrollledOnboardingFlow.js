import React, { useState } from 'react'

const UncontrollledOnboardingFlow = ({ children, onFinish }) => {

    // to save the data obtained from each onboarding step.
    const [onboardingData, setOnboardingData] = useState({});
    const [curIndex, setCurIndex] = useState(0);

    // using toArray because if their is only one child it will be an object and not an array.
    const currentChild = React.Children.toArray(children)[curIndex];
    const numberOfSteps = React.Children.toArray(children).length;

    const goToNext = () => {
        if (curIndex < numberOfSteps - 1) {
            setCurIndex(curIndex + 1)
        }
    }

    if (React.isValidElement(currentChild)) {
        return React.cloneElement(currentChild, { goToNext });
    }

    return currentChild;
}

export default UncontrollledOnboardingFlow;