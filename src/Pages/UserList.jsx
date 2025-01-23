import React from 'react'

const UserList = () => {
  return (
    <div>
       <div className="user-list">
          <h4>User List</h4>
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Status</th>
                  <th>View</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Pavithri", email: "shimasreedaran@gmail.com", phone: "9605854176", status: "Active" },
                  { name: "Shimna", email: "kkousaly73@gmail.com", phone: "7034124557", status: "Active" },
                  { name: "Shimna", email: "kkousaly73@gmail.com", phone: "7034124557", status: "Active" },
                  { name: "Shimna", email: "kkousaly73@gmail.com", phone: "7034124557", status: "Active" },
                  { name: "Shimna", email: "kkousaly73@gmail.com", phone: "7034124557", status: "Active" },
                  { name: "Shimna", email: "kkousaly73@gmail.com", phone: "7034124557", status: "Active" },
                  { name: "Shimna", email: "kkousaly73@gmail.com", phone: "7034124557", status: "Active" },
                  { name: "Shimna", email: "kkousaly73@gmail.com", phone: "7034124557", status: "Active" },
                  { name: "Shimna", email: "kkousaly73@gmail.com", phone: "7034124557", status: "Active" },
                  { name: "Shimna", email: "kkousaly73@gmail.com", phone: "7034124557", status: "Active" },
                  { name: "Shimna", email: "kkousaly73@gmail.com", phone: "7034124557", status: "Active" },
                  { name: "Shimna", email: "kkousaly73@gmail.com", phone: "7034124557", status: "Active" },
                  { name: "Shimna", email: "kkousaly73@gmail.com", phone: "7034124557", status: "Active" },
                  { name: "Shimna", email: "kkousaly73@gmail.com", phone: "7034124557", status: "Active" },
                  { name: "Shimna", email: "kkousaly73@gmail.com", phone: "7034124557", status: "Active" },
                  { name: "Shimna", email: "kkousaly73@gmail.com", phone: "7034124557", status: "Active" },
                  { name: "Shimna", email: "kkousaly73@gmail.com", phone: "7034124557", status: "Active" },
                  { name: "Shimna", email: "kkousaly73@gmail.com", phone: "7034124557", status: "Active" },
                  { name: "Shimna", email: "kkousaly73@gmail.com", phone: "7034124557", status: "Active" },
                  { name: "Shimna", email: "kkousaly73@gmail.com", phone: "7034124557", status: "Active" },
                  { name: "Shimna", email: "kkousaly73@gmail.com", phone: "7034124557", status: "Active" },
                  { name: "Shimna", email: "kkousaly73@gmail.com", phone: "7034124557", status: "Active" },
                  { name: "Shimna", email: "kkousaly73@gmail.com", phone: "7034124557", status: "Active" },
                  { name: "Shimna", email: "kkousaly73@gmail.com", phone: "7034124557", status: "Active" },
                  { name: "Shimna", email: "kkousaly73@gmail.com", phone: "7034124557", status: "Active" },
                  // Add more data as needed
                ].map((user, index) => (
                  <tr key={index}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.status}</td>
                    <td>
                      <button className="btn btn-primary btn-sm">View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
    </div>
  )
}

export default UserList
