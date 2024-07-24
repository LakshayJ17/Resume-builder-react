import React, { useState } from "react"
import Practical from "./Components/PracInfo/Practical"
import General from "./Components/GenInfo/General"
import Education from "./Components/EduInfo/Education"

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [educationalInfo, setEducationalInfo] = useState({
    school: '',
    degree: '',
    gradYear: '',
  });

  const [practicalInfo, setPracticalInfo] = useState({
    company: '',
    position: '',
    duration: '',
  });

  const handleGeneralChange = (e) => {
    const { name, value } = e.target;
    setGeneralInfo((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEducationalChange = (e) => {
    const { name, value } = e.target;
    setEducationalInfo((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePracticalChange = (e) => {
    const { name, value } = e.target;
    setPracticalInfo((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('General Info:', generalInfo);
    console.log('Educational Info:', educationalInfo);
    console.log('Practical Info:', practicalInfo);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <form onSubmit={handleSubmit}>
        <General data={generalInfo} handleChange={handleGeneralChange} />
        <Education data={educationalInfo} handleChange={handleEducationalChange} />
        <Practical data={practicalInfo} handleChange={handlePracticalChange} />
        <div className="flex justify-center mt-10">
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;








