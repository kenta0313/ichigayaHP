import { ThemeProvider } from "@material-ui/core/styles"
import React from "react"
import PageTemplate from "../components/layouts/PageTemplate"
import Template from "../components/Template"
import theme from "../components/utils/theme"

const Home: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <PageTemplate title="市ヶ谷コワーキングカフェ">
          <Template />
        </PageTemplate>
      </ThemeProvider>
    </>
  )
}

export default Home