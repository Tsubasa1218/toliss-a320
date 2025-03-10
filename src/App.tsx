import { Router, Route, A, RouteSectionProps } from '@solidjs/router'

function Home() {
  return <h1>Home</h1>;
}

function About() {
  return <h1>About</h1>;
}

function Root() {
  return <h1>Root</h1>;
}

function Layout(props: RouteSectionProps) {
  return <>
    <nav>
      <ol>
        <li><A href="home">Home</A></li>
        <li><A href="about">About</A></li>
      </ol>
    </nav>
    {props.children}
  </>
}

function App() {
  return (
    <Router root={Layout}>
      <Route path="/" component={Root}/>
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
    </Router>
  )
}

export default App
