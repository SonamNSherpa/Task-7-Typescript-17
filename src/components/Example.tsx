import { MyExampleType } from "../types";
import React from "react";
import styles from '../App.module.css'

const TryExample:React.FC =() => {
  let occupation1:MyExampleType['Occupation'] = 'Java Programmer';
  let interest1:MyExampleType['Interest'] ='Full stack developer';
  let salary1:MyExampleType['salary'] = 100;
  let stillInterested:MyExampleType['stillInterested'] = true;
  let dataArray:MyExampleType['dataArray'] = ['java', 'python', 190];

  function combinedData(str1:MyExampleType['Occupation'], str2:MyExampleType['salary']):MyExampleType['Occupation']{
    const data = `${str1} and salary is ${str2}`;
    return data;
  }

  occupation1 = "React Developer";
  salary1 = 200;

  

  return (
    <>
    
    <p className={styles.annotation}>{combinedData(occupation1, salary1)}</p>
    <p className={styles.annotation}>My interest is {interest1}</p>
    <p className={styles.annotation}>I am still interested: {stillInterested.toString()}</p>
    <p className={styles.annotation}>My data array has values: {dataArray.join()}</p>
    </>
 )
}

export default TryExample;