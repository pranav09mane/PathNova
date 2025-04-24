import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';  // to access the current user
import { db } from '../firebase'; 
const Dashboard = () => {
  const [goals, setGoals] = useState([]);

  // Fetch learning goals from Firestore
  useEffect(() => {
    const fetchGoals = async () => {
      try {
        const user = getAuth().currentUser;  // Get the currently logged-in user
        if (user) {
          // Reference to the Firestore collection of this user
          const goalsRef = collection(db, 'users', user.uid, 'learningGoals');
          const snapshot = await getDocs(goalsRef);
          const data = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          setGoals(data);  // Store fetched goals into state
        }
      } catch (error) {
        console.error('Error fetching learning goals:', error);
      }
    };

    fetchGoals();  // Call the fetch function
  }, []);  // Empty dependency array ensures this runs only once after mount

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Welcome to PathNova 🚀</h1>
      <h2 className="mt-6 font-semibold">Your Learning Goals</h2>
      {goals.length === 0 ? (
        <p>No goals added yet.</p>
      ) : (
        <ul className="list-disc pl-5 mt-2">
          {goals.map(goal => (
            <li key={goal.id}>
              <strong>{goal.goal}</strong> — Deadline: {goal.deadline}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dashboard;
