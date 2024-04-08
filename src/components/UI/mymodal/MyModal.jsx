import React from "react";
import St from './MyModal.module.css'

const MyModal = function({children, visible, setVisible}) {
  var rootClasses = [St.myModal];

  if (visible){
    rootClasses.push(St.active);
  }
  
  return(
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
      <div className={St.myModalContent} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

export default MyModal;