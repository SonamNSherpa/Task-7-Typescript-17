type PersonType = {
  firstName: string,
  lastName: string,
  age: number,
  country: string
}

type MyExampleType ={
  Occupation: string,
  Interest: string,
  salary: number,
  stillInterested: boolean,
  dataArray : (number|string)[]
}

export type {MyExampleType};

export default PersonType;