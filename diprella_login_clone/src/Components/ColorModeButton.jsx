import { IconButton, Tooltip, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

const ColorModeButton = ({ mr }) => {
    const { toggleColorMode } = useColorMode();
    const SwitchIcon = useColorModeValue(FaMoon, FaSun);
    const nextMode = useColorModeValue("dark", "light");

    return (
        <Tooltip
            label={`Toggle ${nextMode} mode`}
            aria-label={`Toggle ${nextMode} mode`}
        >
            <IconButton 
                size="md"
                fontSize="lg"
                aria-label={`Toggle ${nextMode} mode`}
                variant="ghost"
                color="current"
                onClick={toggleColorMode}
                icon={<SwitchIcon />}
                style={{ marginRight: mr }}
            />
        </Tooltip>
    );
};

export default ColorModeButton;