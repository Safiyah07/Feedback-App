import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'

function About() {
	return (
		<Card>
			<h3>About This Project</h3>
			<br />
			<p>
				This is a React App to leave feedback for a product. <br /> Constructive
				criticism on the app is always welcomed and appreciated 😃.
			</p>
			<p>V.1.0.0</p>
			<br />
			<Link to='/'>Back To Home</Link>
		</Card>
	)
}

export default About
