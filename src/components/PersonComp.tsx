import PersonType from '../types'

import styles from '../App.module.css'

const personA : PersonType= {
  firstName:"Sam",
  lastName:"Bahadur",
  age: 80,
  country:'Nepal'
}

const PersonInfo: React.FC = () => {
  function greet(person:PersonType) : string {
    const {firstName, lastName, age, country} = person;
    return `${firstName} ${lastName} is ${age} years old and he is from ${country}`;
  }
  return(
    <>
    <h1 className={styles.message}>{greet(personA)}</h1>
    </>
  )
}
export default PersonInfo;