import { AppRoutes } from './layout';
import { AuthContextProvider } from './context';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
	<Router>
		<AuthContextProvider>
			<AppRoutes />
		</AuthContextProvider>
	</Router>
  );
}

export default App;
