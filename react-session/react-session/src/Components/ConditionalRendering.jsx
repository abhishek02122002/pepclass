import React from "react";

function ConditionalRendering({ isLoggedIn, hasMessage, status, user }) {
  return (
    <div>
      {/* 1️⃣ if-else Statement */}
      {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign in.</h1>}

      {/* 2️⃣ Ternary Operator */}
      <p>{hasMessage ? "You have new messages!" : "No new messages."}</p>

      {/* 3️⃣ Logical AND (&&) Operator */}
      {hasMessage && <p>📩 Check your inbox!</p>}

      {/* 4️⃣ Switch Case for Different Status */}
      {(() => {
        switch (status) {
          case "loading":
            return <p>⏳ Loading...</p>;
          case "success":
            return <p>✅ Data fetched successfully!</p>;
          case "error":
            return <p>❌ Error fetching data.</p>;
          default:
            return <p>ℹ️ Unknown status.</p>;
        }
      })()}

      {/* 5️⃣ IIFE (Immediately Invoked Function Expression) */}
      {(() => {
        if (!user) return <h2>Please log in</h2>;
        return <h2>Welcome, {user.name}!</h2>;
      })()}
    </div>
  );
}

export default function ConditionalRendering() {
  return (
    <ConditionalRendering 
      isLoggedIn={true} 
      hasMessage={true} 
      status="success" 
      user={{ name: "John Doe" }} 
    />
  );
}
