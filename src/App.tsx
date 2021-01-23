import React from 'react';
import { observer } from "mobx-react"
import Time from './stores/test-store';

const timeStore = new Time(true);
const timeStore2 = new Time();
const  App = observer(() => {

  return (
    <>
      <div className="App">
        {timeStore.secondsPassed}
        <button onClick={timeStore.increaseTimer}>Hey</button>
      </div>
      <div className="App">
        {timeStore2.secondsPassed}
        <button onClick={timeStore2.increaseTimer}>Hey</button>
      </div>
    </>
  );
})

export default App;
