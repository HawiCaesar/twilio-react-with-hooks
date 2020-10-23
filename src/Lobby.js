import React from "react";

export const Lobby = (props) => {
  const {
    username,
    roomName,
    handleUsernameChange,
    handleRoomNameChange,
    handleSubmit,
  } = props;

  return (
    <form onSubmit={handleSubmit}>
      <h2>Enter a Room</h2>
      <div>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="field"
          value={username}
          onChange={handleUsernameChange}
          required
        />
      </div>

      <div>
        <label htmlFor="name">Room name: </label>
        <input
          type="text"
          id="room"
          value={roomName}
          onChange={handleRoomNameChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
