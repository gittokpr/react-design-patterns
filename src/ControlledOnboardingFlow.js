import React, { useState } from 'react'

const ControllledOnboardingFlow = ({ children, onFinish, curIndex, onNext }) => {


    // using toArray because if their is only one child it will be an object and not an array.
    const currentChild = React.Children.toArray(children)[curIndex];

    const goToNext = stepData => {
        onNext(stepData);
    }

    if (React.isValidElement(currentChild)) {
        return React.cloneElement(currentChild, { goToNext });
    }

    return currentChild;
}

export default ControllledOnboardingFlow;