import Image from "next/image"
import { useState } from "react"

function cn(...classes:string[]){
    return classes.filter(Boolean).join(' ');
}

type Image = {
    id: number,
    src:string,
}


function Modal(props: { onClose: () => void; children: React.ReactNode }) {  
    return (
      <div
        className="fixed top-0 left-0 right-0 bottom-0 z-50"
        onClick={props.onClose}
      >
        {props.children}
      </div>
    );
  }

export default function GalleryComponent(){

    const numImages = 25; // Number of images to loop through
    const imageBasePath = "/gallery/gallery"; // Base path for the images
    const images = [];

    const [selectedImage, setSelectedImage] = useState<Image|null>(null);
    const openModal = (image:Image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };
    for (let i = 1; i <= numImages; i++) {
        const image = {
        id: i,
        src: `${imageBasePath}${i}.jpg`,
        };
        images.push(image);
    }

    return <div className="max-w-2-xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-7-xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {images.map((image) => (
            <BlurImage key={image.id} src={image.src} onClick={() => openModal(image)}/>
            ))}
        </div>
        {selectedImage && (
        <Modal onClose={closeModal}>
          <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="relative w-4/5 h-5/6">
              <button
                className="absolute top-4 right-4 text-white text-xl cursor-pointer"
                onClick={closeModal}
              >
                &times;
              </button>
              <img src={selectedImage.src} className="max-h-full object-contain" />
            </div>
          </div>
        </Modal>
      )}
    </div>
}

function BlurImage(props:{src:string,onClick:()=>void}){
    const [isLoading,setLoading] = useState(true);
    return(
    <div onClick={props.onClick}>
        <div className="aspect-w-1 aspect-h-1 cursor-pointer w-full overflow-hidden rounded-lg bg-gray-100 xl:aspect-w-7 xl:aspect-h-8">
            <Image alt=""
            src={props.src}
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
        {/*<h3 className="mt-4 text-sm text-gray-700">Text</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">Short event desc/ pic description</p>*/}
    </div>
    )
}