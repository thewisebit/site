import React from 'react'
import { Layout, Stack, Main, Sidebar, PreFooter } from '@layout'
import CardList from '@components/CardList'
import Pagination from '@components/Pagination'
import Divider from '@components/Divider'
import Seo from '@widgets/Seo'
import NewsletterExpanded from '@widgets/NewsletterExpanded'

const Posts = ({
  data: { featuredPosts = {}, paginatedPosts = {} },
  ...props
}) => {
  const { pageContext: { services = {}, basePath } = {} } = props

  return (
    <Layout {...props}>
      <Seo title='Home' />
      <Divider />
      <Stack>
        <Main>
          <CardList
            nodes={paginatedPosts.nodes}
            variant={['horizontal', 'vertical']}
            columns={[1, 2, 3, 3]}
            omitMedia
          />
        </Main>
      </Stack>
      <Divider />
      <PreFooter>
        <Pagination {...paginatedPosts.pageInfo} basePath={basePath} />
        {services.mailchimp && (
          <>
            <Divider />
            <NewsletterExpanded simple />
          </>
        )}
      </PreFooter>
    </Layout>
  )
}

export default Posts
