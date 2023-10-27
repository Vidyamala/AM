import './App.css';
import ImageSection from './Components/ImageSection/ImageSection';
import Navbar from './Components/Navbar/Navbar';
import Step1 from './Components/Step1/Step1';
import Step2 from './Components/Step2/Step2';
import Step3 from './Components/Step3/Step3';
import Step4 from './Components/Step4/Step4';
function App() {
  return (
    <div >
      <Navbar />
      <ImageSection />
      <Step1 />
      <Step2 />
      <Step3 />
      <Step4 />
    </div>
  );
}
export default App;