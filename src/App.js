import React from 'react';
import ImageCropper from './components/imgCropper';



function App() {
  
  return (
    <div className="App">
      <div>
            <ImageCropper src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aHVtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"></ImageCropper>
        </div>
    </div>
  );
}

export default App;
