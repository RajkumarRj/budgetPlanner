// import React from "react";

// export default function Header({budget, remaining, spent}){
//     return (
//         <>
//         <div className="head">
//             <h1>My Budget Planner</h1>
//             <div className="amt">
//                 <span>Budget: Rs.{budget}</span>
//                 <span> Reamining: Rs.{remaining}</span>
//                 <span>Spent so far:{spent}</span>
//             </div>
//         </div>
//         </>
//     );
// }



import React, { useState } from 'react';

export default function Header({ budget, remaining, spent, setBudget }) {
  const [budgetInputOpen, setBudgetInputOpen] = useState(false);

  return (
    <>
      <div className="head">
        <h1>My Budget Planner</h1>
        <div className="amt">
          <span onClick={() => setBudgetInputOpen(true)}>Budget: Rs.{budget}</span>
          <span>Remaining: Rs.{remaining}</span>
          <span>Spent so far: {spent}</span>
          {budgetInputOpen && (
            <div className='bud-inp'>
                <input 
                  type="number"
                  value={budget}
                  onChange={(e) => setBudget(Number(e.target.value))}
                  onBlur={() => setBudgetInputOpen(false)}
                />
            </div>
          )}
        </div>
      </div>
    </>
  );
}


// ... other components
