import React, { useState } from "react";

export default function Filters({setCategory}) {
  const allFilters = [
    {
      name: "All",
      type: "selected",
    },
    {
      name: "Active",
      type: "",
    },
    {
      name: "Completed",
      type: "",
    },
  ];
  const [filters, setFilters] = useState(allFilters);

  function handleClick(e) {
    let filter = filters.map((f) => {
      f.name === e.target.text ? (f.type = "selected") : (f.type = "");
      return f
    });

    setFilters(filter);
    setCategory(e.target.text)
  }

  return (
    <div>
      <ul className="filters">
        {filters.map((filter, i) => (
          <li key={i}>
            <a onClick={handleClick} className={filter.type}>
              {filter.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
