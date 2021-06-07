import React from 'react'
import styled from 'styled-components'
import Section from './Section';

function Home() {
    return (
        <Container>
            <Section
             title="Model 3"
             description = "1% Company Car Tax. Learn More"
             backgroundImg="model-3.jpg"
             leftBtnText = "Custom order"
             rightBtnText = "Existing inventory"   
             />
            <Section
            title="Model S"
            description = "1% Company Car Tax. Learn More"
            backgroundImg="model-s.jpg"
            leftBtnText = "Custom order"
            rightBtnText = "Existing inventory"  
            />
            <Section  
            title="Solar and Powerwall"
            description = "Power Everything"
            backgroundImg="solar-panel.jpg"
            leftBtnText = "Learn More"
            
            />
            <Section  
            title="Model X"
            description = "1% Company Car Tax. Learn More"
            backgroundImg="model-x.jpg"
            leftBtnText = "Custom order"
            rightBtnText = "Existing inventory"  
            />
            <Section 
             title="Model Y"
             description = "   "
             backgroundImg="model-y.jpg"
             leftBtnText = "Custom order"
             rightBtnText = "Existing inventory"  
             />
             <Section 
             title="Accessories"
             description = "    "
             backgroundImg="accessories.jpg"
             leftBtnText = "Shop Now"
            
             />
            
            
            
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh ;
    z-index: 10;
    `
