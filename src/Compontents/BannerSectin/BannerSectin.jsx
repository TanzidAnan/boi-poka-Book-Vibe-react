import bannerImg from '../../assets/books.jpg'
const BannerSectin = () => {
    return (
        <div className="hero bg-base-200 min-h-[60vh] lg:min-h-[70vh] w-full">
            <div className="hero-content flex-col lg:flex-row-reverse ">
               <div className='w-full lg:w-[50%]'>
               <img
                    src={bannerImg}
                    className=" w-full lg:max-w-sm rounded-lg shadow-2xl" />
               </div>
                <div className='w-full lg:w-[50%]'>
                    <h1 className="text-3xl lg:text-5xl font-bold">Books to freshen up your bookshelf</h1>
                    <button className="btn bg-green-400 mt-4">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default BannerSectin;