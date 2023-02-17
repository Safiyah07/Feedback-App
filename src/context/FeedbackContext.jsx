import { useState, createContext, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import FeedbackData from '../data/FeedbackData'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
	const [isLoading, setIsLoading] = useState(true)
	const [feedback, setFeedback] = useState(FeedbackData)
	const [feedbackEdit, setFeedbackEdit] = useState({
		item: {},
		edit: false,
	})

	// Add Feedback
	// const addFeedback = (newFeedback) => {
	// 	newFeedback.id = uuidv4()

	// 	setFeedback([newFeedback, ...feedback])
	// }

	// // Edit Feedback
	// const editFeedback = (item) => {
	// 	setFeedbackEdit({
	// 		item,
	// 		edit: true,
	// 	})
	// }

	// // Update Feedback
	// const updateFeedback = (id, updItem) => {
	// 	setFeedback(
	// 		feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
	// 	)
	// }

	// // Delete Feedback
	// const deleteFeedback = (id) => {
	// 	if (window.confirm('Are you sure you want to delete this feedback?')) {
	// 		setFeedback(feedback.filter((item) => item.id !== id))
	// 	}
	// }

	/** ** FETCHING FEEDBACK FROM BACKEND, ADDING, EDITING, DELETING, UPDATING ** **/

	useEffect(() => {
		fetchFeedback()
	}, [])

	// FETCH FEEDBACK
	const fetchFeedback = async () => {
		const response = await fetch(`/feedback?_sort=id`)
		const data = await response.json()
		setFeedback(data)
		setIsLoading(false)
	}

	/* ADD FEEDBACK */
	const addFeedback = async (newFeedback) => {
		const response = await fetch(`http://localhost:5000/feedback`, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(newFeedback),
		})
		const data = await response.json()

		setFeedback([data, ...feedback])
	}

	/* EDIT FEEDBACK */
	const editFeedback = (item) => {
		setFeedbackEdit({
			item,
			edit: true,
		})
	}

	/* UPDATE FEEDBACK */
	const updateFeedback = async (id, updItem) => {
		const response = await fetch(`http://localhost:5000/feedback`, {
			method: 'PUT',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(updItem),
		})

		const data = await response.json()

		setFeedback(
			feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
		)
	}

	/* DELETE FEEDBACK */
	const deleteFeedback = async (id) => {
		if (window.confirm('Are you sure you want to delete this feedback?')) {
			await fetch(`http://localhost:5000/feedback/${id}`, {method: 'DELETE'})
			setFeedback(feedback.filter((item) => item.id !== id))
		}
	console.log('App', id)
	}

	return (
		<FeedbackContext.Provider
			value={{
				feedback,
				feedbackEdit,
				isLoading,
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
