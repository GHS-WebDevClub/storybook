/**
 * Issue #6
 * IconButton
 * 
 * Uses MaterialUI Icon Component library (https://mui.com/components/material-icons/)
 * 
 * Created by Aubin C. Spitzer (@aubincspitzer) on 03/22/2022
 */

import styled from "styled-components";
import SendIcon from '@mui/icons-material/Send';
import AddIcon from '@mui/icons-material/Add';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import { SvgIconComponent } from "@mui/icons-material";
import CircularProgress from '@mui/material/CircularProgress';

export interface IconButtonProps {
    primary?: boolean;
    Icon?: SvgIconComponent;
    animationCallback?: () => Promise<void>;
    status: "ready" | "loading" | "fail" | "success";
    disabled?: boolean;
}

export const IconButton = ({ primary, disabled, status, animationCallback, Icon }: IconButtonProps) => {


    function getContent() {
        switch (status) {
            case "loading": return <CircularProgress style={{ width: "45%", height: "45%" }} color="inherit" />;
            case "fail": return <IconContainer onAnimationEnd={animationCallback}><CancelOutlinedIcon /></IconContainer>;
            case "success": return <IconContainer onAnimationEnd={animationCallback}><CheckCircleOutlinedIcon /> </IconContainer>;
            case "ready": return Icon ? <Icon /> : (primary ? <SendIcon /> : <AddIcon />);
        }
    }

    return (
        <Base disabled={disabled} primary={primary} status={status}>
            {getContent()}
        </Base>
    );
}

const Base = styled.button<{ primary?: boolean, status?: "fail" | "success" | "loading" | "ready" }>`
    border: none;
    outline: none;    

    height: ${(props) => props.primary ? "3rem" : "2rem"};
    width: ${(props) => props.primary ? "3rem" : "2rem"};
    background: ${(props) => {
        if (props.status == "fail") return "#FF3B44";

        return props.primary ? "#30D158" : "#3A3A3C";
    }};
    border-radius: 5px;
    cursor: pointer;

    color: #f2f2f7;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    transition: 300ms;
    padding: 0;

    svg {
        ${(props) => props.status == "loading" ? "color: #f2f2f7;" : ""}
    }

    ${(props) => { 
        if(props.disabled) return "opacity: 75%; cursor: default;"
     }}
`;

const IconContainer = styled.div<{ status?: "ready" | "fail" | "success" | "loading" }>`
    animation: fadeInAnimation 2s;
    @keyframes fadeInAnimation {
        0% { opacity: 0; }
        15%   { opacity: 1; }
        85% { opacity: 1; }
        100% { opacity: 0; }
    }

`;