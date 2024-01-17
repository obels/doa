import { useState, useEffect } from "react";
import Input from "../../common/input";
import Calendar from "../../common/calendar";
import Information from "./informationText";
import DateTable from "./dateTable";

const OverTime = () => {
  const [payP, setPayP] = useState();
  const [reason, setReason] = useState();
  useEffect(() => {}, []);

  return (
    <div>
      <form>
        <div
          className="container sm"
          style={{ height: 1000, width: 650, backgroundColor: "#f2f2f2" }}
        >
          <div style={{ textAlign: "center" }}>
            <h3>OverTime Form for DOA Employees</h3>
            <p>
              Please fill out the required fields and press submit once
              completed
            </p>
          </div>
          <div
            className="input-group "
            style={{ height: 150, width: 600, backgroundColor: "lightblue" }}
          >
            <div className="input-group">
              <div style={{ marginRight: 50 }}>
                <Input name="Name" style={{ width: 200 }} />
              </div>
              <Input name="Employee Number" style={{ width: 200 }} />
            </div>
            <div className="input-group">
              <div style={{ marginRight: 50 }}>
                <div style={{ marginTop: 10, marginBottom: 5 }}>
                  <Calendar
                    label="PPE"
                    selected={payP}
                    onChange={(e) => setPayP(e)}
                  />
                </div>
              </div>
              <Input
                labelstyle={{ marginLeft: 11 }}
                name="Email"
                style={{ marginLeft: 11, width: 200 }}
              />
            </div>
          </div>
          <div>
            <Information />
          </div>

          <div style={{ backgroundColor: "lightblue" }}>
            <h6>JUSTIFICATION</h6>
            <textarea
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              style={{ width: 600, height: 60 }}
            ></textarea>
          </div>
          <div>
            <DateTable />
          </div>
          <div>
            <button
              style={{ marginTop: 100 }}
              className="btn btn-primary"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default OverTime;
