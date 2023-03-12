import React from 'react';

function TrendingCard({ children }) {
  return (
    <div className="h-[8.74em] w-[15em] relative rounded-lg overflow-hidden mx-3 my-3 flex-0 cursor-pointer">
      {children}
    </div>
  );
}

export default TrendingCard;
