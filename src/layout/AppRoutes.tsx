import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import MainLayout from './MainLayout';
import { CheckInPage, LoginPage, StatsPage, UserStatsPage } from '../pages';
import { useAuthContext } from '../context';

interface RouteGuardProps {
	redirectTo: string,
	allowOn: boolean,
}

function RouteGuard({ redirectTo, allowOn }: RouteGuardProps) {
	return allowOn ? <Outlet /> : <Navigate to={redirectTo} />;
}

function AppRoutes() {
	const { isAuthenticated, isAdmin } = useAuthContext();
	
	return (
		<Routes>
			<Route path="/">
				<Route element={<RouteGuard allowOn={!isAuthenticated} redirectTo="/checkin" />} >
					<Route path="login" element={<LoginPage />} />
					<Route path="*" element={<Navigate to="login" />} />
				</Route>
				<Route element={<RouteGuard allowOn={isAuthenticated} redirectTo="/login" />}>
					<Route element={<MainLayout/>}>
						<Route path="checkin" element={<CheckInPage />} />
						<Route element={<RouteGuard allowOn={isAdmin} redirectTo="/checkin" />}>
							<Route path="stats" element={<StatsPage />} />
							<Route path="stats/:id" element={<UserStatsPage />} />
							<Route path="models" element={<p>Models</p>} />
						</Route>
					</Route>
				</Route>
			</Route>
		</Routes>
	);
}

export default AppRoutes;