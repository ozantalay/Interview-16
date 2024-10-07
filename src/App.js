import React, { useState } from "react";

function App() {
  const PLAYERS = [
    "Ali",
    "Namık",
    "Eda",
    "Ebru",
    "Suzan",
    "Samet",
    "Engin",
    "Halit",
  ];

  return <FormTeams players={PLAYERS} />;
}

const FormTeams = ({ players }) => {
  // KODUNUZ BURAYA GELECEK
  const [availableNames, setAvailableNames] = useState(players);
  const [team1, setTeam1] = useState([]);
  const [team2, setTeam2] = useState([]);
  const [currentTeam, setCurrentTeam] = useState("team1");

  const handleNameClick = (name) => {
    setAvailableNames(availableNames.filter((n) => n != name));

    if (currentTeam === "team1") {
      setTeam1([...team1, name]);
    } else {
      setTeam2([...team2, name]);
    }
  };
  const shufleTeams = () => {

    const allPlayers = [...team1, ...team2, ...availableNames];

    const shuffledPlayers = allPlayers.sort(() => Math.random() - 0.5);

   
    const midPoint = Math.ceil(shuffledPlayers.length / 2);
    setTeam1(shuffledPlayers.slice(0, midPoint));
    setTeam2(shuffledPlayers.slice(midPoint));
    setAvailableNames([]); 
  };

  const resetTeams = () => {
    setAvailableNames(players);
    setTeam1([]);
    setTeam2([]);
  };

  return (
    <div className="flex flex-col  justify-center items-center">
      <h1>Team Form</h1>
      <div className="flex ">
        {availableNames.map((item, index) => (
          <button
            onClick={() => handleNameClick(item)}
            className="ml-5 mt-5"
            key={index}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="">
        <button
          onClick={() =>
            setCurrentTeam(currentTeam === "team1" ? "team2" : "team1")
          }
          className="m-5 bg-color bg-gray-500 text-white py-2 px-4 rounded "
        >
          Şu anda {currentTeam === "team1" ? "Takım 1" : "Takım 2"} için seçim
          yapılıyor
        </button>
        <button
          onClick={shufleTeams}
          className="m-5 bg-color bg-blue-500 text-white py-2 px-4 rounded"
        >
          Karıştır
        </button>
        <button
          onClick={resetTeams}
          className="m-5 bg-color bg-red-500 text-white py-2 px-4 rounded"
        >
          Sıfırla
        </button>
      </div>
      <div className="flex gap-10">
        <div>
          <p>Team 1</p>
          <ul>
            {team1.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Team 2</h2>
          <ul>
            {team2.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
