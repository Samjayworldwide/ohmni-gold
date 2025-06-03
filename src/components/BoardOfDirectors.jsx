import React from "react";

const boardOfDirectorsData = [
  {
    photo:
      "https://i.postimg.cc/3xW0qJVv/Whats-App-Image-2025-05-29-at-14-10-01.jpg",
    name: "Dr Sam Iheanyichukwu Ohuabunwa, OFR",
    role: "Chairman Board of Directors",
  },
  {
    photo:
      "https://i.postimg.cc/j5hj5GBT/Whats-App-Image-2025-05-29-at-14-01-52.jpg",
    name: "Engr. Emeka Dan Nzelu",
    role: "Vice Chairman, Board of Directors",
  },

  {
    photo:
      "https://i.postimg.cc/JhfXZVTB/Whats-App-Image-2025-05-29-at-15-26-28.jpg",
    name: "Mr. Ugochukwu Okoro",
    role: "Chief Executive Officer",
  },
  {
    photo:
      "https://i.postimg.cc/wBz89bGw/Whats-App-Image-2025-06-01-at-09-47-37.jpg",
    name: "Mr. Okenna Onwuzurumba",
    role: "Business Development Manager",
  },
  {
    photo:
      "https://i.postimg.cc/jqZ5rYzQ/Whats-App-Image-2025-05-29-at-14-01-52.jpg",
    name: "Mr. Nnamdi Okoli",
    role: "Head of Operations",
  },
];

const BoardOfDirectors = () => {
  return (
    <div className="bg-[#2c2f73] py-16 px-4 mb-20">
      <h2 className="text-white text-3xl font-bold text-center mb-12 uppercase">
        Board of Directors
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {boardOfDirectorsData.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center text-white"
          >
            <img
              src={member.photo}
              alt={member.name || member.role}
              className="w-40 h-40 object-cover rounded-full mb-4 border-4 border-white shadow-lg"
            />
            {member.name && (
              <p className="font-semibold text-lg">{member.name}</p>
            )}
            <p className="mt-2 text-base">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoardOfDirectors;
