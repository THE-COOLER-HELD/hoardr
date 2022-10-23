import { useState, useEffect, useContext } from "react";
import UserContext from "../contexts/UserContext";
import { calcTotals } from "../supabaseQueries";
import DragonHappy from "../assets/dragon-happy.gif";
import DragonHearts from "../assets/dragon-hearts.gif";
import DragonNeutral from "../assets/dragon-neutral.gif";
import DragonSad from "../assets/dragon-sad.gif";
import {
	addToSavings,
	addTransaction,
	updateNextPaymentDate
} from "../supabaseQueries";

const useHomepage = () => {
	const { user } = useContext(UserContext);

	const newDate = `${user.next_payment_date.slice(
		-2
	)}/${user.next_payment_date.slice(-5, -3)}/${user.next_payment_date.slice(
		0,
		4
	)}`;

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
	const [dragon, setDragon] = useState(null);
	const [availableFunds, setAvailableFunds] = useState(0);
	const [nextPaymentDate, setNextPaymentDate] = useState(newDate);
	const [boyShake, setBoyShake] = useState(false);
	const [openDate, setOpenDate] = useState(false);
	const [newNextPaymentDate, setNewNextPaymentDate] = useState("");

	useEffect(() => {
		fetchTotals();
	}, [user]);

	useEffect(() => {
		setDragon(chooseDragon());
	}, [series]);

	async function fetchTotals() {
		if (user.id) {
			setSeries(await calcTotals(user.id));
		}
	}

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

	// function shakeTheBoy() {
	// 	setBoyShake(true);
	// 	addToSavings(user.id, 1).then((data) => {
	// 		setSeries((currSeries) => {
	// 			const copy = [...currSeries];
	// 			copy[0] += 1;
	// 			return copy;
	// 		});
	// 		// setAvailableFunds((currFunds) => {
	// 		// 	return currFunds - 1;
	// 		// });
	// 	});
	// }

	const expense = {
		uuid: user.id,
		amount: 1,
		category: "savings",
		date: new Date(Date.now()),
		isOutgoing: true,
		description: "fed the boi"
	};

	function chooseDragon() {
		const random = Math.random() * 100;
		return random >= 50 ? DragonHappy : DragonNeutral;
	}

	function changeDate(e) {
		setNewNextPaymentDate(e.target.value);
	}

	function submitNewDate(e) {
		e.preventDefault();
		console.log({ newNextPaymentDate });
		updateNextPaymentDate(user.id, newNextPaymentDate);
		setOpenDate(false);
	}

	return {
		options,
		series,
		availableFunds,
		nextPaymentDate,
		boyShake,
		dragon,
		setAvailableFunds,
		setNextPaymentDate,
		openDate,
		setOpenDate,
		changeDate,
		submitNewDate,
		newNextPaymentDate,
		setSeries,
		setBoyShake
	};
};

export default useHomepage;
