import { ReactNode, createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

interface AuthContextType {
	login: (isAdmin?: boolean) => void,
	logout: () => void,
	isAdmin: boolean,
	isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | null>(null);

function AuthContextProvider({ children }: { children: ReactNode }) {

	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [_isAdmin, setIsAdmin] = useState(false);

	const navigate = useNavigate();

	const login = (isAdmin: boolean = false) => {
		setIsAdmin(isAdmin);
		setIsAuthenticated(true);
		navigate('checkin');
	};

	const logout = () => {
		setIsAdmin(false);
		setIsAuthenticated(false);
		navigate('login');
	}

	return (
		<AuthContext.Provider value={{ isAuthenticated, isAdmin: _isAdmin, login, logout }}>
			{ children }
		</AuthContext.Provider>
	)
}

function useAuthContext(): AuthContextType {
	const context = useContext(AuthContext);
	if (context == null) {
		throw new Error('useAuthContext must be use within a AuthContextProvider');
	}
	return context;
}

export { AuthContextProvider, useAuthContext };