import { useEffect } from 'react';
import { useHistory } from 'react-router-dom'; 

const Logout = () => {
    const history = useHistory();

    useEffect(() => {
        const handleLogout = () => {
          
            history.push('/signup');
        };

        // Call the logout function when the component is mounted
        handleLogout();
    }, [history]);

    
    return null;
};

export default Logout;
