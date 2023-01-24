import { createEffect } from 'solid-js'; 
import {
  DragDropProvider,
  DragDropSensors,
} from "@thisbeyond/solid-dnd";
import Main from './components/Main';


const App = () => {

  return (
    <div class='app'>
    <DragDropProvider>
      <DragDropSensors>
        <Main />
      </DragDropSensors>
    </DragDropProvider>
    </div>
  );
}

export default App;
