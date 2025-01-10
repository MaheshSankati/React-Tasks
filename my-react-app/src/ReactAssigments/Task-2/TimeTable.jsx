import React from "react";
import "./TimeTable.css";

function Timetable() {
  return (
    <>
      <center>
        <table>
          <tr>
            <th className="timings">Timings</th>
            <th>9AM - 11AM </th>
            <th>11AM - 12PM </th>
            <th>12PM - 1PM </th>
            <th>1PM - 2PM </th>
            <th>2PM - 4PM </th>
            <th>4PM - 6PM </th>
          </tr>
          <tr className="color1">
            <td className="days">
              <b>Monday</b>
            </td>
            <td>Problem Solving</td>
            <td>Practice Time</td>
            <td>Communication</td>
            <td>Lunch Break</td>
            <td>Technical Class</td>
            <td>Aptitude</td>
          </tr>
          <tr className="color1">
            <td className="days">
              <b>Tuesday</b>
            </td>
            <td>Problem Solving</td>
            <td>Practice Time</td>
            <td>Communication</td>
            <td>Lunch Break</td>
            <td>Technical Class</td>
            <td>Aptitude</td>
          </tr>
          <tr className="color1">
            <td className="days">
              <b>Wednesday</b>
            </td>
            <td>Problem Solving</td>
            <td>Practice Time</td>
            <td>Communication</td>
            <td>Lunch Break</td>
            <td>Technical Class</td>
            <td>Aptitude</td>
          </tr>
          <tr className="color1">
            <td className="days">
              <b>Thursday</b>
            </td>
            <td>Problem Solving</td>
            <td>Practice Time</td>
            <td>Communication</td>
            <td>Lunch Break</td>
            <td>Technical Class</td>
            <td>Aptitude</td>
          </tr>
          <tr className="color1">
            <td className="days">
              <b>Fridat</b>
            </td>
            <td>Problem Solving</td>
            <td>Practice Time</td>
            <td>Communication</td>
            <td>Lunch Break</td>
            <td>Technical Class</td>
            <td>Aptitude</td>
          </tr>
          <tr className="color1">
            <td className="days">
              <b>Saturday</b>
            </td>
            <td>Problem Solving</td>
            <td>Practice Time</td>
            <td>Communication</td>
            <td>Lunch Break</td>
            <td>Technical Class</td>
            <td>Aptitude</td>
          </tr>
        </table>
      </center>
    </>
  );
}

export default Timetable;
