import Navigation from "../components/Navigation";

function CurrentCount(props) {
  return (
    <>
    <Navigation />
    <p className="count">{props.count}</p>
    </>
  )
}

export default CurrentCount