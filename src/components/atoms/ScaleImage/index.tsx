//終着地 Imageタグで画像表示

import Image, { ImageProps } from 'next/image'
import { StaticImageData } from 'next/image'
import { memo } from 'react'
//import BibleImage from '../public/images/bible.jpeg'


/**
type ScaleImageProps =
  | Omit<ImageProps, 'quality'> & {
      containerWidth?: Responsive<string>
      containerHeight?: Responsive<string>
    }
 */

interface ProductCardProps {
  url: StaticImageData
  /**
  title: string
  price: number
  blurDataUrl?: string
  variant?: 'listing' | 'small' | 'detail'
  */
}

//button:hover { @apply transform duration-1000 scale-150;}
//hover: transform duration-1000 scale-150 ease-in-out

//子関数コンポ
const ScaleImage = ({
  url,
  //...props
}:ProductCardProps) => {
  console.log("ScaleImagePage compo ")
  return(
    <div className="hover:transform hover:duration-1000 hover:scale-y-125 hover:ease-in-out">
      {/**<p className="bg-red-300 hover:bg-blue-400 hover:scale-y-125">hello</p> */}
      <Image
        src={url}
        alt="写真集"
        quality="85"
        className='w-36 h-36'
        //className="hover: transform duration-1000 scale-150 ease-in-out"
        //height="320"
        //width="320"  
      />      
      {/**<div className="transition duration-500 transform hover:scale-110 ease-out duration-300"></div>       <div className="transform hover:scale-125 transition duration-500 ease-in-out">*/}
    </div>
  )
}

//memo()で純粋関数コンポをメモ化()　変更のない値は再レンダを省く
const PureScaleImage = memo(ScaleImage);

export default PureScaleImage
