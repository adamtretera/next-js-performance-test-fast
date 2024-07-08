import Image from "next/image";

export function Card({title, description, image}: {title:string, description:string, image:string}) {
    return (

    <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <Image  className="w-full" src={"https:"+image} width={200} height={200} alt={title}/>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                    <h2>{title}</h2>
                </div>
                <p className="text-gray-700 text-base">
                  {description}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>
    </div>

    );
}