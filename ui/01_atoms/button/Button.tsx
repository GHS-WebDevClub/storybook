/**
 * Basic full width button component with variations
 * 
 * Created by Aubin C. Spitzer (@aubincspitzer) on 03/10/2022
 */

import styled from "styled-components";

export interface ButtonProps {
    label: string;
    onClick: () => void;
}

export const Button = ({ label, onClick }: ButtonProps) => {

    return(
        <Container onClick={onClick}>
            {label}
        </Container>
    );
}

const Container = styled.button`
    width: 100%;
    max-width: 30rem;
    height: 3rem;
    border-radius: 5px;
    border: none;
    outline: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    text-align: center;
    font-weight: 700;
    font-size: 1rem;
    cursor: pointer;
`;