import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const Main = styled.h2`
  font-size: 10rem;
  line-height: 11rem;
  font-family: ${(p) => p.theme.fonts.accent};
  width: 100%;
`

const Description = styled.div`
  width: 100%;
`

const NotFound = () => {
  return (
    <Container>
      <Main>404</Main>
      <Description>Oops! The page not found!</Description>
    </Container>
  )
}

export default NotFound
