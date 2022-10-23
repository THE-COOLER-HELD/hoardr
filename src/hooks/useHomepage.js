import { useState, useEffect } from "react"

const useHomepage = () => {
    const label = ["Spent", "Left", "Savings"];
    const options = {
        legend: { show: false },
        dataLabels: {
            formatter: (val, opts) => {
                console.log(val, opts);
                return label[opts.seriesIndex];
            },
        },
    };

    const [series, setSeries] = useState([24, 50, 20]);
    const [maxFunds, setMaxFunds] = useState(1000);
    const [availableFunds, setAvailableFunds] = useState(1000);

    const [nextPaymentDate, setNextPaymentDate] = useState(
        new Date(Date.now() + 604800000)
    );

    const [boyShake, setBoyShake] = useState(false);

    useEffect(() => {
        if (boyShake) {
            setTimeout(() => {
                setBoyShake(false);
            }, 1500);
        }
    }, [boyShake]);

    function shakeTheBoy() {
        setBoyShake(true);
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

    return { options, series, maxFunds, availableFunds, nextPaymentDate, boyShake, shakeTheBoy, chooseDragon }
}

export default useHomepage