import React from "react"
import { CartWidget } from "./CartWidget"
import { fireEvent } from "@testing-library/react"

describe("CartWidget", () => {
  it("shows the amount of products in the cart", () => {
    const stubCartHook = () => ({
      products: [
        {
          name: "Product foo",
          price: 0,
          image: "image.png"
        }
      ],
    })

    const { container } = renderWithRouter(() => (
      <CartWidget useCartHook={stubCartHook} />
    ))

    expect(container.innerHTML).toMatch("1")
  })

  it("navigates to cart summary page on click", () => {
    const { getByRole, history } = renderWithRouter(() => (
      <CartWidget />
    ))

    fireEvent.click(getByRole("link"))
    
    expect(history.location.pathname).toEqual("/cart")
  })
})
