import type { NextPage } from 'next'
import Layout from '@/components/base/layout'
import RecentTitleArea from '@/features/titles/RecentTItleArea'

const Top: NextPage = () => {
  return (
    <>
      <Layout>
        <RecentTitleArea />
      </Layout>
    </>
  )
}

export default Top
