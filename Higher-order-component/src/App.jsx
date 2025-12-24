// Higher order component
// use
//  1. Authentication / protected routes
//  2. role-based access control
//  3. UI layout wrappers
//  4. Error boundries  
//  5. Logging and analytics
//  6. Wrapping component with providers

import Greeting from "./Greeting"
import GreetingWithStyle from "./GreetingWithStyle"
import PostListWithData from "./PostListWithData"
import ProtectedDashBoard from "./ProtectedDashBoard"

//  7. managing component rendring conditions
const App = () => {
  return (
    <div>
      <Greeting name="Jadav umesh"/>
      <GreetingWithStyle />
      <ProtectedDashBoard />
      <PostListWithData />
    </div>
  )
}

export default App
