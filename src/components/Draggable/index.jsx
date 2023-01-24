import { createDraggable } from "@thisbeyond/solid-dnd";
import { children } from 'solid-js';

const DraggableItem = (props) => {
  const draggable = createDraggable(props.id, { from: props.list, id: props.id });
  const c = children(() => props.children);
  return <div use:draggable>{c()}</div>;
};

export default DraggableItem;
