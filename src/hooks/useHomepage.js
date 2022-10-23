import { useState, useEffect, useContext } from 'react';
import UserContext from '../contexts/UserContext';
import { calcTotals } from '../supabaseQueries';
import DragonHappy from '../assets/dragon-happy.gif';
import DragonHearts from '../assets/dragon-hearts.gif';
import DragonNeutral from '../assets/dragon-neutral.gif';
import DragonSad from '../assets/dragon-sad.gif';


const useHomepage = () => {
	const { user } = useContext(UserContext);

	const newDate =`${user.next_payment_date.slice(-2)}/${user.next_payment_date.slice(-5,-3)}/${user.next_payment_date.slice(0, 4)}`;

	const label = ['Spent', 'Left'];
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
	const [availableFunds, setAvailableFunds] = useState(0);
	const [nextPaymentDate, setNextPaymentDate] = useState(
		newDate
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
		const maxFunds = series[1];
		const percentage = maxFunds / series[0]
		
		const thirdOfMax = maxFunds / 3;
		if (percentage > thirdOfMax * 2) {
			return DragonHappy;
		}

		if (percentage > thirdOfMax) {
			return DragonNeutral;
		}

		if (percentage < thirdOfMax) {
			return DragonSad;
		}
	}

	return {
		options,
		series,
		availableFunds,
		nextPaymentDate,
		boyShake,
		shakeTheBoy,
		chooseDragon,
        setAvailableFunds,
        setNextPaymentDate
	};
};

export default useHomepage;
