import { useContext } from 'react';
import { AuthContext } from '../contexts/Auth.context';
import { Navigate } from 'react-router-dom';
import Loader from '../components/loader/Loader';

const RequireAuth = ({ children }) => {
	const { isLoading, loggedUser } = useContext(AuthContext);

	if (isLoading) return <Loader />;

	if (!isLoading && !loggedUser) {
		return <Navigate to='/signin' replace />;
	}

	return children;
};

export default RequireAuth;
