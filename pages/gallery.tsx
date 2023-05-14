import GalleryComponent from "@/components/Gallery";
import Head from "next/head";
export default function Gallery() {
    return <section>
      <Head>
          <title>Gallery - Kaladhaara</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
       <div className="">
            <h1 className='text-3xl font-semibold text-center'>GALLERY</h1>
        </div>
        <div>
          <GalleryComponent />
        </div>
    </section>
}
