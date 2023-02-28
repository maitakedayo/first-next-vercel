//画像にテキストを追加する関数コンポ

import PureScaleImage from 'components/atoms/ScaleImage'
import { StaticImageData } from 'next/image'
import { memo } from 'react'

interface ProductCardProps {
  imageUrl: StaticImageData
  title: string
  price: string//number
  isblur: boolean
  handleShowDetails: React.Dispatch<React.SetStateAction<boolean>>
  /**
  blurDataUrl?: string
  variant?: 'listing' | 'small' | 'detail'
  */
}


/**
 * 商品カード
 */
const ProductCard = ({
  imageUrl, //---こいつを使って画像を見つけている
  title,
  price,
  isblur,
  handleShowDetails,
  /**
  blurDataUrl,
  variant = 'listing',
   */
}: ProductCardProps) => { //ここまで引数
  console.log("ProductCardPage compo ")
  return (
    <div className='relative'>
      <div className='relative'>
        <div className='focus:z-50 object-cover'>{/**<ProductCardImageContainer> */}
        {/**動的部 三項演算 blurボカシ*/}
        {!isblur ?
          <div className="blur-sm">
            <PureScaleImage url={imageUrl} />
          </div>
          :    
          <div className="">
            <PureScaleImage url={imageUrl} />
          </div>
        }
        </div>
      </div>

      <div className='relative focus:z-30 top-0 left-0'>
        <div className='mb-4'>{/**<Box> */}
          <label className='font-bold text-lg tracking-wide '>{title}</label>
          <br/>
          <label className='text-lg tracking-wide '>{price}</label>
        </div>
      </div>
      <>
        <button className="w-full bg-gradient-to-br from-blue-300 to-blue-800 hover:bg-gradient-to-tl text-white rounded px-4 py-2"
          onClick={() => handleShowDetails("")}>
          View Details 👀
        </button>
      </>
    </div>
  )
}

//memo()で純粋関数コンポをメモ化()　変更のない値は再レンダを省く
const PureProductCard = memo(ProductCard, (prevProps, nextProps) => (
    prevProps.title === nextProps.title &&
    prevProps.price === nextProps.price &&
    prevProps.imageUrl === nextProps.imageUrl &&
    prevProps.isblur === nextProps.isblur
  )
) // 第二引数に,(prevProps, nextProps) => prevProps.title === nextProps.title　などがないと無意味

export default PureProductCard
