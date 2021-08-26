import { Card, Figure, Title, Content } from "./style"
import Link from "next/link"

export const Post = () => {
  return (
    <Link href="/post/example" passHref>
      <Card>
        <Figure>
          <img alt="Post photo" src="/image1.jpg" />
        </Figure>
        <Title>Post title!</Title>
        <Content>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.
          </p>
        </Content>
      </Card>
    </Link>
  )
}
