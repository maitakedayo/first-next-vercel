import Link from 'next/link'
//import { GitHubIcon } from 'components/atoms/IconButton'

/**
 * フッター
 */
const Footer = () => {
  return (
    <footer>
      <div className='flex flex-col'>
        
        <div className='mb-4 min-w-full'>{/**<Box> */}     
          <nav className='flex flex-row'>
            <div className='mb-4 pr-4'>{/**<Box> */}
              {/**<Link href="" passHref> */}
                <div className='cursor-pointer hover:underline'>トップ</div>
              {/**</Link>  */}
            </div>
            <div className='mb-4 pr-4'>
              {/**<Link href="" passHref> */}
                <div className='cursor-pointer hover:underline'>お知らせ</div>
              {/**</Link>  */}
            </div>
            <div className='mb-4 pr-4'>
              {/**<Link href="" passHref> */}
                <div className='cursor-pointer hover:underline'>利用規約</div>
              {/**</Link>  */}
            </div>
            <div className='mb-4 pr-4'>
              {/**<Link href="" passHref> */}
                <div className='cursor-pointer hover:underline'>プライバシーポリシー</div>
              {/**</Link>  */}
            </div>
            <div className='flex mb-4 pr-4'>
              {/**<Link href="" passHref> */}
                <div className='cursor-pointer hover:underline'>配送と返品</div>
              {/**</Link>  */}
            </div>   
          </nav>

          <div className='py-2'>{/**<Box> */}
            <>© 2022 Jim Co., Ltd.. All rights reserved.</>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer
    /**<footer>
      <Flex flexDirection={{ base: 'column', md: 'row' }}>
        <Box
          minWidth={{ base: '100%', md: '120px' }}
          paddingRight={{ base: 0, md: 1 }}
        >
          <nav>
            <Box marginBottom={2}>
              <Link href="/" passHref>
                <Anchor as="a">トップ</Anchor>
              </Link>
            </Box>
            <Box marginBottom={2}>
              <Link href="/" passHref>
                <Anchor as="a">採用</Anchor>
              </Link>
            </Box>
            <Box marginBottom={2}>
              <Link href="/" passHref>
                <Anchor as="a">お知らせ</Anchor>
              </Link>
            </Box>
          </nav>
        </Box>
        <Box
          minWidth={{ base: '100%', md: '120px' }}
          paddingRight={{ base: 0, md: 1 }}
        >
          <nav>
            <Box marginBottom={2}>
              <Link href="/" passHref>
                <Anchor as="a">利用規約</Anchor>
              </Link>
            </Box>
            <Box marginBottom={2}>
              <Link href="/" passHref>
                <Anchor as="a">プライバシーポリシー</Anchor>
              </Link>
            </Box>
            <Box marginBottom={2}>
              <Link href="/" passHref>
                <Anchor as="a">配送と返品</Anchor>
              </Link>
            </Box>
          </nav>
        </Box>
        <Box minWidth={{ base: '100%', md: '120px' }}>
          <nav>
            <Anchor
              as="a"
              href="https://github.com/gihyo-book/ts-nextbook-app"
              target="_blank"
            >
              <GitHubIcon size={22} />
            </Anchor>
          </nav>
        </Box>
      </Flex>
      <Box paddingTop={3} paddingBottom={2}>
        <Text>© 2021 Gijutsuhyoronsha Co., Ltd.. All rights reserved.</Text>
      </Box>
    </footer> */

