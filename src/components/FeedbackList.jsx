import { useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FeedbackItem from './FeedbackItem'
import FeedbackContext from '../context/FeedbackContext'
import Spinner from './shared/Spinner'

function FeedbackList() {
	const { feedback, isLoading } = useContext(FeedbackContext)

	if (!isLoading && (!feedback || feedback.length === 0)) {
		return <h4 className='no-feedback'>No Feedback</h4>
	}

	return isLoading ? (
		<Spinner />
	) : (
		<div>
			<AnimatePresence>
				{feedback.map((item) => (
					<motion.div
						key={item.id}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						<FeedbackItem
							key={item.id}
							item={item}
						/>
					</motion.div>
				))}
			</AnimatePresence>
		</div>
	)

	// return (
	// 	<>
	// 		<div>
	// 			{feedback.map((item) => (
	// 				<FeedbackItem
	// 					key={item.id}
	// 					item={item}
	// 				/>
	// 			))}
	// 		</div>
	// 	</>
	// )
}

export default FeedbackList
