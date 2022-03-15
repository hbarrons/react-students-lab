const Score = (props) => {
  return ( 
    <>
      <div>
        {props.scores.map((score, idx) =>
          <div key={idx}>
            <p>Date: {score.date} <br/>Score:{score.score}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default Score