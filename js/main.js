const photos = [];

const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?'
];

const nameы = ['Алексей', 'Мария', 'Дмитрий', 'Екатерина', 'Сергей', 'Анна'];

function getUniqueId(existingIds) {
  let id;
  do {
    id = Math.floor(Math.random() * 1000);
  } while (existingIds.includes(id));
  existingIds.push(id);
  return id;
}

function generateComments() {
  const commentCount = Math.floor(Math.random() * 31);
  const comments = [];
  const existingIds = [];

  for (let j = 0; j < commentCount; j++) {
    const id = getUniqueId(existingIds);
    const message = messages[Math.floor(Math.random() * messages.length)];
    const name = names[Math.floor(Math.random() * names.length)];
    const avatarId = Math.floor(Math.random() * 6) + 1;
    const avatar = `img/avatar-${avatarId}.svg`;

    comments.push({ id, avatar, message, name });
  }
  return comments;
}

for (let i = 1; i <= 25; i++) {
  const photo = {
    id: i,
    url: `photos/${i}.jpg`,
    description: `Описание фотографии ${i}`,
    likes: Math.floor(Math.random() * (200 - 15 + 1)) + 15,
    comments: generateComments()
  };
  photos.push(photo);
}
