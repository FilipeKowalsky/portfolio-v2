import"./style/reset.css"
import"./style/text.css"
import"./components/button/button.css"
import"./components/main/main.css"
import"./components/header/header.css"
import"./components/footer/footer.css"
import { Header } from "./components/header/header"
import { Main } from "./components/main/main";
import { Footer } from "./components/footer/footer";

function App() {

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App
