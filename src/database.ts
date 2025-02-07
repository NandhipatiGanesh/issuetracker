const USER_INFO: Liveblocks["UserMeta"][] = [
  {
    id: "ganesh@advaitlabs.com",
    info: {
      name: "Ganesh",
      color: "#D583F0",
      avatar: "https://thefallen.in/wp-content/uploads/2024/08/63407fbdc2d4ac5270385fd4_home-hero-image-paperfolio-webflow-template.svg",
    },
  },
  {
    id: "preethi@advaitlabs.com",
    info: {
      name: "Preethi",
      color: "#F08385",
      avatar: "https://liveblocks.io/avatars/avatar-2.png",
    },
  },
  {
    id: "tejapudi@advaitlabs.com",
    info: {
      name: "Teja Pudi",
      color: "#F0D885",
      avatar: "https://liveblocks.io/avatars/avatar-3.png",
    },
  },
  {
    id: "Ashok@advaitlabs.com",
    info: {
      name: "Ashok",
      color: "#85EED6",
      avatar: "https://liveblocks.io/avatars/avatar-4.png",
    },
  },
  {
    id: "jody-hekla@example.com",
    info: {
      name: "Jody Hekla",
      color: "#85BBF0",
      avatar: "https://liveblocks.io/avatars/avatar-5.png",
    },
  },
  {
    id: "emil-joyce@example.com",
    info: {
      name: "Emil Joyce",
      color: "#8594F0",
      avatar: "https://liveblocks.io/avatars/avatar-6.png",
    },
  },
  {
    id: "jory-quispe@example.com",
    info: {
      name: "Jory Quispe",
      color: "#85DBF0",
      avatar: "https://liveblocks.io/avatars/avatar-7.png",
    },
  },
  {
    id: "quinn-elton@example.com",
    info: {
      name: "Quinn Elton",
      color: "#87EE85",
      avatar: "https://liveblocks.io/avatars/avatar-8.png",
    },
  },
];

export function getRandomUser() {
  return USER_INFO[Math.floor(Math.random() * 10) % USER_INFO.length];
}

export function getUser(id: string) {
  return USER_INFO.find((u) => u.id === id) || null;
}

export function getUsers() {
  return USER_INFO;
}
