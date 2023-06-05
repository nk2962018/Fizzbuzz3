import  { useState }  from 'react';
import { Button } from './Button';
import './Fizzbuzz.css'

const Fizzbuzz = () =>{

    const [count,setCount] = useState(1);

    const Increment =()=>{
        setCount(count+1)
    }

    const Decrement =()=>{
        setCount((count)=>{
            const result = count-1;
            if(result<1){
                return 1;
            }
            return result;
        })
    }

    return(
        <div>
            <Button onClick={Increment} text='Increment'/>
            <Button onClick={Decrement} text='Decrement'/>

            <div id='counter'>
                {count % 3 === 0 && count % 15 !== 0 && (
                <div className='fizz'>Fizz</div>
                )}
                {count % 5 === 0 && count % 15 !== 0 && (
                <div  className='buzz'>Buzz</div>
                )}
                {count % 15 === 0 && <div  className='fizzbuzz'>FizzBuzz</div>}
                {count % 15 !== 0 && count % 3 !== 0 && count % 5 !== 0 && (
                <div className='count-color'>{count}</div>
                )}
            </div>
        </div>
    )
}

export default Fizzbuzz;
  