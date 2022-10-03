import { createHttpLink } from "@apollo/client"

const link = createHttpLink({
  uri: process.env.NEXT_PUBLIC_ENDPOINT,
})

export default link;
