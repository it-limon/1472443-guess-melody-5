const AVATAR_URL = `https://api.adorable.io/avatars/128`;

export default [
  {
    type: `genre`,
    genre: `rock`,
    answers: [
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/1/13/Carlos_Gardel_-_Cheating_muchachita_(Amargura)(1934.ogg`,
        genre: `rock`,
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/1/13/Carlos_Gardel_-_Cheating_muchachita_(Amargura)(1934.ogg`,
        genre: `classical`,
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/1/13/Carlos_Gardel_-_Cheating_muchachita_(Amargura)(1934.ogg`,
        genre: `pop`,
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/1/13/Carlos_Gardel_-_Cheating_muchachita_(Amargura)(1934.ogg`,
        genre: `rock`,
      }
    ]
  },
  {
    type: `artist`,
    song: {
      artist: `Jim Beam`,
      src: `https://upload.wikimedia.org/wikipedia/commons/1/13/Carlos_Gardel_-_Cheating_muchachita_(Amargura)(1934.ogg`,
    },
    answers: [
      {
        picture: `${AVATAR_URL}/${Math.random()}`,
        artist: `Tyrion Lannister`,
      },
      {
        picture: `${AVATAR_URL}/${Math.random()}`,
        artist: `Finlandia`,
      },
      {
        picture: `${AVATAR_URL}/${Math.random()}`,
        artist: `Jim Beam`,
      }
    ],
  }
];
