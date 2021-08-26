import Link from "next/link"
import { Post as PostType } from "../../shared/types"
import { Card, Figure, Title, Lead } from "./style"

type PostProps = {
  post: PostType
}

export const Post = ({ post }: PostProps) => {
  return (
    <Link href={`/post/${post.id}`} passHref>
      <Card>
        <Figure>
          <img alt={post.title} src={post.image} />
        </Figure>
        <Title>{post.title}</Title>
        <Lead>{post.lead}</Lead>
      </Card>
    </Link>
  )
}
