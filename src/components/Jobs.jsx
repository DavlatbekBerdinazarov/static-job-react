import React from "react";
import Job from "./Job";

function Jobs({ data, addFilterKeywords, filteredKeywords }) {
  // Apply filtering logic based on filteredKeywords
  const filteredData = data.filter((item) => {
    const jobKeywords = [
      item.role,
      item.level,
      ...item.languages,
      ...item.tools,
    ].map(keyword => keyword.toLowerCase()); // Convert to lowercase for case-insensitive comparison
    return filteredKeywords.every(keyword => jobKeywords.includes(keyword.toLowerCase()));
  });

  return (
    <div>
      {filteredData.map((item, index) => (
        <Job item={item} key={index} addFilterKeywords={addFilterKeywords} />
      ))}
    </div>
  );
}

export default Jobs;
