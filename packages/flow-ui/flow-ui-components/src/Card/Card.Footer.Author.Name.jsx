import React from 'react'
import { Link as GLink } from 'gatsby'
import { Text, Link } from 'theme-ui'
import rv from '@components/utils/buildResponsiveVariant'

const styles = {
  author: {
    pr: 2
  }
}

const CardFooterAuthorName = ({ variant, omitAuthor, author }) =>
  !omitAuthor && author && author.slug ? (
    <Text sx={{ ...styles.author, variant: rv(variant, 'author') }}>
        <strong>{author.name}</strong>
    </Text>
  ) : null

export default CardFooterAuthorName
