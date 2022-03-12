import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import {
	Button,
	Heading,
	// Image,
	Text,
	Stack,
	useColorModeValue,
	useToast,
} from '@chakra-ui/react';

// import line from './Assets/logo_line.svg';
import Login from './Components/Form';
import LinkIconBar from './Components/LinkIconBar';
import links from './Data/footerLinks';
import { colors } from './Theme';

const SignUp = ({ bg, textColor }) => {
	const toast = useToast();

	return (
		<Stack
			className='form-container sign-up-container'
			display={{ md: 'block', base: 'none !important' }}
			bg={bg}
			opacity={{ md: '0', base: 'initial' }}
			left='0'
			// width='50%'
			width={{ md: '50%', base: '100%' }}
			zIndex={1}
			height={{ md: '100vh', base: 'auto' }}
			position={{ md: 'absolute', base: 'initial' }}
			top='0'
			transition='all 0.6s ease-in-out;'
			mt={'0 !important'}
		>
			<Stack
				display='flex !important'
				alignItems='center !important'
				justifyContent='center !important'
				padding='0 50px'
				height='100%'
				textAlign='center'
			>
				<Heading
					as='h1'
					style={{ fontFamily: '"GothamPro Medium", serif' }}
					mt='1rem'
				>
					Create Free Account
				</Heading>
				<Text
					maxW='100%'
					color={textColor}
					style={{
						fontFamily: '"GothamPro", serif',
						marginBottom: '16px',
					}}
					fontSize='1.125rem'
					textAlign='center'
					letterSpacing={0}
					// mb="16px"
				>
					Sign up using social networks
				</Text>
				<LinkIconBar links={links} />
				<Stack
					background="url('/diprella-login-clone/static/media/logo_line.dea98084.svg') center center repeat-x"
					maxWidth='460px'
					width='100%'
					marginBottom='8px !important'
					alignItems='center'
					justifyContent='center'
				>
					<Text
						as='div'
						bg={bg}
						// maxW="100%"
						color={textColor}
						style={{ fontFamily: '"GothamPro", serif' }}
						fontSize='0.6875rem'
						textAlign='center'
						letterSpacing={0}
						padding='0 8px'
						margin='0 auto'
						width='33px'
						// wordBreak="keep-all"
						whiteSpace='nowrap'
					>
						OR
					</Text>
				</Stack>
				<Formik
					initialValues={{
						email: '',
						password: '',
					}}
					validationSchema={Yup.object().shape({
						name: Yup.string().required('Name is required'),
						surname: Yup.string().required('Surname is required'),
						email: Yup.string()
							.email('Email is invalid')
							.required('Email is required'),
						password: Yup.string()
							.min(8, 'Password must be at least 8 characters')
							.required('Password is required'),
					})}
					onSubmit={() => {
						toast({
							title: 'Sign Up Successfull',
							description: "We've created your account for you.",
							position: 'top',
							duration: '5000',
							status: 'success',
							isClosable: true,
						});
					}}
				>
					{({ errors, status, touched }) => (
						<Form style={{ alignItems: 'center' }}>
							<Stack as='fieldset'>
								<Stack as='fieldset'>
									<Field
										type='text'
										name='name'
										placeholder='Name'
										className={
											'form-control' +
											(errors.name && touched.name
												? ' is-invalid'
												: '')
										}
									/>
									<ErrorMessage
										name='name'
										component='div'
										className='invalid-feedback'
									/>
								</Stack>
								<Stack as='fieldset'>
									<Field
										type='text'
										name='surname'
										placeholder='Surname'
										className={
											'form-control' +
											(errors.surname && touched.surname
												? ' is-invalid'
												: '')
										}
									/>
									<ErrorMessage
										name='surname'
										component='div'
										className='invalid-feedback'
									/>
								</Stack>
								<Stack as='fieldset'>
									<Field
										type='text'
										name='email'
										placeholder='Email'
										className={
											'form-control' +
											(errors.email && touched.email
												? ' is-invalid'
												: '')
										}
									/>
									<ErrorMessage
										name='email'
										component='div'
										className='invalid-feedback'
									/>
								</Stack>
								<Stack as='fieldset'>
									<Field
										type='password'
										name='password'
										placeholder='Password'
										className={
											'form-control' +
											(errors.password && touched.password
												? ' is-invalid'
												: '')
										}
									/>
									<ErrorMessage
										name='password'
										component='div'
										className='invalid-feedback'
									/>
								</Stack>
							</Stack>
							<Button
								type='submit'
								w={235}
								h={54}
								backgroundColor='#28b498'
								borderRadius={30}
								outline={0}
								border='none'
								justifyContent='center'
								color='#fff'
								alignItems='center'
								fontFamily="'GothamPro Medium', serif"
								fontSize='0.875rem'
								lineHeight={16}
								textAlign='center'
								margin={{ md: '32px 0', base: '0 0 32px 0' }}
							>
								Sign Up
							</Button>
						</Form>
					)}
				</Formik>
			</Stack>
		</Stack>
	);
};

