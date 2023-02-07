import Card from './shared/Card'
import FeedbackContext from '../context/FeedbackContext'
import { useContext } from 'react'
import { FaTimes, FaEdit } from 'react-icons/fa'

function FeedbackItem({ item }) {
	const { editFeedback, deleteFeedback } = useContext(FeedbackContext)

	return (
		<Card>
			<div className='rating-card'>
				<p className='item-rating'>{item.rating}</p>
				<div className='edit-and-close'>
					<button
						onClick={() => editFeedback(item)}
						className='edit'
					>
						<FaEdit />
					</button>
					<button
						onClick={() => deleteFeedback(item.id)}
						className='close'
					>
						<FaTimes />
					</button>
				</div>

				<h4 className='item-text'>{item.text}</h4>
			</div>
		</Card>
	)
}

export default FeedbackItem
