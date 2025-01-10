import React, { useState } from "react";
import "./App.css"; // Assuming you have a CSS file for styling

function App() {
  const [circles, setCircles] = useState([]);
  const [backgroundColor, setBackgroundColor] = useState("white");

  const generateRandomRadius = () => {
    return Math.floor(Math.random() * (200 - 20 + 1)) + 20; // Random number between 20 and 200
  };

  const isIntersecting = (circle1, circle2) => {
    const dx = circle1.x - circle2.x;
    const dy = circle1.y - circle2.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    return distance < circle1.radius + circle2.radius;
  };

  const handleClick = (event) => {
    const radius = generateRandomRadius();
    const newCircle = {
      x: event.clientX,
      y: event.clientY,
      radius,
    };

    const updatedCircles = [...circles, newCircle];

    if (updatedCircles.length > 2) {
      setCircles([]);
      setBackgroundColor("white");
    } else {
      setCircles(updatedCircles);

      if (
        updatedCircles.length === 2 &&
        isIntersecting(updatedCircles[0], updatedCircles[1])
      ) {
        setBackgroundColor("lightcoral"); // Change to desired color on intersection
      } else {
        setBackgroundColor("white"); // Default background color
      }
    }
  };

  return (
    <div
      className="viewport"
      onClick={handleClick}
      style={{ backgroundColor, height: "100vh", width: "100vw", position: "relative" }}
    >
      {circles.map((circle, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            top: circle.y - circle.radius,
            left: circle.x - circle.radius,
            width: circle.radius * 2,
            height: circle.radius * 2,
            borderRadius: "50%",
            backgroundColor: "blue",
          }}
        ></div>
      ))}
    </div>
  );
}

export default App;
