import Link from "next/link"
import Image from "next/image"
import { Post as PostType } from "../../shared/types"
import { Card, Figure, Title, Lead } from "./PostCardStyle"

type PostProps = {
  post: PostType
}

export const PostCard = ({ post }: PostProps) => {
  return (
    <Link href={`/post/${post.id}`} passHref>
      <Card>
        <Figure>
          <Image
            alt={post.title}
            src={post.image}
            loading="lazy"
            layout="responsive"
            objectFit="cover"
            objectPosition="center"
            width={320}
            height={180}
            sizes="(min-width: 1000px) 320px, 100vw"
          />
        </Figure>
        <Title>{post.title}</Title>
        <Lead>{post.lead}</Lead>
      </Card>
    </Link>
  )
}
