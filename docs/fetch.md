# 📡 Data Fetching

- [axios](https://axios-http.com/docs/intro) on server-side.
- [react-query](https://react-query.tanstack.com/) on client-side with `axios` as a fetcher.

## Usage

Both server-side and client-side can share the axios instance create at [utils/$axios](https://github.com/sgcodigo/nextjs_boilerplate_2022/tree/main/utils/$axios.ts).

```js
import $axios from 'utils/$axios'

export async function getServerSideProps({ params }: any) {
  // !Note here no need to subtract `data` from `respond`
  // $axios intercept the respond and return respond.data
  const posts = await $axios.get('/posts/')
  return { props: { posts } }
}
```

```js
import $axios from 'utils/$axios'

const Post = ({ id }) => {
  const { data, status } = useQuery('post', () => $axios.get(`/posts/${id}`))
}
```
