import Navbar from './components/Navbar';
import Pagination from './components/Pagination';
import Anime from './pages/Animes/Anime';

function App() {
	return (
		<>
			<div className="min-h-screen flex flex-col justify-between">
				<Navbar />

				<Anime />
				<Pagination />
			</div>
		</>
	);
}

export default App;
