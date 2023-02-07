import { useState, createContext, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import FeedbackData from '../data/FeedbackData'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
	// const [isLoading, setIsLoading] = useState(true)
	const [feedback, setFeedback] = useState(FeedbackData)
	const [feedbackEdit, setFeedbackEdit] = useState({
		item: {},
		edit: false,
	})

	// useEffect(() => {
	// 	fetchFeedback()
	// }, [])

	// // Fetch Feedback
	// const fetchFeedback = async () => {
	// 	const response = await fetch(`http://localhost:5000/feedback`)
	// 	const data = await response.json()
	// 	setFeedback(data)
	// 	setIsLoading(false)
	// }

	// Add Feedback
	const addFeedback = (newFeedback) => {
		newFeedback.id = uuidv4()

		setFeedback([newFeedback, ...feedback])
	}

	// Edit Feedback
	const editFeedback = (item) => {
		setFeedbackEdit({
			item,
			edit: true,
		})
	}

	// Update Feedback
	const updateFeedback = (id, updItem) => {
		setFeedback(
			feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
		)
	}

	// Delete Feedback
	const deleteFeedback = (id) => {
		if (window.confirm('Are you sure you want to delete this feedback?')) {
			setFeedback(feedback.filter((item) => item.id !== id))
		}
	}

	return (
		<FeedbackContext.Provider
			value={{
				feedback,
				feedbackEdit,
				// isLoading,
				setFeedback,
				addFeedback,
				editFeedback,
				deleteFeedback,
				updateFeedback,
			}}
		>
			{children}
		</FeedbackContext.Provider>
	)
}

export default FeedbackContext
