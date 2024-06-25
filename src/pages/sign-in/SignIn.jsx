import { useNavigate } from 'react-router-dom';

// Firebase
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase.config';

// Hook Form
import { useForm } from 'react-hook-form';
import { FORM_VALIDATION } from '../../constants/form-validation';

// Styles
import {
	StyledContainer,
	StyledErrorContainer,
	StyledFormField,
	StyledInput,
	StyledLink,
	StyledSignInButton,
	StyledSmallContainer,
	StyledTitle
} from './styles';
import SignInOptions from '../../components/sign-in-options/SignInOptions';
import { useState } from 'react';
import { AUTH_MESSAGES } from '../../constants/messages';

const SignIn = () => {
	const navigate = useNavigate();
	const {
		handleSubmit,
		register,
		formState: { errors }
	} = useForm({ mode: 'onBlur' });
	const [authErrors, setAuthErrors] = useState({});

	return (
		<>
			<StyledContainer>
				<StyledTitle>{AUTH_MESSAGES.signIn}</StyledTitle>
				<form
					onSubmit={handleSubmit((data, e) =>
						onSubmit(data, e, navigate, setAuthErrors)
					)}
				>
					<StyledFormField>
						<StyledInput
							type='email'
							placeholder={AUTH_MESSAGES.emailPHolder}
							{...register('email', FORM_VALIDATION.email)}
							invalid={errors?.email?.message}
						/>
					</StyledFormField>
					<StyledFormField>
						<StyledInput
							type='password'
							placeholder={AUTH_MESSAGES.passwordPHolder}
							{...register('password', FORM_VALIDATION.password)}
							invalid={errors?.password?.message}
						/>
					</StyledFormField>
					{(errors.email || errors.password || authErrors.message) && (
						<StyledErrorContainer>
							<p>{errors?.email?.message}</p>
							<p>{errors?.password?.message}</p>
							<p>{authErrors?.message}</p>
						</StyledErrorContainer>
					)}

					<StyledSignInButton>{AUTH_MESSAGES.signInButton}</StyledSignInButton>
					<StyledLink to='/reset'>{AUTH_MESSAGES.resetPassword}</StyledLink>
				</form>

				<SignInOptions />
			</StyledContainer>
			<StyledSmallContainer onClick={() => navigate('/signup')}>
				{AUTH_MESSAGES.registerQuestion}
			</StyledSmallContainer>
		</>
	);
};

const onSubmit = async (data, e, navigate, setAuthErrors) => {
	const { email, password } = data;
	try {
		await signInWithEmailAndPassword(auth, email, password);
		navigate('/');
	} catch (err) {
		console.log(err);
		setAuthErrors({ message: err.message });
	}
};

export default SignIn;
