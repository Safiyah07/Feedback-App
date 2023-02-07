import { useState, useContext, useEffect } from 'react'
import Card from './shared/Card'
import RatingSelect from './RatingSelect'
import Button from './shared/Button'
import FeedbackContext from '../context/FeedbackContext'

function Rating() {
	const [text, setText] = useState('')
	const [btnDisabled, setBtnDisabled] = useState(true)
	const [rating, setRating] = useState(10)
	const [message, setMessage] = useState('')

	const { addFeedback, feedbackEdit, updateFeedback } =
		useContext(FeedbackContext)

	useEffect(() => {
		if (feedbackEdit.edit === true) {
			setBtnDisabled(false)
			setText(feedbackEdit.item.text)
			setRating(feedbackEdit.item.rating)
		}
	}, [feedbackEdit])

	function handleTextChange(e) {
		if (text === '') {
			setMessage(null)
			setBtnDisabled(true)
		} else if (text !== '' && text.trim().length <= 9) {
			setMessage('Text must be at least 10 characters')
			setBtnDisabled(true)
		} else {
			setBtnDisabled(false)
			setMessage(null)
		}

		setText(e.target.value)
	}

	function handleSubmit(e) {
		if (text.trim().length > 9) {
			const newFeedback = {
				text,
				rating,
			}

			if (feedbackEdit.edit === true) {
				updateFeedback(feedbackEdit.item.id, newFeedback)
			} else {
				addFeedback(newFeedback)
			}

			setText('')
			setBtnDisabled(true)
		}

		e.preventDefault()
	}

	return (
		<Card>
			<form onSubmit={handleSubmit}>
				<div className='rating-input'>
					<h2>How would you rate your service with us?</h2>
					<RatingSelect select={(rating) => setRating(rating)} />
					<div className='inputText-and-button'>
						<input
							type='text'
							className='input-text'
							placeholder='Write a review'
							onChange={handleTextChange}
							value={text}
						/>
						<Button
							type='submit'
							isDisabled={btnDisabled}
						>
							Send
						</Button>
					</div>

					{message && <div className='message'>{message}</div>}
				</div>
			</form>
		</Card>
	)
}

export default Rating
