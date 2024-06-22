const ProgressBar = ({ step, totalSteps }) => {
    const percentage = (step / totalSteps) * 100;
  
    return (
      <div style={{ width: '100%', backgroundColor: '#E9D0E3', borderRadius: '5px', marginBottom: '20px' ,zIndex:'99'}}>
        <div
          style={{
            width: `${percentage}%`,
            height: '5px',
            backgroundColor: '#E90000',
            borderRadius: '5px',
            transition: 'width 0.3s'
          }}
        />
      </div>
    );
  };
  
  export default ProgressBar;
  