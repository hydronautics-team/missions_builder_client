import React from 'react';


const Command = (props) => {

    const dragStart = (e) => {
        const target = e.target;

        e.dataTransfer.setData('command_id', target.id);
        setTimeout(() => {
            target.style.display = 'none';
        }, 0);

    }

    const dragOver = (e) => {
        e.stopPropaganation();
    }

    return(
        <div 
         className={props.className}
         id={props.id} draggable={props.draggable} 
         onDragStart={dragStart} 
         onDragOver={dragOver}>
            {props.children}
        </div>
    )
}


export default Command;