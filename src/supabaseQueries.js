import { supabase } from "./superbaseClient";

export const getUser = async (uuid) => {
	const { data, error } = await supabase
		.from("profiles")
		.select()
		.eq("uuid", uuid);

	console.log({ data });
};
