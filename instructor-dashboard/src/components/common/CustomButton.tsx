

import { Opacity } from "@mui/icons-material";
import { Button, fontSize, fontWeight, padding, textTransform, width } from "@pankod/refine-mui";

import { CustomButtonProps } from "src/interfaces/common";

const CustomButton = ({ type, title, backgroundColor, color, fullWidth, icon, handleClick}: CustomButtonProps) => {
    return(
        <Button
        sx={{flex: fullWidth ? 1 : 'unset',
        padding: '10px 15px',
        width: fullWidth ? '100%' :
        'fit-content',
        minWidth: 130,
        backgroundColor,
        marginBottom: '15px',
        color,
        fontSize: 16,
        fontWeight: 600,
        gap: '10px',
        textTransform: 'capitalize',
        '&:hover': {
        Opacity: 0.9,
        backgroundColor
    }
    }}
    onClick={handleClick}
        >
            {icon}
            {title}
        </Button>
    )
}

export default CustomButton