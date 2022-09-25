import React from 'react';
import styles from "./Card.module.scss";


const Cards = ({ results }) => {
  let display;
  console.log(results);

  if (results) {
    display = results.map((x) => {
      let { id, name, image, location, status } = x;
      return (
        <div key={id} className="position-relative col-4 mb-4 ">
          <div className={styles.cards}>
            
            <img src={image} alt="" className={`${styles.img} img-fluid`} />
            <div style={{ padding: "10px" }} className='content'>
            <div className='fs-4 fw-bold mb-4'>{name}</div>
            <div className=''>
            <div className='fs-6 '>Last Location</div>
            <div className='fs-5'>{location.name}</div>
            </div>
            </div>
          </div>
          {(()=>{
            if(status === "Dead"){
              return(
                <div className={`${styles.badge} position-absolute badge bg-danger`} >
            {status}
            </div>
              )
            } else if(status === "Alive"){
              return(
                <div className={`${styles.badge} position-absolute badge bg-success`} >
            {status}
            </div>
              )
            } else{
              return(
                <div className={`${styles.badge} position-absolute badge bg-secondary`} >
            {status}
            </div>
              )
            }
          })()}
        </div>
      );
    });
  } else {
   display = "No Characters Found :/";
  }

  return <><div>{display}</div></>;
}

export default Cards