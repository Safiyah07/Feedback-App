
function Button({ isDisabled, children }) {
	return (
		<button
			disabled={isDisabled}
      className={`${isDisabled ? 'disabled-btn-bg' : 'btn-bg'}`}
		>
			{children}
		</button>
	)
}

export default Button
