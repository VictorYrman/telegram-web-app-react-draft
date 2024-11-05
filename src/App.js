import "./App.css";
const telegram = window.Telegram.WebApp;

function App() {
  // useEffect(() => {
  //   telegram.ready();
  // });

  const onClose = () => {
    telegram.close();
  };

  return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
