import React from "react";
const ec = [{time:"09:00-09:50",day:"2022-07-20",course_code:"CHF102"},{time:"10:00-10:50",day:"2022-08-30",course_code:"GHD103"}];
export const ExtraClasses = () =>{
     return (<div className="" style={{fontFamily:"Ubuntu",marginBottom:"30px",display:"grid",justifyContent:"space-around"}}>
       
     <p className="" style={{fontFamily:"Ubuntu",fontSize:"20px",fontWeight:"bold",display:"grid",justifyContent:"center"}}>Extra Classes</p>
     <div className="table-responsive ">
                <table className="table table-bordered text-center" style={{width:"auto"}}>
                    <thead>
                        <tr className="bg-light-gray">
                            <th className="text-uppercase">Sl.no
                            </th>
                            <th className="text-uppercase">Course Name</th>
                            <th className="text-uppercase">Day</th>
                            <th className="text-uppercase">Time</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {ec.map((extra,id)=>{
                            return <tr>
                                <td>{id+1}</td>
                                <td>{extra.course_code}</td>
                                <td>{extra.day}</td>
                                <td>{extra.time}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
     

}