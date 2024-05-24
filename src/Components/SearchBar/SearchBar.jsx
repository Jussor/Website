import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/searchPost?title=${encodeURIComponent(title)}`);
  };

  return (
    <form className="" onSubmit={handleSubmit}>
      <div className="d-flex gap-2">
        <input
          type="text"
          placeholder="أدخل العنوان"
          onChange={(e) => setTitle(e.target.value)}
          required
          
        />
        <button
          type="submit"
          style={{
            border: "none",
            background: "transparent",
            color: "white",
          }}
        >
          <CiSearch />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
