import { useAuthContext } from "../context";

function LoginPage() {

	const { login } = useAuthContext();

	return (
		<>
		<div className="flex items-center justify-center h-full">
			<div className="flex w-[256px] flex-col items-center justify-between gap-12">
				<button className="bg-black text-white w-full px-12 py-2 hover:bg-purple-950 transition-all duration-[2s]" onClick={() => login()}>Login</button>
				<button className="bg-black text-white w-full px-12 py-2 hover:bg-purple-950 transition-all duration-[2s]" onClick={() => login(true)}>Login as admin</button>
			</div>
		</div>
		</>
	)
}

export default LoginPage;
