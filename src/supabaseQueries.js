import { supabase } from "./superbaseClient";

export const getUser = async (uuid) => {
	const { data, error } = await supabase
		.from("profiles")
		.select()
		.eq("id", uuid);

	if (error) return { error };
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
