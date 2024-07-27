import React from 'react';

const Education = ({ data, handleChange }) => {
    return (
        <div className="max-w-md mx-auto mt-10 p-5 border rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Educational Information</h2>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">School</label>
                <input
                    type="text"
                    name="school"
                    value={data.school}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border rounded-md text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Degree</label>
                <input
                    type="text"
                    name="degree"
                    value={data.degree}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border rounded-md text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Graduation Year</label>
                <input
                    type="text"
                    name="gradYear"
                    value={data.gradYear}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border rounded-md text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>
        </div>
    );
};

export default Education;
