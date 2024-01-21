import React, { useState } from "react";

export default function Expense({budget,spent,setspent}){


    const [ename, setename]=useState("");

    const [costrs, setcostrs]=useState("");

    const [dlist, setdlist] =  useState([]);

    const remaining = budget-spent;
    

    function updateArray() {
        if (ename && costrs) {
          const cost = parseInt(costrs, 10);
    
          if (cost <= remaining) {
            setspent((prevSpent) => prevSpent + cost);
    
            setdlist((prev) => [
              ...prev,
              { name: ename, cost: cost, id: new Date().getTime() },
            ]);
    
            setename("");
            setcostrs("");
          } else {
            alert("Expense cannot exceed the remaining budget!");
          }
        }
      }

    function removeArray(idx) {
        const filtered = dlist.filter((ele) => ele.id !== idx);

        setdlist(filtered)
        console.log(filtered);
    }

    console.log(dlist);

    function handleEnterKeyPress(event) {
        if (event.key === "Enter") {
          updateArray();
        }
      }


    return (
        <>
        
        <div className="parent">
            <div className="expense-list">
                <h1>Expenses</h1>

            {dlist.length ==0 ?
                (<h2 className="green">Add  data to list</h2>)
            : (
                dlist.map( (data)=>(
                <div className="data-list" key={data.id}>
                    <span>{data.name}</span>
                    <div className="amt-cross">
                    <span>Rs.{data.cost}</span>
                    <button onClick={()=> removeArray(data.id)}>&#10005;</button>
                    </div>
                </div>
                ))
            )}
                
            </div>

            <div className="add-exp">
                <h1>Add Expenses</h1>
                <div className="int-list">
                    <div className="name-inp">
                        <label htmlFor="">Name</label>
                        <input type="text" 
                                value={ename}
                                onChange={(e)=> setename(e.target.value)}
                                onKeyDown={handleEnterKeyPress}
                        />
                    </div>
                    <div className="cost-inp">
                        <label htmlFor="">Cost</label>
                        <input type="number"
                                min={0}
                                value={costrs}
                                onChange={(e)=> setcostrs(e.target.value)}  
                                onKeyDown={handleEnterKeyPress}      
                        />
                    </div>
                </div>

                <button onClick={updateArray}>Save</button>
            </div>
            
        </div>
        </>
    );
}