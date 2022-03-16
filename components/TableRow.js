import {useState} from 'react'
import Image from "next/image"
import Popup from "./Popup"

const TableRow = ({data}) => {
    const [popup_data, setPopUpData] = useState({});
    const [show_popup,setShowPopup] = useState(false)

    const handleClick = (data) =>{
        setPopUpData(data.data)
        setShowPopup(true)
    }

    const closePopup = () => {
        setPopUpData({})
        setShowPopup(false)
    }
    return (
    <div className="h-full shadow-lg rounded-lg p-2">
        {data.code==200?
        <>
        <Image alt="Vercel logo" src={data.data.thumbnail.path+'.'+data.data.thumbnail.extension} layout="responsive" width={1000} height={1000} />
        <div className="">
            <h3 className="text-center p-2 text-lg text-primary font-bold hover:underline cursor-pointer" onClick={()=>handleClick(data)}>{data.data.name}</h3>
            <h3 className="text-center">{data.data.comics.available} <span className="text-xs text-primary font-bold">comics</span></h3>
            <h3 className="text-center">{data.data.series.available} <span className="text-xs text-primary font-bold">series</span></h3>
            <h3 className="text-center mb-5">{data.data.stories.available} <span className="text-xs text-primary font-bold">stories</span></h3>
            <h3 className="leading-6 tracking-widest">{data.data.description || 'Description not available'}</h3>
        </div>
        </>
        :
        <div className="text-center mt-20">
            <span className="font-bold">Not found!</span>
        </div>
        }
        {show_popup?<Popup data={popup_data} closePopup = {closePopup}/>:''}
    </div>
    )
}

export default TableRow
