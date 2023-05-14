import Image from "next/image"
import { useState } from "react"

function cn(...classes:string[]){
    return classes.filter(Boolean).join(' ');
}

type Image = {
    id: string,
    href:string,
    imageSrc:string,
    name: string,
    username: string
}

export default function GalleryComponent(){
    return <div className="max-w-2-xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-7-xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            <BlurImage />
            <BlurImage />
            <BlurImage />
            <BlurImage />
            <BlurImage />
            <BlurImage />
            <BlurImage />

        </div>

    </div>
}
function BlurImage(){
    const [isLoading,setLoading] = useState(true);
    return <a href="#" className="group">
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-100 xl:aspect-w-7 xl:aspect-h-8">
            <Image alt=""
            src="https://bit.ly/placeholder-img"
            fill={true}
            style={{objectFit: "cover"}}
            className={cn(`group-hover:opacity-75 duration-700 ease-in-out`,
            isLoading 
            ?   'grayscale blur-2xl scale-110' 
            :   'grayscale-0 blur-0 scale-100'
            )} 
            onLoadingComplete={()=>setLoading(false)}
            />
        </div>
        <h3 className="mt-4 text-sm text-gray-700">Text</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">Short event desc/ pic description</p>
    </a>
}