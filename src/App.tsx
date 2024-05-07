import { Navigate, Route, BrowserRouter as Router, Routes, useParams } from 'react-router-dom';
import { CheckInPage, StatsPage, UserStatsPage } from './pages';
import { MainLayout } from './layout';

const redirectToCheckin = <Navigate to="/checkin" replace/>

function App() {
  return (
	<Router>
		<Routes>
			<Route path="/" element={<MainLayout/>}>
				<Route index element={redirectToCheckin} />
				<Route path="/checkin" element={<CheckInPage />} />
				<Route path="/stats" element={<StatsPage />} />
				<Route path="/stats/:id" element={<UserStatsPage />} />
				<Route path="*" element={redirectToCheckin} />
			</Route>
		</Routes>
	</Router>
  );
}

export default App;
