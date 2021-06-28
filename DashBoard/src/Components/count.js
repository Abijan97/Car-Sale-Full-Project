import React,{useEffect,useState} from 'react';
import { useForm } from './useForm';
import { useFetch } from './useFetch';

const Counter =()=>{
    const [values,handleChange]=useForm({email:'',password:''});

//  const [count, setCount] = useState(initialState)
const {data,loading} = useFetch("http://numbersapi.com/43/trivia");


    return(
        
        <div>
            <div>
                {!data ? "..loading":data}
            </div>
        <input 
        name="email"
        value={values.email}
        onChange={handleChange}
        />
        <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
        />
        <button>Submit</button>
        </div>

    )
}

export default Counter;