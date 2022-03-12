/* eslint-disable react-hooks/rules-of-hooks */
import { Icon, Link, Stack, Tooltip, useColorModeValue } from "@chakra-ui/react";
import { SiFacebook } from 'react-icons/si';
import { FaGooglePlus } from 'react-icons/fa';
import { ImLinkedin } from 'react-icons/im';

import { colors } from '../Theme';

const icons = {
    facebook: SiFacebook,
    googleplus: FaGooglePlus,
    linkedin: ImLinkedin,
};

const LinkIcon = ({ index, color, onHoverColor, url, label, icon }) => (
	<Tooltip
		label={label}
		aria-label={`${label}-tooltip`}
		key={`link-${index}`}
	>
		<Link
			aria-label={`Open link to ${url}`}
			display='inline-block'
			href={url}
			isExternal
            style={{ 
                margin: '0 1rem 0 0',
                width: '3.2rem',
                height: '3.2rem' 
            }}
		>
			<Icon
				as={icons[icon]}
				fontSize='xl'
				color={color}
				_hover={{ color: onHoverColor }}
                w={51}
                h={51}
                borderRadius="100%"
			/>
		</Link>
	</Tooltip>
);

const LinkIconBar = ({ links, color, onHoverColor, ...props }) => {
    const iconColor = color || useColorModeValue('#47546D', colors.secondary.light);
    const hoverColor = onHoverColor || useColorModeValue(colors.secondary.light, colors.secondary.dark);

    return (
        <Stack
            direction="row"
            justify="center"
            // mb="1.5rem"
            style={{ marginBottom: '1.5rem' }}
            {...props}
        >
            {links.map((link, index) => (
                <LinkIcon 
                    key={link.label}
                    index={index}
                    color={iconColor}
                    onHoverColor={hoverColor}
                    {...link}
                />
            ))}
        </Stack>
    );
};

export default LinkIconBar;