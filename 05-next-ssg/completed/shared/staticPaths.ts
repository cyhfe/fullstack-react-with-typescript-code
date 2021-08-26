import { Category } from "./types"

type CategoryStaticParams = {
  id: Category
}

type CategoryStaticPath = {
  params: CategoryStaticParams
}

const categoriesToPreRender: Category[] = [
  "Science",
  "Technology",
  "Arts"
]

export const categoryPaths: CategoryStaticPath[] = categoriesToPreRender.map(
  (category) => ({ params: { id: category } })
)
