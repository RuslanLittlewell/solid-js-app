import { store, setStore } from "../../store/store";
import {
  useDragDropContext,
  createDraggable,
  createDroppable,
} from "@thisbeyond/solid-dnd";
import DraggableItem from "../Draggable";
import DroppableArea from "../Droppable";

import { For } from "solid-js";
import "./style.css";

const Main = () => {
  const handleFillList = () => {
    setStore("list", [
      { id: 1, value: "первое" },
      { id: 2, value: "второе" },
      { id: 3, value: "третье" },
      { id: 4, value: "четвёртое" },
    ]);
  };

  const [, { onDragEnd }] = useDragDropContext();

  onDragEnd(({draggable, droppable}) => {

    if (droppable) {
        const listName = droppable.id;
        const from = draggable.data.from;
        setStore(st => {
            const findItem = () => st[from].find(item => item.id === draggable.id);
            return { 
                ...st,
                [from]: st[from].filter(item => item.id !== findItem().id),
                [listName]: [...st[listName], findItem()]}
        })
    }
  });

  return (
    <>
      <button onClick={() => handleFillList()}>Fill list</button>
      <div className="wrapper">
        <div className="list">
          <h2>СПИСОК</h2>
          <DroppableArea id="list">
            <For each={store.list}>
              {(list) => {
                const { id, value } = list;
                return <DraggableItem id={id} list="list">{value}</DraggableItem>;
              }}
            </For>
          </DroppableArea>
        </div>
        <div className="todo">
          <h2>В РАБОЕТ</h2>
          <DroppableArea id="todo">
            <For each={store.todo}>
              {(list) => {
                const { id, value } = list;
                return <DraggableItem id={id} list="todo">{value}</DraggableItem>;
              }}
            </For>
          </DroppableArea>
        </div>
        <div className="ready">
          <h2>ГОТОВЫЕ</h2>
          <DroppableArea id="ready">
            <For each={store.ready}>
              {(list) => {
                const { id, value } = list;
                return <DraggableItem id={id} list="ready">{value}</DraggableItem>;
              }}
            </For>
          </DroppableArea>
        </div>
      </div>
    </>
  );
};

export default Main;
