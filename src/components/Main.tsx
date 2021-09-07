import { ReactElement } from "react";

function Main(props:{ children: ReactElement}) {
  return (
    <main className="main">
      {props.children}
    </main>
  )
}

export default Main;