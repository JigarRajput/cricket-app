// jai Ganesh
import React, { useState } from 'react';
import { Platform, SafeAreaView, StatusBar } from 'react-native';
import Header from './components/Header.jsx';
import AddPlayer from './components/Modals/AddPlayer.jsx';
import AddTeam from './components/Modals/AddTeam.jsx';
import { PlayersList } from './components/PlayersList';
import { PlayerProvider } from './context/players/PlayerState';
import { TeamProvider } from './context/TeamContext';
import DeletePlayerProvider from './context/DeletePlayerContext';
import EditPlayerProvider from './context/EditPlayerContext';
import HeaderNew from './components/HeaderNew.jsx';
import { TeamsList } from './components/TeamsList.jsx';
import TeamsProvider from './context/TeamsContext.js';

const App = () => {
  const [addTeamShown, setAddTeamShown] = useState(false)
  const [addPlayerShown, setAddPlayerShown] = useState(false)
  return (
    <SafeAreaView style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}>
      {/* <HeaderNew /> */}
      <TeamsProvider >
        <PlayerProvider>
          <TeamProvider>
            <DeletePlayerProvider>
              <EditPlayerProvider>
                <HeaderNew openAdd={setAddTeamShown} />
                {/* <Header openAdd={setAddTeamShown} openAddPlayer={setAddPlayerShown} /> */}
                <AddTeam addShown={addTeamShown} setAddShown={setAddTeamShown} />
                <AddPlayer player={null} addPlayerShown={addPlayerShown} setAddPlayerShown={setAddPlayerShown} />
                {/* <PlayersList /> */}
                <TeamsList />
              </EditPlayerProvider>
            </DeletePlayerProvider>
          </TeamProvider>
        </PlayerProvider>
      </TeamsProvider>
    </SafeAreaView>
  );
}

export default App;