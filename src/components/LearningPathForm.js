import React, { useState } from "react";

const LearningPathForm = ({ onSubmit }) => {
  const [goal, setGoal] = useState("");
  const [hoursPerDay, setHoursPerDay] = useState("");
  const [skillLevel, setSkillLevel] = useState("");
  const [techPreferences, setTechPreferences] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ goal, hoursPerDay, skillLevel, techPreferences });
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Create Your Learning Path</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Career Goal (e.g. Data Analyst)"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="number"
          placeholder="Hours per day"
          value={hoursPerDay}
          onChange={(e) => setHoursPerDay(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <select
          value={skillLevel}
          onChange={(e) => setSkillLevel(e.target.value)}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Select your skill level</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
        <input
          type="text"
          placeholder="Preferred Tech Stack (optional)"
          value={techPreferences}
          onChange={(e) => setTechPreferences(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Generate Path 🚀
        </button>
      </form>
    </div>
  );
};

export default LearningPathForm;
