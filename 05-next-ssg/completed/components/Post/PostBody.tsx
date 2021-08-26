import Link from "next/link"
import { Post } from "../../shared/types"
import { Breadcrumbs } from "../../components/Breadcrumbs"
import { Title, Figure, Content, Meta } from "./PostBodyStyle"

type PostBodyProps = {
  post: Post
}

export const PostBody = ({ post }: PostBodyProps) => {
  return (
    <div>
      <Breadcrumbs post={post} />
      <Title>{post.title}</Title>
      <Figure>
        <img src={post.image} alt={post.title} />
      </Figure>

      <Content dangerouslySetInnerHTML={{ __html: post.content }} />

      <Meta>
        <span>{post.date}</span>
        <span>&middot;</span>
        <Link href={`/category/${post.category}`}>
          <a>{post.category}</a>
        </Link>
        <span>&middot;</span>
        <a href={post.source}>Source</a>
      </Meta>
    </div>
  )
}
