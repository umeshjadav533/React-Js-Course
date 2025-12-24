// useMemo and memo
// useMemo :- remember old value not perform heavy function frequently
// memo :- when parent rendred then not child component renrend frequently


// import WithoutUseMomo from "./WithoutUseMomo"
// import WithUseMemo from "./WithUseMemo"
// import WithoutMemo from "./WithoutMemo"
import { WithMemo } from "./WithMemo"

const App = () => {
  return (
    <div>
      {/* <WithoutUseMomo /> */}
      {/* <WithUseMemo /> */}
      {/* <WithoutMemo /> */}
      <WithMemo />
    </div>
  )
}

export default App
