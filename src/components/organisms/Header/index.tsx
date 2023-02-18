import Link from 'next/link'
import AppLogo from 'components/atoms/AppLogo'
//import Button from 'components/atoms/Button'
//import {SearchIcon,PersonIcon,ShoppingCartIcon,} from 'components/atoms/IconButton'
//import ShapeImage from 'components/atoms/ShapeImage'
//import Spinner from 'components/atoms/Spinner'
//import BadgeIconButton from 'components/molecules/BadgeIconButton'
//import { useAuthContext } from 'contexts/AuthContext'
//import { useShoppingCartContext } from 'contexts/ShoppingCartContext'
import {
  Search,
  PersonOutline,
  ShoppingCart,
  Person,
} from '@mui/icons-material'

/**
 * ヘッダー
 */
const Header = () => {
  //const { cart } = useShoppingCartContext()
  //const { authUser, isLoading } = useAuthContext()


  //<div className='h-20 p-0 border-b border-solid border-indigo-500'>
  return (
    <header>
      <div className='flex justify-between px-2 mt-4'>
      
        <nav className='flex ml-1 h-14 items-center'>{/** ナビゲート & > span:not(:first-child) */}
          <span className='inline-block mb-4 pr-4'>{/**<NavLink> */}
            {/**<Link href="" passHref> */}
              <div className='animate-bounce cursor-pointer hover:transform hover:duration-1000 hover:scale-y-125 hover:ease-in-out'><AppLogo /></div>
            {/**</Link>  */}
          </span>
          <span className='inline-block mb-4 pr-4'>{/**<NavLink> */}
            {/**<Link href="" passHref> */}
              <div className='cursor-pointer hover:underline'>商品全グループ</div>
            {/**</Link>  */}
          </span>
          <span className='inline-block mb-4 pr-4'>{/**<NavLink> */}
            <div className='block'>
              {/**<Link href="" passHref> */}
                <div className='cursor-pointer hover:underline'>商品Aグループ</div>
              {/**</Link>  */}
            </div>
          </span>
          <span className='inline-block mb-4 pr-4'>{/**<NavLink> */}
            {/**<Link href="" passHref> */}
              <div className='cursor-pointer hover:underline'>商品Bグループ</div>
            {/**</Link>  */}
          </span>
        </nav>

        <nav className='flex ml-1 h-14 items-center'>{/** ナビゲート & > span:not(:first-child) */}
          <span className='inline-block mb-4 pr-4'>{/**<NavLink> */}
            {/**<Link href="" passHref> */}
              <div className='cursor-pointer hover:transform hover:duration-1000 hover:scale-y-125 hover:ease-in-out'>
                <Search style={{ fontSize: 24, color: 'primary' }} />
              </div>
            {/**</Link>  */}
          </span>
          <span className='inline-block mb-4 pr-4'>{/**<NavLink> */}
            {/**<Link href="" passHref> */}
              <div className='cursor-pointer hover:transform hover:duration-1000 hover:scale-y-125 hover:ease-in-out'>
                <ShoppingCart style={{ fontSize: 24, color: 'primary' }} />
              </div>
            {/**</Link>  */}
          </span>
          <span className='inline-block mb-4 pr-4'>{/**<NavLink> */}
            {/**<Link href="" passHref> */}
              <div className='animate-bounce cursor-pointer hover:transform hover:duration-1000 hover:scale-y-125 hover:ease-in-out'>
                <PersonOutline style={{ fontSize: 24, color: 'primary' }} />
              </div>
            {/**</Link>  */}
          </span>
        </nav>

      </div>
    </header>
  )
}

export default Header
