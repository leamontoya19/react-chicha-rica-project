import React, { useEffect, useRef } from "react";
import "../styles/Suggestions.css";

export const Suggestions = ({ results, onClickOutside }) => {
  const suggestionsRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target)
      ) {
        onClickOutside();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [onClickOutside]);

  // Verifica si results es undefined antes de mapearlo
  return (
    <div className="suggestions" ref={suggestionsRef}>
      {results && results.length > 0 ? (
        results.map((result) => (
          <div
            key={result.id}
            className="suggestion"
            onClick={() => alert(`You selected ${result.title}!`)}
          >
            {result.title}
          </div>
        ))
      ) : (
        <div>No hay sugerencias disponibles</div>
      )}
    </div>
  );
};