const SignIn = ({ bg, textColor }) => {
	return (
		<Stack
			className='form-container sign-in-container'
			bg={bg}
			left='0'
			width={{ md: '50%', base: '100%' }}
			height={{ md: '100vh', base: 'auto' }}
			zIndex={2}
			position={{ md: 'absolute', base: 'initial' }}
			top='0'
			transition='all 0.6s ease-in-out;'
			marginInlineStart='0 !important'
			mt={'0 !important'}
		>
			<Stack
				display='flex !important'
				alignItems='center !important'
				justifyContent='center !important'
				padding='0 50px'
				height='100%'
				textAlign='center'
			>
				<Heading
					as='h1'
					style={{ fontFamily: '"GothamPro Medium", serif' }}
				>
					Login to Your Account
				</Heading>
				<Text
					maxW='100%'
					color={textColor}
					style={{
						fontFamily: '"GothamPro", serif',
						marginBottom: '16px',
					}}
					fontSize='1.125rem'
					textAlign='center'
					letterSpacing={0}
					// mb="16px"
				>
					Login using social networks
				</Text>
				<LinkIconBar links={links} />
				<Stack
					background="url('/diprella-login-clone/static/media/logo_line.dea98084.svg') center center repeat-x"
					maxWidth='460px'
					width='100%'
					marginBottom='8px !important'
					alignItems='center'
					justifyContent='center'
				>
					<Text
						as='div'
						bg={bg}
						// maxW="100%"
						color={textColor}
						style={{ fontFamily: '"GothamPro", serif' }}
						fontSize='0.6875rem'
						textAlign='center'
						letterSpacing={0}
						padding='0 8px'
						margin='0 auto'
						width='33px'
						// wordBreak="keep-all"
						whiteSpace='nowrap'
					>
						OR
					</Text>
				</Stack>
				<Login />
			</Stack>
		</Stack>
	);
};

