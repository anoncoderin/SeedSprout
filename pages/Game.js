import React, { useState } from 'react';
import Image from 'next/image';
import NavBar from "@/components/NavBar"
import Styles from "@/styles/Game.module.css"

const DisappearingElement = () => {
  const [visible, setVisible] = useState(Array(5).fill(true));

  const handleClick = (index) => {
    const newVisible = [...visible];
    newVisible[index] = false;
    setVisible(newVisible);
  };

  const handlePlayAgain = () => {
    setVisible(Array(5).fill(true));
  }

  return (
    <>
    
    <div className={Styles.container}>
    
      <div className={Styles.insect1}>
        <div style={{ display: visible[0] ? 'block' : 'none', position: 'absolute' }} onClick={() => handleClick(0)}>
            <Image src={"/graphics/bugs.svg"} width={60} height={116} />
        </div>
      </div>

      <div className={Styles.insect2}>
        <div style={{ display: visible[1] ? 'block' : 'none', position: 'absolute' }} onClick={() => handleClick(1)}>
        <Image src={"/graphics/bugs.svg"} width={70} height={116} />
        </div>
      </div>

      <div className={Styles.insect3}>
        <div style={{ display: visible[2] ? 'block' : 'none', position: 'absolute' }} onClick={() => handleClick(2)}>
        <Image src={"/graphics/bugs.svg"} width={45} height={116} />
        </div>
      </div>

      <div className={Styles.insect4}>
        <div style={{ display: visible[3] ? 'block' : 'none', position: 'absolute' }} onClick={() => handleClick(3)}>
        <Image src={"/graphics/bugs.svg"} width={60} height={116} />
        </div>
      </div>

      <div className={Styles.insect5}>
        <div style={{ display: visible[4] ? 'block' : 'none', position: 'absolute' }} onClick={() => handleClick(4)}>
        <Image src={"/graphics/bugs.svg"} width={80} height={116} />
        </div>
      </div>
     
      {visible.some(v => v === false) && (
        <button className={Styles.PlayAgain} onClick={handlePlayAgain}>Play Again</button>
        
      )}
        <p className={Styles.tutorial}>
Click on the pests to save the plant!</p>

    </div>
    <NavBar/>
    </>
  );
};

export default DisappearingElement;









