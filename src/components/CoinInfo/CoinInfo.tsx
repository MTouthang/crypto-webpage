import React from 'react';
import Alert from '../Alert.tsx/Alert';
import { Line } from "react-chartjs-2";
import { CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import Chart from "chart.js/auto";
import { chartDays } from '../../helper/constant';

interface CoinInfoProps {
    historicData: {
        prices: [number, number][];
    };
    days: number
    setDays: (days: number) => void;
    setCoinInterval: (interval: string) => void;
    currency: string

}


Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const CoinInfo: React.FC<CoinInfoProps> = ({ historicData, setDays, days, setCoinInterval, currency }) => {

    function handleDayChange(e: React.ChangeEvent<HTMLSelectElement>) {
        console.log(e.target.options[e.target.selectedIndex].value);
        const daysSelected = e.target.options[e.target.selectedIndex].value;
        if (Number(daysSelected) === 1) {
            setCoinInterval?.('');
        } else {
            setCoinInterval?.('daily');
        }
        setDays?.(Number(e.target.options[e.target.selectedIndex].value));
    }



    if (!historicData) {
        return <Alert message="No data available" type="warning" />
    }

    return (
        <div
            className="flex flex-col items-center justify-center mt-6 p-6 w-full"
        >

            <div className="h-[500px] w-full">
                <Line

                    data={{
                        labels: historicData.prices.map(coinPrice => {
                            const date = new Date(coinPrice[0]); // CONVERTING UNIX TIMESTAMP TO DATE
                            const time = date?.getHours() > 12 ? `${date?.getHours() - 12}:${date?.getMinutes()} PM` : `${date?.getHours()}:${date.getMinutes()} AM`;
                            return days === 1 ? time : date.toLocaleDateString();
                        }),
                        datasets: [
                            {
                                label: `Price (Past ${days} ${days === 1 ? 'Day' : 'Days'}) in ${currency?.toUpperCase()}`,
                                data: historicData.prices.map(coinPrice => coinPrice[1]),
                            }
                        ],
                    }}

                    options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        elements: {
                            point: {
                                radius: 0
                            }
                        },

                    }}

                />
            </div>



            <div className="flex justify-center mt-5 w-full">
                <select className="select select-primary w-full max-w-xs" onChange={handleDayChange}>
                    {chartDays.map((day, index) => {
                        return (
                            <option selected={days == day.value} key={index} value={day.value}> {day.label}</option>
                        )
                    })}
                </select>


            </div>

        </div>
    );

}

export default CoinInfo;