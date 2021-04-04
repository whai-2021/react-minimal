const React = require('react')
const ReactDOM = require('react-dom')

const data = {
  name: 'humans',
  showPets: Math.random() > 0.33,
  happy: Math.random() > 0.5,
  pets: [{
    name: 'fido', type: 'giraffe'
  },
  { name: 'sparky', type: 'gorilla' },
  { name: 'sparky', type: 'gorilla' }
  ]
}

function helloTemplate (props) {
  console.log(props)
  const name = 'whai 2021'
  return (
    <>
      <Greeting name={name} />
      <h2>My pets are</h2>
      <ul>
        { props.showPets && <Pets animals={props.pets} />}
      </ul>
      <div>
        <Feelings happy={props.happy} />
      </div>
    </>
  )
}

function Feelings (props) {
  return props.happy ? 'I am happy' : 'I am sad'
}

function Pets (props) {
  console.log(props)
  return props.animals.map((pet, i) => <Pet key={i} pet={pet} />)
}

function Pet ({ pet }) {
  return <li>{pet.name} - {pet.type}</li>
}

function Greeting (props) {
  return <div>hello {props.name}</div>
}

const view = helloTemplate(data)

const placeToMount = document.getElementById('root')

ReactDOM.render(view, placeToMount)
