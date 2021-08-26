import Link from "next/link"
import { Post } from "../../shared/types"
import { Container } from "./style"

type BreadcrumbsProps = {
  post: Post
}

export const Breadcrumbs = ({ post }: BreadcrumbsProps) => {
  return (
    <Container>
      <Link href="/">
        <a>Front</a>
      </Link>
      <span>▸</span>
      <Link href={`/category/${post.category}`}>
        <a>{post.category}</a>
      </Link>
    </Container>
  )
}
