import BannerImage from '../../assets/cryptobanner.jpg'
const Banner = () => {
    return (
        <div className="w-full h-[20rem] relative">
            <img className="h-full w-full" src={BannerImage} alt="Crypto Banner image" />

            <div className='absolute top-10 left-0 right-0 mx-auto w-[20rem]'>
                <div className='flex flex-col gap-4 items-center'>
                    <div className='font-semibold text-5xl text-white text-center'>
                        Crypto Tracker
                    </div>
                    <div className='font-semibold text-sm text-center text-white text-center'>
                        Get all info regarding Crypto currencies.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
