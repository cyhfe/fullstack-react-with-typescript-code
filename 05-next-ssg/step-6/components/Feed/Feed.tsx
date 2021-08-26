import { Section } from "../Section"
import { Post, Category } from "../../shared/types"

type FeedProps = {
  posts: Post[]
  categories: Category[]
}

export const Feed = ({ posts, categories }: FeedProps) => {
  return (
    <>
      {categories.map((category) => {
        const inSection = posts.filter(
          (post) => post.category === category
        )

        return (
          <Section
            key={category}
            title={category}
            posts={inSection}
            isCompact
          />
        )
      })}
    </>
  )
}
