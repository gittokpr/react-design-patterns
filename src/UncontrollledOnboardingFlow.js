import React, { useState } from 'react'

const UncontrollledOnboardingFlow = ({ children, onFinish }) => {

    // to save the data obtained from each onboarding step.
    const [onboardingData, setOnboardingData] = useState({});
    const [curIndex, setCurIndex] = useState(0);

    // using toArray because if their is only one child it will be an object and not an array.
    const currentChild = React.Children.toArray(children)[curIndex];

    const goToNext = stepData => {
        const nextIndex = curIndex + 1;

        const updatedData = {
            ...onboardingData,
            ...stepData
        };

        console.log(updatedData);

        if (nextIndex < children.length) {
            setCurIndex(nextIndex);
        } else {
            onFinish(updatedData);
        }

        setOnboardingData(updatedData);
    }

    if (React.isValidElement(currentChild)) {
        return React.cloneElement(currentChild, { goToNext });
    }

    return currentChild;
}

export default UncontrollledOnboardingFlow;