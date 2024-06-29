// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Button from "./Button/Button"
import Card from "./Card/Card"

function App() {
  // const [count, setCount] = useState(0)
  // const externalcss = {
  //   color:"green",
  //   background:"red"
  // }

  // let user = "Abdullah"

  return (
    <>
      {/* INLINE CSS */}
      {/* <h1 style={{color:"red",fontSize:"50px"}}>React 2nd Class</h1> */}

      {/* External CSS */}
      {/* <h1 style={externalcss}>React 2nd Class</h1> */}

      {/* Module CSS */}
      {/* <h1>React 2nd Class</h1>
      <Button/> */}

      <Card tittle="React" description="My name is react" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzCMlTnXl7Mh2pnZFmzUvUomVDTK7LjhrQzA&s" />
      <Card tittle="HTML" description="My name is HTML" src="https://seeklogo.com/images/H/html5-logo-EF92D240D7-seeklogo.com.png" />
      <Card tittle="Javascript" description="My name is Javascript" src="https://image.shutterstock.com/image-photo/image-260nw-1186054663.jpg" />
      <Card tittle="Bulma" description="My name is Bulma" src="https://seeklogo.com/images/B/bulma-logo-45B5145BF4-seeklogo.com.png" />
      <Card tittle="Bootstrap" description="My name is Bootstrap" src="https://seeklogo.com/images/B/bootstrap-5-logo-85A1F11F4F-seeklogo.com.png" />
      <Card tittle="Python" description="My name is python" src="https://image.shutterstock.com/image-photo/image-260nw-1764554297.jpg" />
    </>
  )
}

export default App
