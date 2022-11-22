export default function Footer(){
    return(
        <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 items-center p-10 justify-items-center">
                <p className="text-[30px] font-medium">Hubungi Kami</p>
                <p>nakamaalquran@gmail.com</p>
                <p className="text-sm px-20">Jl. Soekarno Hatta No.KM 15, Karang Joang, Kec. Balikpapan Utara, Kota Balikpapan, Kalimantan Timur 76127</p>
            </div>
            <div className="w-full bg-white h-[1px]"></div>
            <div className="flex justify-center items-center p-10 text-xs">
                <p className="">All Rights Reserverd by Tipes Club 2022</p>
            </div>
        </div>
    )
}