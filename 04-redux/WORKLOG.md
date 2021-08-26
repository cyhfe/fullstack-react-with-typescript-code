useSelector looses type

Most importantly, you need to ensure that you either mutate the state argument or return a new state, but not both

https://immerjs.github.io/immer/docs/pitfalls