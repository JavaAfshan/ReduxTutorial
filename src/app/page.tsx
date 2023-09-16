// import Hero from "@/components/views/Hero";
"use client";
import {useSelector,useDispatch } from 'react-redux';
import {decrease, increase} from '../store/counterSlice/counter'
export default function Home() {
  const selector:any=useSelector((state)=>state);
  const dispatch = useDispatch()

  console.log(selector);
  return (
    <div>
      {/* <Hero/> */}
   
    <button
          onClick={() => dispatch(increase(10))}
          className="bg-pink p-2 m-2 "
        >+</button> {selector.counterReducer}
           <button
          onClick={() => dispatch(decrease(10))}
          className="bg-pink p-2 m-2 "
        >-</button>

    </div>
  );
}
