import React from 'react'

const TopReceiversList = () => {
  return (
    <div>
      <div className="user-list">
          <h4 style={{textAlign:"start", fontWeight:"bold", marginBottom:"40px"}}>TopReceiversList </h4>
          <div className="table-responsive">
          <table className="table" style={{boxShadow:"rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;" ,backgroundColor:"rgb(168, 160, 160)"}}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>State</th>
                  <th>Total Income</th>
                  <th>Promoters</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Pavithri", email: "shimasreedaran@gmail.com", phone: "9605854176", state: "Delhi",total:"	₹50,000",Promoters:	"500" },
                  { name: "raja", email: "raja@gmail.com", phone: "9605854176", state: "chhattisgarh",total:"	₹60,000",Promoters:	"100" },
  
                  { name: "veena", email: "ran@gmail.com", phone: "9605854176", state: "bihar",total:"	₹20,000", Promoters:	"50" },
  
                  { name: "kamlesh", email: "sreedaran@gmail.com", phone: "9605854176", state: "bihar",total:"	₹10,000", Promoters:	"40" },
  
                  { name: "tulsi", email: "masreedaran@gmail.com", phone: "9605854176", state: "bihar",total:"	₹40,000", Promoters:	"30" },
  
                  { name: "mohan", email: "fmasreedaran@gmail.com", phone: "9605854176", state: "bihar",total:"	₹90,000", Promoters:	"25"},
  
                  { name: "sitha", email: "rtyrtn@gmail.com", phone: "9605854176", state: "bihar",total:"	₹50,000", Promoters:	"5" },
  
                
                ].map((user, index) => (
                  <tr key={index}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.state}</td>
                    <td>{user.total}</td>
                    <td>{user.Promoters}</td>
                    
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
    </div>
  )
}

export default TopReceiversList
