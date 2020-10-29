const AVATAR_URL = `https://avatars.dicebear.com/api/human`;

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
        picture: `${AVATAR_URL}/${Math.random()}.svg`,
        artist: `Tyrion Lannister`,
      },
      {
        picture: `${AVATAR_URL}/${Math.random()}.svg`,
        artist: `Finlandia`,
      },
      {
        picture: `${AVATAR_URL}/${Math.random()}.svg`,
        artist: `Jim Beam`,
      }
    ],
  }
];
