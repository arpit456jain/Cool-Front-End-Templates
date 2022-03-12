import { ChakraProvider } from '@chakra-ui/react';
import NavBar from './Components/NavBar';
import LoginForm from './LoginForm';
import Theme from './Theme';

const App = () => {
    return (
        <ChakraProvider theme={Theme}>
            <NavBar />
            <LoginForm />
        </ChakraProvider>
    );
};

export default App;