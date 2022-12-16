import sampul from "../image/sampul.png";
export default function Hero() {
    return (
        <div
            className="hero min-h-1/2"
            style={{
                backgroundImage: `url("https://awsimages.detik.net.id/community/media/visual/2022/05/22/alquran.jpeg?w=1200")`,
            }}
        >
            <div className="hero-overlay bg-green-600/50"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <img alt="sampul" src={sampul} />
                    <h1 className="mb-5 text-5xl font-bold text-black">
                        AL-QURAN NAKAMA
                    </h1>
                </div>
            </div>
        </div>
    )
}