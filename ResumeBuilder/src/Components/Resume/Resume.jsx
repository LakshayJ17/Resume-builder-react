import React from 'react';

const Resume = ({ generalInfo, educationalInfo,skillsInfo, practicalInfo, handleEdit }) => {
  return (
    <div className="max-w-2xl mx-auto mt-10 p-8 border rounded-lg shadow-lg bg-white">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">{generalInfo.name}</h1>
        <p className="text-lg text-gray-600">{generalInfo.email} | {generalInfo.phone}</p>
      </header>
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 border-b-2 border-gray-200 pb-2 mb-4">Education</h2>
        <div>
          <h3 className="text-lg font-medium text-gray-800">{educationalInfo.school}</h3>
          <p className="text-sm text-gray-600">{educationalInfo.degree}, Class of {educationalInfo.gradYear}</p>
        </div>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 border-b-2 border-gray-200 pb-2 mb-4">Skills</h2>
        <div>
          <h3 className="text-lg font-medium text-gray-800">{skillsInfo.skill1}</h3>
          <h3 className="text-lg font-medium text-gray-800">{skillsInfo.skill2}</h3>
          <h3 className="text-lg font-medium text-gray-800">{skillsInfo.skill3}</h3>
        </div>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 border-b-2 border-gray-200 pb-2 mb-4">Experience</h2>
        <div>
          <h3 className="text-lg font-medium text-gray-800">{practicalInfo.company}</h3>
          <p className="text-sm text-gray-600">{practicalInfo.position} ({practicalInfo.duration})</p>
        </div>
      </section>
      <div className="flex justify-center mt-10">
        <button
          onClick={handleEdit}
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default Resume;
