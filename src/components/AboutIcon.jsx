import React from 'react'
import { Link } from 'react-router-dom'
import { FaQuestion } from 'react-icons/fa'

function AboutIcon() {
	return (
		<h1 className='about-link'>
			<Link to='/about'>
				<FaQuestion />
			</Link>
		</h1>
	)
}

export default AboutIcon
