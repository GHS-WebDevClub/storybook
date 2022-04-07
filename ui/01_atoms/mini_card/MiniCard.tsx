/**
 * MiniCard component from Iss10
 * 
 * Created by Aubin C. Spitzer (@aubincspitzer) on 03/23/2022
 */

import styled from "styled-components";
import { SvgIconComponent } from "@mui/icons-material"
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import WarningIcon from '@mui/icons-material/Warning';
import ErrorIcon from '@mui/icons-material/Error';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export interface MiniCardProps {
    title: string,
    subtitle?: string,
    secSubtitle?: string,
    Icon?: "verified" | "success" | "error" | "warn" | SvgIconComponent,
    action?: () => void,
    iconColor?: string;
}

export const MiniCard = ({ title, subtitle, secSubtitle, Icon, action, iconColor }: MiniCardProps) => {

    function getIcon() {
        if (typeof Icon !== "string") return Icon ? <Icon /> : ""

        switch (Icon) {
            case "verified": return <VerifiedUserIcon />
            case "warn": return <WarningIcon />
            case "error": return <ErrorIcon />
            case "success": return <CheckCircleIcon />
        }
    }

    return (
        <Base iconColor={iconColor} Icon={Icon} onClick={() => action ? action() : ""}>
            <p><span>{title}</span> {subtitle}</p>
            <Container>
                <p>{secSubtitle}</p>
                {getIcon()}
            </Container>
        </Base>
    );
}

const Base = styled.div<{ iconColor?: string, Icon?: string | SvgIconComponent }>`
    height: 3rem;
    background-color: #3a3a3c;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    color: #f2f2f7;
    max-width: 50rem;
    padding: 0 1rem;
    span {
        font-weight: 700;
        font-size: 1rem;
        padding-right: 0.5rem;
    }
    p {
        font-weight: 500;
        font-size: 0.8rem;
    }
    svg {
        padding-left: 0.5rem;
        height: 1.25rem;
        color: ${(props) => {
        if (props.iconColor) return props.iconColor;

        switch (props.Icon) {
            case "verified": return "#30D158";
            case "error": return "#FF3B44";
            case "warn": return "#DFC84E";
            case "success": return "#30D158";
            default: return "#f2f2f7";
        }
    }}
    }
`;

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;