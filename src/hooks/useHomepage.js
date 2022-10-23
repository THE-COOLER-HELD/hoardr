import { useState, useEffect, useContext } from "react";
import UserContext from "../contexts/UserContext";
import { addToSavings, calcTotals, addTransaction } from "../supabaseQueries";

const useHomepage = () => {
	const { user } = useContext(UserContext);
	const label = ["Spent", "Left"];
	const options = {
		tooltip: { enabled: false },
		colors: ["#f16663", "#00e685"],
		legend: { show: false, onItemHover: { highlightDataSeries: false } },
		dataLabels: {
			formatter: (val, opts) => {
				return label[opts.seriesIndex];
			}
		}
	};

	const [series, setSeries] = useState([]);
	const [maxFunds, setMaxFunds] = useState(1000);
	const [availableFunds, setAvailableFunds] = useState(1000);

	const [nextPaymentDate, setNextPaymentDate] = useState(
		new Date(Date.now() + 604800000)
	);

	async function fetchTotals() {
		if (user.id) {
			setSeries(await calcTotals(user.id));
		}
	}

	const [boyShake, setBoyShake] = useState(false);

	useEffect(() => {
		fetchTotals();
	}, [user]);

	useEffect(() => {
		if (boyShake) {
			setTimeout(() => {
				setBoyShake(false);
			}, 1500);
		}
	}, [boyShake]);

	// uuid,
	// 	amount,
	// 	category,
	// 	isNecessary,
	// 	date,
	// 	isOutgoing,
	// 	description = ""

	function shakeTheBoy() {
		setBoyShake(true);
		addToSavings(user.id, 1);

		const expense = {
			uuid: user.id,
			amount: 1,
			category: "savings",
			date: new Date(Date.now()),
			isOutgoing: true,
			description: "fed the boi"
		};

		addTransaction(expense);
	}

	function chooseDragon() {
		const percentage = maxFunds / availableFunds;
		const thirdOfMax = maxFunds / 3;
		if (percentage > thirdOfMax * 2) {
			return Dragon1;
		}

		if (percentage > thirdOfMax) {
			return Dragon2;
		}

		if (percentage < thirdOfMax) {
			return Dragon3;
		}
	}

	return {
		options,
		series,
		maxFunds,
		availableFunds,
		nextPaymentDate,
		boyShake,
		shakeTheBoy,
		chooseDragon
	};
};

export default useHomepage;
