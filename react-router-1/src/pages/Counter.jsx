import Navigation from "../components/Navigation";
function Counter(props) {

  return (
    <>
    <Navigation />
   <h1>Counter</h1>
   <div className="buttonDiv">
    <button onClick={() => {
        props.setCount(props.count + 1)
    }}>+</button>
   <button onClick={() => {
        props.setCount(props.count - 1)
    }}>-</button>
    </div>
    </>
  )
}

export default Counter