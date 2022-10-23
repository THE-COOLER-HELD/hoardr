import { supabase } from "./superbaseClient";

export const getUser = async (uuid) => {
	const { data, error } = await supabase
		.from("profiles")
		.select()
		.eq("id", uuid);

	if (error) throw { error };
	else return data;
};

export const createUser = (userData) => {
	return supabase
		.from("profiles")
		.insert(userData)
		.then((newUser) => {
			return newUser;
		})
		.catch((e) => console.log(e));
};

export const addTransaction = async (expense) => {
	const {
		uuid,
		amount,
		category,
		isNecessary,
		date,
		isOutgoing,
		description = ""
	} = expense;
	const { data, error } = await supabase
		.from("transactions")
		.insert({
			user_id: uuid,
			amount,
			category,
			necessary: isNecessary,
			date,
			outgoing: isOutgoing,
			description
		})
		.select();

	if (error) throw { error };
	else {
		console.log({ data });
		return data;
	}
};

export const viewTransactions = async (uuid, outgoing) => {
	let query = supabase.from("transactions").select().eq("user_id", uuid);
	if (outgoing !== null) {
		query = query.eq("outgoing", outgoing);
	}

	const { data, error } = await query;

	if (error) throw { error };
	else {
		return data;
	}
};

export const fetchIncomes = async (uuid) => {
	const { data, error } = await supabase
		.from("transactions")
		.select()
		.eq("outgoing", false)
		.eq("user_id", uuid);

	if (error) throw { error };
	else {
		console.log(data, "i am the data in queries");
		return data;
	}
};

export const calcTotals = async (uuid) => {
	const allOutgoings = await fetchOutgoing(uuid);
	const allIncome = await fetchIncomes(uuid);
	const calcTotal = (transactionsArr) => {
		let total = 0;
		transactionsArr.forEach((trans) => {
			total += trans.amount;
		});
		return total;
	};
	let totalOut = calcTotal(allOutgoings);
	let totalIn = calcTotal(allIncome);

	return [totalOut, totalIn];
};
export const fetchOutgoing = async (uuid) => {
	const { data, error } = await supabase
		.from("transactions")
		.select()
		.eq("outgoing", true)
		.eq("user_id", uuid);

	if (error) throw { error };
	else {
		console.log(data, "i am the data in queries");
		return data;
	}
};

export const addToSavings = async (uuid, amount) => {
	const [user] = await getUser(uuid);
	const savings = user.savings;

	const { error } = await supabase
		.from("profiles")
		.update({ savings: Number(savings) + Number(amount) })
		.eq("id", uuid)
		.select();

	if (error) throw error;
	else {
		const { data } = await addTransaction({
			uuid,
			amount,
			category: "Savings",
			date: new Date(Date.now()),
			isOutgoing: true,
			description: "Adding to Savings"
		});
		console.log({ data });
		return data;
	}
};

export const withdrawFromSavings = async (uuid, amount) => {
	const [user] = await getUser(uuid);
	const savings = user.savings;

	const { error } = await supabase
		.from("profiles")
		.update({ savings: Number(savings) - Number(amount) })
		.eq("id", uuid)
		.select();

	if (error) throw error;
	else {
		const { data } = await addTransaction({
			uuid,
			amount,
			category: "Savings",
			date: new Date(Date.now()),
			isOutgoing: false,
			description: "Withdrawal from Savings"
		});
		console.log({ data });
		return data;
	}
};
