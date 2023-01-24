import {
    createDroppable,
  } from "@thisbeyond/solid-dnd";
  import { children } from 'solid-js';
import './style.css';

const DroppableArea = (props) => {
  const droppable = createDroppable(props.id);
  const c = children(() => props.children);
  return <div id={props.id} class="dropable-list" use:droppable>{c()}</div>;
};

export default DroppableArea;