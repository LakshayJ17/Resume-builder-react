import React from 'react';

const Skills = ({ data, handleChange }) => {
    return (
        <div className="max-w-md mx-auto mt-10 p-5 border rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Skills</h2>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Skill 1</label>
                <input
                    type="text"
                    name="skill1"
                    value={data.skill1}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border rounded-md text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Skill 2</label>
                <input
                    type="text"
                    name="skill2"
                    value={data.skill2}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border rounded-md text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Skill 3</label>
                <input
                    type="text"
                    name="skill3"
                    value={data.skill3}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border rounded-md text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>
        </div>
    );
};

export default Skills;
