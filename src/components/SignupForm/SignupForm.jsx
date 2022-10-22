import React from "react";
import { useState } from "react";
import { supabase } from "../../supabaseClient";

function SignupForm() {
	const [loading, setLoading] = useState(false);
	const [email, setEmail] = useState("");

	const handleLogin = async (e) => {
		e.preventDefault();

		try {
			setLoading(true);
			const { error } = await supabase.auth.signInWithOtp({ email });
			if (error) throw error;
			alert("Check your email for the login link!");
		} catch (error) {
			console.log({ error });
			alert(error.error_description || error.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div>
			<div aria-live='polite'>
				<h1>Hoardr</h1>
				<p>Sign in via magic link with your email below</p>
				{loading ? (
					"Sending magic link..."
				) : (
					<form onSubmit={handleLogin}>
						<label htmlFor='email'>Email</label>
						<input
							id='email'
							type='email'
							placeholder='Your email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<button aria-live='polite'>Send magic link</button>
					</form>
				)}
			</div>
		</div>
	);
}

export default SignupForm;
