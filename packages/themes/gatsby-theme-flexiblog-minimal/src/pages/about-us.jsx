import React from 'react'
import { Layout, Stack, Main } from '@layout'
import PageTitle from '@components/PageTitle'
import Divider from '@components/Divider'
import Seo from '@widgets/Seo'
import { Text } from 'theme-ui'
const styles = {
    count: {
      fontSize: 4
    },
    subheader: {
      fontWeight: `body`,
      color: `omegaDark`
    },
    runninghead: {
      fontWeight: `body`,
      color: `omegaDark`,
      mb: 0
    }
  }
export default props => (
  <Layout {...props}>
    <Seo title='About Us' />
    <Divider />
    <Stack>
      <Main>
        <PageTitle
          header="About Us"
          subheader="WiseBit is a group of highly passionate software engineers dedicated to providing innovative solutions for clients. Utilising our expertise in Go and Rust, we strive to create the most reliable products that are tailored specifically to our client's needs. Our mission is to empower businesses through cutting-edge technology, while consistently delivering the highest standards of customer service. Our vision is for every business out there - big or small - to have access to quality software engineering services that can take their operations into the future with ease and efficiency."
        />
        <Divider />
        <Text variant='h3' sx={styles.runninghead}>
        Contact us anytime via <a style={{color:"#667eea"}} href="mailto:info@wisebit.com">info@wisebit.com</a>
        </Text>
      </Main>
    </Stack>
  </Layout>
)
