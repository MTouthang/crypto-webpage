import { useEffect } from 'react'

const CoinsTable = () => {

    const downloadCoins = async () => {
        // const response = await fetch('https://api.coingecko.com/api/v3/coins/list')
        // const data = await response.json()
        // console.log(data)
    }

    useEffect(() => {
        downloadCoins()
    }, [])

    return (
        <div>
            Coin table
        </div>
    )
}

export default CoinsTable
