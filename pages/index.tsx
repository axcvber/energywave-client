import { GetStaticProps, NextPage } from 'next'
import Categories from '../components/home/Categories'
import Faq from '../components/home/Faq'
import Hero from '../components/home/Hero'
import TopSales from '../components/home/TopSales'
import WhyUs from '../components/home/WhyUs'
import SeoSingle from '../components/seo/SeoSingle'
import { HomePage, HomePageDocument, HomePageQuery } from '../generated'
import client from '../graphql/apollo-client'

interface IHomePage {
  pageData: HomePage
}

const Home: NextPage<IHomePage> = ({ pageData }) => {
  return (
    <>
      <SeoSingle seo={pageData.seo} />
      <Hero data={pageData?.hero} />
      <WhyUs data={pageData.whyUs} />
      <TopSales title={pageData.topSales.title} />
      <Faq data={pageData.faq} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query<HomePageQuery>({
    query: HomePageDocument,
  })

  return {
    props: {
      pageData: data.homePage?.data?.attributes,
    },
    revalidate: 60,
  }
}

export default Home
