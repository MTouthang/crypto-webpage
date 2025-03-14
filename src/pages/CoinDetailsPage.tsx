import { useParams } from 'react-router'
import { fetchCoinDetails } from '../services/fetchCoinDetails'
import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import { CurrencyContext } from '../context/CurrencyContext'

const CoinDetailsPage = () => {
    const { coinId } = useParams<{ coinId: string }>()
    const { currency } = useContext(CurrencyContext)

    const { isPending, isError, data: coin, error } = useQuery({
        queryKey: ['coinDataDetails', coinId],
        queryFn: () => fetchCoinDetails(coinId as string),
        staleTime: 1000 * 60 * 5,
    })


    if (isPending) return <div>Loading...</div>
    if (isError) return <div>Error: {error.message}</div>



    return (
        <div className='flex flex-col md:flex-row'>
            <div className='md:w-1/3 w-full flex flex-col items-center justify-center gap-5 md:mt-0 border-r-2 border-gray-300'>
                <img src={coin?.image?.large} alt={coin?.name} className='h-52 mb-5' />
                <h1
                    className='text-4xl font-bold text-white text-center mt-5 md:mt-0'
                > {coin?.name}</h1>

                <p className='w-full px-6 py-4 text-justify'> {coin?.description?.en}</p>

                <div
                    className="w-full flex flex-col md:flex-row md:justify-around"
                >
                    <div
                        className="flex items-center mb-4 md:mb-0"
                    >
                        <h2 className="text-xl font-bold ">
                            Rank
                        </h2>
                        <span className="ml-3 text-xl ">
                            {coin?.market_cap_rank}
                        </span>
                    </div>

                    <div className="flex items-center mb-4 md:mb-0">
                        <h2 className="text-xl text-yellow-400 font-bold ">
                            Current Price
                        </h2>
                        <span className="ml-3 text-xl ">
                            {coin?.market_data.current_price[currency]}
                        </span>
                    </div>

                </div>
            </div>

            <div className='md:w-2/3 w-full p-6'>
                Coin Information
            </div>
        </div>


    )
}

export default CoinDetailsPage
