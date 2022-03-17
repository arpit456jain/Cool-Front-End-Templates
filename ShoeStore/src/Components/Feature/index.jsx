import React from 'react';
import { FeatureContainer, FeatureButton } from "./FeatureElements";

const Feature = () => {
    return (
        <FeatureContainer>
            <h1>Order of the day</h1>
            <p><i>Get One For Yourself</i></p>

            <FeatureButton>Go</FeatureButton>
        </FeatureContainer>
    )
}

export default Feature
