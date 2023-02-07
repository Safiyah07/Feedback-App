import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import FeedbackList from './components/FeedbackList'
import Header from './components/Header'
import Rating from './components/Rating'
import FeedbackStats from './components/FeedbackStats'
import About from './pages/About'
import AboutIcon from './components/AboutIcon'
import { FeedbackProvider } from './context/FeedbackContext'

function App() {
	return (
		<FeedbackProvider>
			<Router>
				<Header />
				<div className='container'>
					<Routes>
						<Route
							exact
							path='/'
							element={
								<>
									<Rating />
									<FeedbackStats />
									<FeedbackList />
								</>
							}
						></Route>

						<Route
							path='/about'
							element={<About />}
						/>
					</Routes>
					<AboutIcon />
				</div>
			</Router>
		</FeedbackProvider>
	)
}

export default App
