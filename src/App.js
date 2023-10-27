import { createContext, useEffect, useState } from 'react';
import './App.css';
import ImageSection from './Components/ImageSection/ImageSection';
import Navbar from './Components/Navbar/Navbar';
import Step1 from './Components/Step1/Step1';
import Step2 from './Components/Step2/Step2';
import Step3 from './Components/Step3/Step3';
import Step4 from './Components/Step4/Step4';
export const appcontext=createContext();
function App() {
  const initialvalue={
    step1:false,
    step2:false,
    step3:false,
    step4:false
  }
  const [state,setState]=useState(initialvalue);
  const changeState=(e)=>{
    if(e=="step1"){
      setState({...initialvalue,step1:!state.step1})
    }
    if(e=="step2"){
      setState({...initialvalue,step2:!state.step2})
    }
    if(e=="step3"){
      setState({...initialvalue,step3:!state.step3})
    }
    if(e=="step4"){
      setState({...initialvalue,step4:!state.step4})
    }
  }
  useEffect(()=>{
    console.log(state)
  },[state])
  return (
    <appcontext.Provider value={{state,changeState}}>
    <div >
      <Navbar />
      <ImageSection />
      <Step1 />
      <Step2 />
      <Step3 />
      <Step4 />
    </div>
    </appcontext.Provider>
  );
}
export default App;