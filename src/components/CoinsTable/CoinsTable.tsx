import { useContext, useState } from 'react'

interface Coin {
    id: string;
    name: string;
    symbol: string;
    price: number;
    market_cap: number;
    price_change_24h: number;
    image: string;
    high_24h: number;
}
import { fetchCoinData } from '../../services/fetchCoinData'
import { useQuery } from '@tanstack/react-query';
import { CurrencyContext } from '../../context/CurrencyContext';
import { useNavigate } from 'react-router';
import { PageLoader } from '../PageLoader/PageLoader';

const CoinsTable = () => {

    // TODO: INR symbol and USD symbol
    const { currency } = useContext(CurrencyContext)
    const navigate = useNavigate()

    const [page, setPage] = useState(1);

    const { isPending, isError, data, error } = useQuery({
        queryKey: ['coinData', page, currency],
        queryFn: () => fetchCoinData(page, currency),
        staleTime: 1000 * 60 * 5,

    })



    if (isError) return <div>Error: {error.message}</div>

    const handleCoinRedirect = (id: string) => {
        navigate(`/details/${id}`)
    }


    return (
        <div className='my-5 flex flex-col items-center justify-center gap-5 w-[80vw] mx-auto'>
            <div className='w-full bg-yellow-400 text-black flex py-4 px-2 font-semibold items-center justify-between'>
                {/* header */}
                <div className='basis-[35%]'>
                    Coin
                </div>

                <div className='basis-[25%]'>
                    Price {currency === 'usd' ? '$' : '₹'}
                </div>

                <div className='basis-[20%]'>
                    24 hour change
                </div>
                <div className='basis-[20%]'>
                    Market Cap
                </div>
            </div>
            <div className='flex flex-col w-[80vw] mx-auto'>
                {isPending && <PageLoader />}
                {
                    data && data.map((coin: Coin) => {
                        return (
                            <div onClick={() => handleCoinRedirect(coin.id)} key={coin.id} className='w-full bg-transparent text-white flex py-4 px-2 font-semibold items-center justify-between hover:cursor-pointer hover:bg-gray-800'>

                                <div className='flex items-center justify-start gap-3 basis-[35%]'>
                                    <div className='w-[5rem] h-[5rem]'>
                                        <img className='w-full h-full' src={coin.image} alt={coin.name} loading='lazy' />
                                    </div>

                                    <div className='flex flex-col'>
                                        <div className='text-xl'> {coin.name}</div>
                                        <div className='text-sm'> {coin.symbol}</div>
                                    </div>
                                </div>

                                <div className='basis-[25%]'>
                                    {coin.high_24h}
                                </div>

                                <div className='basis-[20%]'>
                                    {coin.price_change_24h}
                                </div>

                                <div className='basis-[20%]'>
                                    {coin.market_cap}
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <div className="flex gap-4 justify-center items-center">
                <button
                    disabled={page === 1}
                    onClick={() => setPage(page - 1)}
                    className="btn btn-primary btn-wide text-white text-2xl"
                >
                    Prev
                </button>
                <button
                    onClick={() => setPage(page + 1)}
                    className="btn btn-secondary btn-wide text-white text-2xl"
                >
                    Next
                </button>
            </div>
        </div>

    )
}
export default CoinsTable
