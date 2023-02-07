import spinner from '../assets/spinner.gif'

function Spinner() {
	return (
		<img
			src={spinner}
			alt='Loading...'
			style={{ width: '150px', margin: 'auto', display: 'block' }}
		/>
	)
}

export default Spinner