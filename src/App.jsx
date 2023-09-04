


function App() {
  const [box, setBox] = useState([]);

  const sendBoxData = (newBox) => {
    setBox([...box, newBox]);
  };
  console.log(box);

  return (
    <div className="App">
      <Form getBoxData={sendBoxData} />
      <div>{box.map((box) => (<Box setBoxColor={box.color} boxSize={box.size} />))}</div>
    </div>
  );
}

export default App;
