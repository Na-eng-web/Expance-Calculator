import React from "react";

const ExpanceList = (props, { expances }) => {
  if (props.expances.length === 0) return null;

  return (
    <div className="px-5 mx-5 mt-0">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.expances.map((expance) => {
            return (
              <tr key={expance.id}>
                <td>{expance.Discription}</td>
                <td>{expance.Amount}</td>
                <td>{expance.catagory}</td>
                <td>
                  <button
                    onClick={() => props.handleclick(expance.id)}
                    className="btn btn-outline-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td>
              {"₹ " +
                props.expances
                  .reduce((acc, expance) => parseInt(expance.Amount) + acc, 0)
                  .toFixed(2)}
            </td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ExpanceList;
