import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Button, Stack, useToast } from '@chakra-ui/react';
import * as Yup from 'yup';

const Login = () => {
    const toast = useToast();

    return (
        <Formik
            initialValues={{ 
                email: '',
                password: '',
            }}
            validationSchema={Yup.object().shape({
                email: Yup.string()
                    .email('Email is invalid')
                    .required('Email is required'),
                password: Yup.string()
                    .min(8, 'Password must be at least 8 characters')
                    .required('Password is required')
            })}
            onSubmit={() => {
                toast({
                    title: 'Sign In Successfull',
                    description: 'Welcome Back!!!',
                    position: 'top',
                    duration: '5000',
                    status: 'success',
                    isClosable: true,
                })
            }}
        >
            {({ errors, status, touched }) => (
                <Form
                    style={{ alignItems: "center" }}
                >
                    <Stack as='fieldset'>
                        <Stack as='fieldset'>
                            <Field type="text" name="email" placeholder="Email" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                        </Stack>
                        <Stack as='fieldset'>
                            <Field type="password" name="password" placeholder="Password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                            <ErrorMessage name="password" component="div" className="invalid-feedback" />
                        </Stack>
                    </Stack>
                    <Button
                        type="submit"
                        w={235}
                        h={54}
                        backgroundColor="#28b498"
                        borderRadius={30}
                        outline={0}
                        border="none"
                        justifyContent="center"
                        color="#fff"
                        alignItems="center"
                        fontFamily="'GothamPro Medium', serif"
                        fontSize="0.875rem"
                        lineHeight={16}
                        textAlign="center"
                        margin="32px 0"
                    >
                        Sign In
                    </Button>
                </Form>
            )}
        </Formik>
    );
};

export default Login;