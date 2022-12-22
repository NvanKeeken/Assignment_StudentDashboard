const mockData=[
    {
      "last_name": "Girkins",
      "email": "rgirkins0@icq.com",
      "phone": "+27 399 115 0912",
      "photo": "https://robohash.org/magnammodisint.png?size=50x50&set=set1"
    },
    {
      "last_name": "Sutherel",
      "email": "ksutherel1@toplist.cz",
      "phone": "+62 374 595 5026",
      "photo": "https://robohash.org/velitcumquesuscipit.png?size=50x50&set=set1"
    },
    {
      "last_name": "Hugnot",
      "email": "jhugnot2@shop-pro.jp",
      "phone": "+84 559 368 6932",
      "photo": "https://robohash.org/suntdoloremquenihil.png?size=50x50&set=set1"
    },
    {
      "last_name": "McLenaghan",
      "email": "vmclenaghan3@statcounter.com",
      "phone": "+62 369 423 7865",
      "photo": "https://robohash.org/sequirerumeos.png?size=50x50&set=set1"
    },
    {
      "last_name": "Newband",
      "email": "knewband4@constantcontact.com",
      "phone": "+86 145 465 2645",
      "photo": "https://robohash.org/fugiatquisquamneque.png?size=50x50&set=set1"
    },
    {
      "last_name": "Peasby",
      "email": "apeasby5@mozilla.com",
      "phone": "+383 109 420 8144",
      "photo": "https://robohash.org/consequaturnihilut.png?size=50x50&set=set1"
    },
    {
      "last_name": "Lathee",
      "email": "dlathee6@amazon.co.jp",
      "phone": "+62 507 728 9787",
      "photo": "https://robohash.org/consequunturutsequi.png?size=50x50&set=set1"
    },
    {
      "last_name": "Greeveson",
      "email": "cgreeveson7@wisc.edu",
      "phone": "+86 423 217 6374",
      "photo": "https://robohash.org/idideum.png?size=50x50&set=set1"
    },
    {
      "last_name": "Besnardeau",
      "email": "fbesnardeau8@unicef.org",
      "phone": "+351 965 938 7488",
      "photo": "https://robohash.org/cupiditateerrorenim.png?size=50x50&set=set1"
    },
    {
      "last_name": "Courtes",
      "email": "acourtes9@mozilla.org",
      "phone": "+7 757 422 1914",
      "photo": "https://robohash.org/voluptasquiarerum.png?size=50x50&set=set1"
    }
  ]
  const getRandomName = (names) => {
    const person = names[Math.floor(Math.random() * names.length)];
    return person;
  };
  
  const ProfileData = getRandomName(mockData)
  export default ProfileData