import React from "react";

export default function App() {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-bold">Bienvenue sur AfriKoin 👋</h1>
        <p>
          Mode : {prefersDark ? "Sombre 🌙" : "Clair ☀️"}
        </p>
      </div>
    </div>
  );
}
