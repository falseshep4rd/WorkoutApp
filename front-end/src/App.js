import './App.css';

function App() {
  const reqBody = {
    "username": "123",
    "password": "123"
  }

  fetch('api/v1/auth/authenticate', {
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify(reqBody)
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

    
  return (
    <div className="App">
    </div>
  );
}

export default App;
