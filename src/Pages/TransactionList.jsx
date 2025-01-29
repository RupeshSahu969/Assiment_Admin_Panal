import React from 'react';
import "../Style/transactionList.css"

const TransactionList = () => {
  return (
    <div>
      <div className="user-list">
        <h4 className="text-left">Transaction List</h4>
        <div className="table-responsive">
          <table className="table" style={{boxShadow:"rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;" ,backgroundColor:"rgb(246, 246, 246)"}}>
          
            <thead>
              <tr>
                <th style={{fontWeight:"bold", textAlign:"start"}}>Name</th>
                <th>Nidheesh Aniyaram</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Reference no.", details: "640389ab394ee" },
                { name: "Business Promoters", details: "201" },
                { name: "Business Income", details: "100500" },
                { name: "Purchase Amount", details: "10400" },
                { name: "Business Partners", details: "5" },
                { name: "Give Help Amount", details: "2500" },
              ].map((item, index) => (
                <tr key={index}>
                  <td style={{fontWeight:"bold", textAlign:"start"}}>{item.name}</td>
                  <td>{item.details}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TransactionList;
