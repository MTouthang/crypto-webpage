import { useQuery } from "@tanstack/react-query"
import CoinInfo from "./CoinInfo"
import { fetchCoinHistoricData } from "../../services/fetChCoinHistoricData"
import { useContext, useState } from "react"
import { CurrencyContext } from "../../context/CurrencyContext"
import Alert from "../Alert.tsx/Alert"
import { PageLoader } from "../PageLoader/PageLoader"



interface CoinInfoContainerProps {
    coinId: string;
}

const CoinInfoContainer: React.FC<CoinInfoContainerProps> = ({ coinId }) => {

    const { currency } = useContext(CurrencyContext)

    const [days, setDays] = useState(7)
    const [interval, setCoinInterval] = useState<string>("")

    const { data: historicData, isLoading, isError } = useQuery({
        queryKey: ['coinHistoricData', coinId],
        queryFn: () => fetchCoinHistoricData(coinId, interval, days, currency),
        staleTime: 1000 * 60 * 5,

    })

    if (isLoading) {
        return <PageLoader />
    }

    if (isError) {
        return <Alert message="Error fetching data" type="error" />
    }


    return (
        <div>
            <CoinInfo historicData={historicData} setDays={setDays} days={days} setCoinInterval={setCoinInterval} currency={currency} />
        </div>
    )
}

export default CoinInfoContainer
