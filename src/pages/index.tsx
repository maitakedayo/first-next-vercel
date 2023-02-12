import { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

type ISRProps = {
  message: string
}

//親関数コンポ ISR(インクリメンタルStaticRender)有効期限付き静的サイト // ISRPropsを受け付けるNextPage（ページ）の型
const HomePage: NextPage<ISRProps> = (props) => {  
  const { message } = props //分割代入で引数呼び出し

  //ノーマル関数
  const timestamp = new Date().toLocaleString()
  //ノーマル関数
  const log = `${timestamp} にこのページのgetStaticPropsが実行されました`
  console.log("ISR HomePage compo " + log)

  const router = useRouter()

  //ノーマル関数 jsxを返す
  if (router.isFallback) {
    // フォールバック用のページを返す
    return <div>Loading...</div>
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>このページはISRによってビルド時に生成されたページです。</p>
        <p className="bg-green-400" >{message}</p>
      </main>
    </div>
  )
}

//子独自フックlike (props用) ---SSG(静的サイト生成StaticGene)と同じ getStaticPropsで引数を使う
export const getStaticProps: GetStaticProps<ISRProps> = async (
  context
  ) => { //引数のcontextは実行関連の情報オブジェクト
  //ノーマル関数
  const timestamp = new Date().toLocaleString()
  //ノーマル関数
  const message = `${timestamp} にこのページのgetStaticPropsが実行されました`

  return {
    props: {
      message,
    },
    // ページの有効期間を秒単位で指定
    revalidate: 60,
  }
}

export default HomePage