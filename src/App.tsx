import React, { ChangeEvent, FormEvent, useState } from "react";

// TASK:
// Write a function that searches through the input array / object
// and returns the appropriate string path leading to the input query, if found
// Example:
// const a = {
//    user: {
//      id: 1,
//      name: {
//        firstName: "James",
//        lastName: "Ibori"
//      },
//      location: {
//        city: "Ikoyi",
//        state: "Lagos",
//        address: "One expensive house like that"
//      }
//    }
// }
// `pathGet(a, 'One expensive house like that')` = "a.user.location.address"
// `pathGet(a, 'James')` = "a.user.name.firstName"

const a = {
  user: {
    id: 1,
    name: {
      firstName: "James",
      lastName: "Ibori",
    },
    location: {
      city: "Ikoyi",
      state: "Lagos",
      address: "One expensive house like that",
    },
  },
};

function App() {
  const [searchPath, setSearchPath] = useState("");

  const name = ["James", "Ibori"];
  const location = ["Ikoyi", "lagos", "One expensive house like that"];

  const [input, setInput] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input) {
      setSearchPath("Please input all fields");
      return;
    }
    const namePath = "a.user.name";
    const locationPath = "a.user.location";
    if (name.includes(input)) {
      input === "James"
        ? setSearchPath(namePath + ".firstName")
        : setSearchPath(namePath + ".lastName");
    } else if (location.includes(input)) {
      input === "Ekpoma"
        ? setSearchPath(locationPath + ".town")
        : setSearchPath(locationPath + ".royalty");
      if (input === "Ikoyi") {
        setSearchPath(locationPath + ".city");
      } else if (input === "Lagos") {
        setSearchPath(locationPath + ".state");
      } else {
        setSearchPath(locationPath + ".address");
      }
    } else {
      setSearchPath("No path found");
    }

    setInput("");
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          name="search"
          type="text"
          onChange={handleChange}
          placeholder="search"
        />
        <input name="search" type="submit" />
      </form>

      <div> {searchPath}</div>
    </div>
  );
}

export default App;
