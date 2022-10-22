import React from 'react';

function ExpenseCard({
	expense: { description, category, amount, necessary, date, outgoing },
}) {
	//transaction_id, INT
	//category TEXT *
	//amount FLOAT *
	//user_id STR
	//necessary BOOL *
	//description STR *
	//date TIMESTAMP *
	//outgoing BOOL
	return (
		<div>
			<p>{description}</p>
			<p>{amount}</p>
			<p>{category}</p>
            <p>{date}</p>
            <p>{outgoing ? "OUT" : "IN"}</p>
            <p>{necessary ? "✅" : "❎"}</p>
		</div>
	);
}

export default ExpenseCard;
