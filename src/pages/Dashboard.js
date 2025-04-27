import { useEffect, useState } from "react";
import { db, auth } from "../firebase"; // Corrected import
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [learningGoal, setLearningGoal] = useState("");
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLearningGoal = async () => {
      try {
        const user = auth.currentUser;
        
        if (!user) {
          navigate("/login");
          return;
        }

        const userDocRef = doc(db, "users", user.uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          const data = userDoc.data();
          setLearningGoal(data.learningGoal || "No learning goal set.");
        } else {
          setError("No learning goal set for this user.");
        }
      } catch (error) {
        console.error("Error fetching document:", error);
        setError("Failed to fetch learning goal. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchLearningGoal();
  }, [navigate]);

  const handleUpdateLearningGoal = async () => {
    try {
      const user = auth.currentUser;
      if (!user) {
        navigate("/login");
        return;
      }

      const userDocRef = doc(db, "users", user.uid);
      await setDoc(userDocRef, { learningGoal }, { merge: true });

      alert("Learning goal updated successfully!");
    } catch (error) {
      console.error("Error updating learning goal:", error);
      setError("Failed to update learning goal. Please try again later.");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Welcome to PathNova 🚀</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <h3>Your Learning Goal: {learningGoal}</h3>

      <div style={{ marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Update your learning goal"
          value={learningGoal}
          onChange={(e) => setLearningGoal(e.target.value)}
          style={{ padding: "8px", width: "300px", marginRight: "10px" }}
        />
        <button onClick={handleUpdateLearningGoal} style={{ padding: "8px 16px" }}>
          Update Goal
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
