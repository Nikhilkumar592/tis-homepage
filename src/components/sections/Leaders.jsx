import React from 'react';

const leaders = [
  { id: 1, name: "Sakshi Malik", desc: "(First Indian wrestler to win medal in Rio 2016 Olympics)", img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1000&auto=format&fit=crop" },
  { id: 2, name: "Vishesh Bhriguvanshi", desc: "(Indian Basketball Team Captain)", img: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1000&auto=format&fit=crop" },
  { id: 3, name: "Abhishek Verma", desc: "(Asian Games Gold Medalist in Archery 2013)", img: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=1000&auto=format&fit=crop" },
  { id: 4, name: "Aditi Gopichand Swami", desc: "(World Champion in Archery 2024)", img: "https://images.unsplash.com/photo-1588666347306-bc18709a3962?q=80&w=1000&auto=format&fit=crop" },
];

export const Leaders = () => {
  return (
    <section className="w-full py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-6 mb-10 text-center">
        <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-[#b90124] leading-tight mb-4">
          Influential Personalities On Campus
        </h2>
        <p className="font-sans text-xl text-gray-500">Sports Person/Social Media Influencers</p>
      </div>
      
      <div className="flex overflow-x-auto gap-6 px-6 pb-8 no-scrollbar snap-x">
        {leaders.map((leader) => (
          <div key={leader.id} className="snap-center shrink-0 w-[80vw] md:w-[30vw] border-2 border-[#b90124] rounded-3xl overflow-hidden flex flex-col group hover:shadow-2xl transition-all duration-300">
            <div className="w-full h-[250px] overflow-hidden">
              <img 
                src={leader.img} 
                alt={leader.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6 bg-white flex-grow flex flex-col justify-center">
              <h3 className="font-heading font-black text-2xl md:text-3xl text-[#b90124] mb-2">{leader.name}</h3>
              <p className="font-sans text-gray-600 italic">{leader.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