const Overlay = () => {
	const handleRightOnClick = () => {
		const container = document.getElementById('container');

		container.classList.add('right-panel-active');

		const darkLogo = document.getElementsByClassName('darkLogo')[0];
		const whiteLogo = document.getElementsByClassName('whiteLogo')[0];

		darkLogo.style.display = 'none';
		whiteLogo.style.display = 'block';
	};

	const handleLeftOnClick = () => {
		const container = document.getElementById('container');

		container.classList.remove('right-panel-active');

		const darkLogo = document.getElementsByClassName('darkLogo')[0];
		const whiteLogo = document.getElementsByClassName('whiteLogo')[0];

		darkLogo.style.display = 'block';
		whiteLogo.style.display = 'none';
	};

	const handleDownOnClick = () => {
		const signUpContainer =
			document.getElementsByClassName('sign-up-container');
		const signInContainer =
			document.getElementsByClassName('sign-in-container');

		// signUpContainer[0].style.setProperty('display', 'block', 'important');
		signUpContainer[1].style.setProperty('display', 'block', 'important');
		signInContainer[0].style.setProperty('display', 'none', 'important');

		const header = document.getElementsByTagName('header');
		header[0].style.backgroundImage =
			'linear-gradient(253deg, #3ba5b4, #38ba8a 100%)';

		const overlayLeft = document.getElementsByClassName('overlay-left');
		const overlayRight = document.getElementsByClassName('overlay-right');

		// const overlayContainer = document.getElementsByClassName('overlay-container');
		// const parent = overlayContainer[0].parentNode;
		// parent.insertBefore(overlayContainer[0], parent.firstChild);

		overlayLeft[0].style.setProperty('display', 'flex', 'important');
		overlayRight[0].style.setProperty('display', 'none', 'important');

		const darkLogo = document.getElementsByClassName('darkLogo')[0];
		const whiteLogo = document.getElementsByClassName('whiteLogo')[0];

		darkLogo.style.display = 'none';
		whiteLogo.style.display = 'block';
	};

	const handleUpOnClick = () => {
		const signUpContainer =
			document.getElementsByClassName('sign-up-container');
		const signInContainer =
			document.getElementsByClassName('sign-in-container');

		// signUpContainer[0].style.setProperty('display', 'none', 'important');
		signUpContainer[1].style.setProperty('display', 'none', 'important');
		signInContainer[0].style.setProperty('display', 'block', 'important');

		const header = document.getElementsByTagName('header');
		header[0].style.backgroundImage = '';

		const overlayLeft = document.getElementsByClassName('overlay-left');
		const overlayRight = document.getElementsByClassName('overlay-right');

		overlayLeft[0].style.setProperty('display', 'none', 'important');
		overlayRight[0].style.setProperty('display', 'flex', 'important');

		const darkLogo = document.getElementsByClassName('darkLogo')[0];
		const whiteLogo = document.getElementsByClassName('whiteLogo')[0];

		darkLogo.style.display = 'block';
		whiteLogo.style.display = 'none';
	};

	return (
		<Stack
			className='overlay-container'
			as='section'
			left={{ md: '50%', base: 'auto' }}
			width={{ md: '50%', base: '100%' }}
			height={{ md: '100%', base: 'auto' }}
			position={{ md: 'absolute', base: 'initial' }}
			overflow='hidden'
			mt={'0 !important'}
			transition='all 0.6s ease-in-out;'
			zIndex={100}
			backgroundImage='linear-gradient(253deg, #3ba5b4, #38ba8a 100%)'
			marginInlineStart='0 !important'
		>
			<Stack
				className='overlay'
				position='relative'
				left={{ md: '-100%', base: 'auto' }}
				width={{ md: '200%', base: '100%' }}
				height={{ md: '100%', base: 'auto' }}
				background='0 0'
				transform='translateX(0)'
				transition='all 0.6s ease-in-out;'
			>
				<Stack
					className='overlay-left'
					display={{ md: 'flex !important', base: 'none !important' }}
					transform={{
						md: 'translateX(-20%)',
						base: 'translateX(0)',
					}}
					position={{ md: 'absolute', base: 'initial' }}
					alignItems='center'
					justifyContent='center'
					padding={{ md: '0 40px', base: '40px' }}
					textAlign='center'
					height={{ md: '100%', base: 'auto' }}
					top={0}
					width={{ md: '50%', base: '100%' }}
					transition='all 0.6s ease-in-out;'
				>
					<Heading
						as='h1'
						style={{
							fontSize: '2.375rem',
							fontFamily: '"GothamPro Medium", serif',
						}}
						maxWidth='100%'
						lineHeight='48px'
						margin='0 0 32px'
						textAlign='center'
						color='#fff'
					>
						One Of Us?
					</Heading>
					<Text
						fontSize='1.125rem'
						maxWidth='320px'
						style={{ fontFamily: '"GothamPro", serif' }}
						lineHeight='36px'
						textAlign='center'
						marginBottom='32px !important'
						color='#fff'
					>
						If you already have an account, just sign in. We've
						missed you!
					</Text>
					<Button
						display={{ md: 'inline-flex', base: 'none' }}
						w={223}
						h={54}
						backgroundColor='#fff'
						borderRadius={30}
						outline={0}
						border='none'
						justifyContent='center'
						color='#1a1e1d'
						alignItems='center'
						fontFamily="'GothamPro Medium', serif"
						fontSize='0.875rem'
						lineHeight={16}
						textAlign='center'
						margin='32px 0'
						onClick={handleLeftOnClick}
					>
						Sign In
					</Button>
					<Button
						display={{ md: 'none', base: 'inline-flex' }}
						w={223}
						h={54}
						backgroundColor='#fff'
						borderRadius={30}
						outline={0}
						border='none'
						justifyContent='center'
						color='#1a1e1d'
						alignItems='center'
						fontFamily="'GothamPro Medium', serif"
						fontSize='0.875rem'
						lineHeight={16}
						textAlign='center'
						margin='32px 0'
						onClick={handleUpOnClick}
					>
						Sign In
					</Button>
				</Stack>
				<Stack
					className='overlay-right'
					right='0'
					transform='translateX(0)'
					position={{ md: 'absolute', base: 'initial' }}
					display='flex !important'
					alignItems='center'
					justifyContent='center'
					padding={{ md: '0 40px', base: '40px' }}
					textAlign='center'
					height={{ md: '100%', base: 'auto' }}
					top={0}
					// width='50%'
					width={{ md: '50%', base: '100%' }}
					transition='all 0.6s ease-in-out;'
				>
					<Heading
						as='h1'
						style={{
							fontSize: '2.375rem',
							fontFamily: '"GothamPro Medium", serif',
						}}
						maxWidth='100%'
						lineHeight='48px'
						margin='0 0 32px'
						textAlign='center'
						color='#fff'
					>
						New Here?
					</Heading>
					<Text
						fontSize='1.125rem'
						maxWidth='320px'
						style={{ fontFamily: '"GothamPro", serif' }}
						lineHeight='36px'
						textAlign='center'
						marginBottom='32px !important'
						color='#fff'
					>
						Sign up and discover a great amount of new
						opportunities!
					</Text>
					<Button
						display={{ md: 'inline-flex', base: 'none' }}
						w={223}
						h={54}
						backgroundColor='#fff'
						borderRadius={30}
						outline={0}
						border='none'
						justifyContent='center'
						color='#1a1e1d'
						alignItems='center'
						fontFamily="'GothamPro Medium', serif"
						fontSize='0.875rem'
						lineHeight={16}
						textAlign='center'
						margin='32px 0'
						onClick={handleRightOnClick}
					>
						Sign Up
					</Button>
					<Button
						display={{ md: 'none', base: 'inline-flex' }}
						w={223}
						h={54}
						backgroundColor='#fff'
						borderRadius={30}
						outline={0}
						border='none'
						justifyContent='center'
						color='#1a1e1d'
						alignItems='center'
						fontFamily="'GothamPro Medium', serif"
						fontSize='0.875rem'
						lineHeight={16}
						textAlign='center'
						margin='32px 0'
						onClick={handleDownOnClick}
					>
						Sign Up
					</Button>
				</Stack>
			</Stack>
		</Stack>
	);
};

const LoginForm = () => {
	const bg = useColorModeValue(colors.bg.light, colors.bg.dark);
	const textColor = useColorModeValue('#555a59', colors.secondary.dark);

	return (
		<Stack
			direction={['column', 'row']}
			className='container'
			id='container'
			position='relative'
			// overflow={{ md: 'hidden', base: 'auto' }}
			overflow={'hidden'}
			maxWidth='100%'
			width='100vw'
			height={{ md: '100vh', base: 'auto' }}
			// mt={{md: '0', base: '60px'}}
		>
			<SignUp bg={bg} textColor={textColor} />
			<SignIn bg={bg} textColor={textColor} />
			<Overlay />
			<SignUp bg={bg} textColor={textColor} />
		</Stack>
	);
};

export default LoginForm;
