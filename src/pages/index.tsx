import { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import PureProductCard from 'components/organisms/ProductCard/index'
import glassImage from '../../public/Images/glass.png'
import railsImage from '../../public/Images/React_TS_rails-API.png'
import herokuImage from '../../public/Images/heroku_app_service.png'
//import railsImage from '../../public/Images/heroku_vuejs_flask_db.png'
import { StaticImageData } from 'next/image'
import Layout from 'components/templates/Layout'
import { useState } from 'react'
import { ChangeEvent } from "react"
import SigninForm from 'components/organisms/SigninForm/index'
import useSWR from 'swr'


type SSGProps = {
  message: string
}

interface ProductCardProps {
  imageUrl: StaticImageData
  title: string
  price: string//number
  /**
  blurDataUrl?: string
  variant?: 'listing' | 'small' | 'detail'
  */
}

//list
const products = [
  {title: 'サンプルA', price: "1000", imageUrl: herokuImage},
  {title: 'サンプルB', price: "2000", imageUrl: railsImage},
  {title: 'サンプルC', price: "3000", imageUrl: glassImage},

]

//親関数コンポ SSG(静的サイト生成StaticGene) getStaticPropsで引数を使う
const HomePage: NextPage<SSGProps> = (props) => {  
  const { message } = props //分割代入で引数呼び出し
  const [loginflag, setLoginflag] = useState<boolean>(false);
  const [formpass, setFormpass] = useState<string>("")
  //const [selectedBook, setSelectedBook] = useState({})
  const [isOpen, setIsOpen] = useState<boolean>(false)

  //アドレスを変えるとレンダーされるようにする
  const address = '/api/hello?id=0'

  const func = (...args:Parameters<typeof fetch>) => fetch(...args).then(res => res.text()).then(text => JSON.parse(text)['password'])
  const { data, error } = useSWR<string, Error>(address, func)

  //ノーマル関数
  const changeFlag = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginflag((loginflag) => e.target.checked)  //---★再レンダ条件1 Props(リレー)や内部状態(State)が更新されたコンポ
  }

  //ノーマル関数
  const doLogoutAction = ()=>{
    setFormpass(() => "nillnillnill")
  }


  //ノーマル関数
  const timestamp = new Date().toLocaleString()
  //ノーマル関数
  const log = `${timestamp} にこのページのgetStaticPropsが実行されました`
  console.log("ISR or SSG HomePage compo " + log)

  const router = useRouter()

  //ノーマル関数 jsxを返す
  if (router.isFallback) {
    // フォールバック用のページを返す
    return <div>Loading...</div>
  }

  //ノーマル関数
  const handleShowDetails = () => { 
    setIsOpen((arg) => !arg)
  }

  //ノーマル関数
  const doOpen = () =>{ 
    setIsOpen((arg) => !arg)
  }
  
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Layout>
        <main>
          {!(data === formpass)?
            <div>
              <SigninForm setFormpass={setFormpass} />

              <div className="flex justify-center py-1 px-2">
                {/**自作のアニメーションanimate-disappear tailwind.config.jsに設定*/}
                <div className="animate-appear flex w-96 flex-col justify-center justify-items-center text-center text-red-600 text-xs pl-2">
                  <p className="w-full rounded px-4 pb-1">pass不一致</p>
                </div>       
              </div>
            </div>
            :
            <div className="flex justify-center py-2 px-2 ">
              <div className="flex w-96 flex-col justify-center justify-items-center">{/**中央配置 */}
                <button onClick={doLogoutAction} className="w-full bg-gradient-to-br from-blue-300 to-blue-800 hover:bg-gradient-to-tl text-white rounded px-4 py-2" type="submit">
                  LoggingIn (logoutボタン)
                </button>
              </div>
            </div>
          }

          <div className="flex p-6 justify-center bg-indigo-500">
            <div className="flex flex-row w-full justify-between items-center">
              <div className="w-full">
                <h1 className="w-full mb-0 text-white text-xl">sample</h1>
                <h1 className="w-full mb-0 text-white text-xl">商品販売サイト</h1>
              </div>
              <div className="w-full">
                <p className="w-full mb-0 text-white text-lg">Next.jsアプリ開発/このページはSSGによってビルド時に生成されたページです。</p>
                <p className="w-full mb-0 text-white text-lg">{message}</p>
              </div>
            </div>
          </div>
          
          {(data === formpass)?
          <div className="form-group h6 pt-3 px-6">
            <input type="checkbox" className="form-check-input" id="check1" onChange={changeFlag} />
              {/** <input type="checkbox"></input>のエレメントは0,1を返す？？*/}
            <label className="form-check-label" htmlFor="check1">
              Change blur style.
            </label>
          </div>
          :
          <div></div>
          }

          <section>    
            <p className="w-full mb-0 font-bold  text-xl px-8">商品Aグループ</p>
            <div className="flex w-full px-6">{/**overflow-scroll 付けてもよい*/}
              {products.map((p: ProductCardProps, i: number) => (
                <div className="mb-4 pl-2" key={i}>
                  <PureProductCard
                    title={p.title}
                    price={p.price}
                    handleShowDetails={handleShowDetails}
                    imageUrl={p.imageUrl}
                    isblur={loginflag}
                  />
                </div>
              ))}
            </div>
          </section>

          <section>    
            <p className="w-full mb-0 font-bold text-xl px-8">商品Bグループ</p>
            <div className="flex w-full px-6">{/**overflow-scroll 付けてもよい*/}
              {products.map((p: ProductCardProps, i: number) => (
                <div className="mb-4 pl-2" key={i}>
                  <PureProductCard
                    title={p.title}
                    price={p.price}
                    handleShowDetails={handleShowDetails}
                    imageUrl={p.imageUrl}
                    isblur={loginflag}
                  />
                </div>
              ))}
            </div>
          </section>
          {isOpen ? (
              <div className="flex items-center justify-center fixed top-0 left-0 w-full h-full bg-gray-800 ">{/**id="overlay" */}
                <div className="z-10 w-6/12 p-2 rounded-lg bg-gray-200">{/**id="book-details" */}
                  <button onClick={() => doOpen()}>
                    Close ✖️
                  </button>
                  <div className="bg-gray-100 rounded-xl m-2 p-2">  
                    <p className="text-xl text-grey-800 mb-2">Before Pass</p>
                    <p>ID: </p>
                    <p>AccountName: </p>
                  </div>
                  <div className="bg-gray-100 rounded-xl m-2 p-2">         
                    <p className="text-xl text-grey-800 mb-2">Edit Mode</p>
                    <div className="flex justify-around" /** 行並び　ボタンのみ右端に配置する*/>
                      <div className="flex form-group p-2" /** 行並び*/>
                        <label>New AccountName:</label>
                      </div>
                    </div>
                    <div className="flex justify-around" /** 行並び　ボタンのみ右端に配置する*/>
                      <div className="flex form-group p-2" /** 行並び*/>
                        <label>New Pass:</label>
                      </div>
                    </div>
                    <button className="bg-green-400 hover:bg-green-300 text-white rounded-lg px-4 py-2 ml-2"
                      >ENTER</button> 
                  </div>
                </div>
              </div>
            ) : null
          }


        </main>
      </Layout>
    </div>
  )
}

///子独自フックlike (props用) ---SSG(静的サイト生成StaticGene) getStaticPropsで引数を使う
export const getStaticProps: GetStaticProps<SSGProps> = async (
  context
  ) => { //引数のcontextは実行関連の情報オブジェクト
  
  //ノーマル変数
  const timestamp = new Date().toLocaleString();
  //ノーマル変数
  const message = `${timestamp} にgetStaticPropsが実行されました`;
  console.log(message);
  return {
    // ここで返したpropsを元にページコンポーネントを描画する
    props: {
      message,
    },
  };
};

export default HomePage