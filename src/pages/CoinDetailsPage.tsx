
import { useParams } from 'react-router'
const CoinDetailsPage = () => {
    const { coinId } = useParams<{ coinId: string }>()
    return (
        <div>
            <h1> Coin Details  page {coinId}</h1>
        </div>
    )
}

export default CoinDetailsPage
