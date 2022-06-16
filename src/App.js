import './styles/main.scss';
import { Route, Routes } from 'react-router';
import SignIn from './pages/SignIn';


function App() {
  return (
	<Routes>
		<Route path='/signin'>
			<SignIn />
		</Route>
		<PrivateRoute>
			
		</PrivateRoute>
	</Routes>
  );
}

export default App;
