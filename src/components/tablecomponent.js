import react from "react";
import "./table.css";
const data = [

    { time: "09:00-09::50", course_code: "CHC237", id: 1, day: "Monday" },
    { time: "11:00-11:50", course_code: "MNC102", id: 3, day: "Tuesday" },
    { time: "02:00-02:50", course_code: "TMC102", id: 5, day: "Thursday" }
]
const hx = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const day = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
export const Table = () => {

    return (<>
        <div className="container" style={{ marginLeft: "1.5rem" }}>
            <div className="timetable-img text-center">
                <img src="img/content/timetable.png" alt="" />
            </div>
            <div className="table-responsive hx">
                <table className="table table-bordered text-center">
                    <thead>
                        <tr className="bg-light-gray">
                            <th className="text-uppercase">Time
                            </th>
                            <th className="text-uppercase">08:00-08:50</th>
                            <th className="text-uppercase">09:00-09:50</th>
                            <th className="text-uppercase">10:00-10:50</th>
                            <th className="text-uppercase">11:00-11:50</th>
                            <th className="text-uppercase">12:00-12:50</th>
                            <th className="text-uppercase">02:00-02:50</th>
                            <th className="text-uppercase">03:00-03:50</th>
                            <th className="text-uppercase">04:00-04:50</th>
                            <th className="text-uppercase">05:00-05:50</th>
                            <th className="text-uppercase">06:00-06:50</th>
                        </tr>
                    </thead>
                    <tbody>

                        {day.map((dx) => {
                            return (<tr >
                                <td className="align-middle">{dx}</td>
                                {
                                    hx.map((e, id) => {
                                        {
                                            let flag = -1;
                                            let j = data.map((x, yd) => {
                                                if (x.id == id && x.day == dx) {
                                                    flag = yd;
                                                    return (<td><span className="bg-yellow padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">{x.course_code}</span>
                                                        <div className="margin-10px-top font-size14">{x.time}</div>
                                                        <div className="font-size13 text-light-gray"></div>
                                                    </td>);
                                                }
                                            })
                                            if (flag == -1) { return (<td className="bg-light-gray" style={{height:"90px"}}></td>) }
                                            else { return j[flag]; }
                                        }
                                    })
                                }
                            </tr>

                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>


    </>)



}
