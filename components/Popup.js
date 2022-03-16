const Popup = ({data,closePopup}) => {
    return (
    <div className="inset-0 z-10 fixed p-2 bg-white grid place-items-top">
        <div className="items-center rounded-lg shadow-lg mx-1 sm:mx-32 sm:mt-10 p-4  overflow-y-auto">
            <div className="font-bold flex justify-between p-2 text-primary shadow-lg">
                <span>{data.name} (#{data.id})</span>
                <span className="cursor-pointer" onClick={closePopup}>Close</span>
            </div>
            <div className="p-4 font-medium">
                <span>Modified on {new Date(data.modified).toDateString()}</span>
                {['comics','series','stories','events'].map(key =>
                <details className="mt-4" key={key}>
                    <summary><span className="capitalize">{key}</span> ({data[key].available})</summary>
                    <ul className="p-4">
                        {data[key].items.map(el => <li key={el.name} className="p-2">{el.name}</li>)}
                    </ul>
                </details>
                )}
                <details className="mt-4">
                    <summary>URL's</summary>
                    <ul className="p-4">
                        {data.urls.map(el => <li key={el.url} className="p-2">
                            <a href={el.url} className="capitalize text-blue-500 hover:text-blue-600 hover:underline" target={"_blank"} rel="noreferrer">{el.type}</a>
                        </li>)}
                    </ul>
                </details>
            </div>
        </div>

    </div>
    )
}

export default Popup