const Information = () => {
  return (
    <div>
      <div style={{ marginTop: 15, marginBottom: 15 }}>
        <h5> TYPES OF OVERTIME</h5>
      </div>
      <div>
        <span>
          <p style={{ margin: 0 }}>OT - Overtime</p>
        </span>
        <p style={{ paddingTop: 0 }}>
          Schedule overtime normally occurring when employee is asked to stay
          past shift end or work on a day not normally schedule
        </p>
      </div>
      <div>
        <span>
          <p style={{ margin: 0 }}>HTH - Holiday Pay</p>
        </span>
      </div>
      <div>
        <p> Employee is required to work on a paid holiday</p>
      </div>
      <div>
        <span>
          <p style={{ margin: 0 }}>OC - StandBy</p>
        </span>
      </div>
      <div>
        <p>
          Employee is require to be available for a specified period of time and
          to respond within 30 minutes of the call
        </p>
      </div>
      <div>
        <span>
          <p>CTE - Comp Time</p>
        </span>
      </div>
    </div>
  );
};
export default Information;
