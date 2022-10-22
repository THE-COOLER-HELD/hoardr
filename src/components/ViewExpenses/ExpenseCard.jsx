import React, {useState} from 'react';

function ExpenseCard({
	expense: { description, category, amount, necessary, date, outgoing },
}) {
	const [showInfo, setShowInfo] = useState(false);

	//transaction_id, INT
	//category TEXT *
	//amount FLOAT *
	//user_id STR
	//necessary BOOL *
	//description STR *
	//date TIMESTAMP *
	//outgoing BOOL
	function toggleInfo() {
		setShowInfo(!showInfo)
	}

	return (
		<>
			<div className="expense-card">
				{/* <p>{description}</p> */}
				<p>{date}</p>
				<p>{category}</p>
				<p>{amount}</p>
				<p>{outgoing ? 'OUT' : 'IN'}</p>
				{/* <p>{necessary ? "✅" : "❎"}</p> */}
				<button onClick={toggleInfo}>{showInfo ? "-" : "+"}</button>
			</div>
			{showInfo && (
				<div className="expense-info">
					<p>Description</p>
					<p>{description}</p>
				</div>
			)}
		</>
	);
}

export default ExpenseCard;
