import "./SomeList.css"

const SomeList = () => {
  const list = [{
    id: 1,
    content: "A",
  },{
    id: 2,
    content: "B",
  },{
    id: 3,
    content: "C",
  }]

  const items = list.map(item => {
    return <li key={ item.id }>{ item.content }</li>
  })

  return <ul className="SomeList">{items}</ul>
}

export default SomeList
