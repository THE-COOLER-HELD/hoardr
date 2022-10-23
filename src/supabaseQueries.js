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
	const { uuid, amount, category, isNecessary, date, isOutgoing, description = "" } = expense
	const { data, error } = await supabase
		.from("transactions")
		.insert({ user_id: uuid, amount, category, necessary: isNecessary, date, outgoing: isOutgoing, description })
		.select()

	if (error) throw { error }
	else {
		console.log(data)
		return data
	}
}

export const viewTransactions = async (uuid, outgoing) => {
	let query = supabase.from("transactions").select().eq("user_id", uuid);
	if (!outgoing.isNull()) query = query.eq("outgoing", outgoing);
	
	const { data, error } = await query
	// 	.from("transactions")
	// 	.select()
	// 	.eq("user_id", uuid)
	if (error) throw { error }
	else {
		console.log(data)
		return data
	}
}


