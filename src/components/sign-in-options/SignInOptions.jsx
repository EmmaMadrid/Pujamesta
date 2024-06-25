import { useNavigate } from 'react-router-dom';
import {
	StyledButtonsContainer,
	StyledGithubSignInButton,
	StyledGoogleSignInButton,
	StyledSeparator
} from './styles';
import {
	handleGithubLogin,
	handleGoogleLogin
} from '../../utils/sign-in-providers';
import { AUTH_MESSAGES } from '../../constants/messages';

const SignInOptions = () => {
	const navigate = useNavigate();
	return (
		<>

		</>
	);
};

export default SignInOptions;