import User from "./User";

function App(){
  const UserDate = {
    name : "Sandy",
    age: "23",
    phone: "7010700479"

  };

  return (
    <div>
      <h1>Hello World!</h1>
      <User
        name={UserDate.name}
        age={UserDate.age}
        phone={UserDate.phone}
      />
    </div>
  );
}


export default App;