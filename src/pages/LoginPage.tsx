import { useAuthContext } from "../context";

function LoginPage() {

	const { login } = useAuthContext();

	return (
		<>
			<button onClick={() => login()}>Login</button>
			<button onClick={() => login(true)}>Login as admin</button>
		</>
	)
}

export default LoginPage;
