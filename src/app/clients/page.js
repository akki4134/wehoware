const clients = [
  {
    name: "Jaan Entertainments",
    description: "Events Management Company",
    logo: "./jaan-logo.webp",
    link: "https://www.jaanentertainments.com/",
  },
  {
    name: "Right Stocks",
    description: "Financial Advice with an A.I",
    logo: "./RSlogo.png",
    link: "https://rightstocks.in/",
  },
  {
    name: "Tenant Bank",
    description: "Property Management Company",
    logo: "./tenentbank_logo.webp",
    link: "https://tenantbank.ca/",
  },
];
const ClientCard = ({ client }) => (
  <div className="border border-gray-200 rounded-lg shadow-md hover:shadow-lg p-4 m-4 transition duration-300 ease-in-out">
    {client.logo ? (
      <img src={client.logo} alt={client.name} className="h-16 w-20 mx-auto" />
    ) : (
      <div className="bg-gray-900 rounded-md">
        <span className="text-lg text-white font-bold ">{client.name}</span>
      </div>
    )}
    <h3 className="text-lg font-semibold text-center mt-2">{client.name}</h3>
    <p className="text-sm text-gray-600 mt-1 text-center">
      {client.description}
    </p>
    <a
      href={client.link}
      className="text-indigo-600 hover:text-indigo-800 transition duration-150 ease-in-out mt-2 block text-center"
    >
      Learn more
    </a>
  </div>
);

const Page = () => {
  return (
    <div className="p-20 min-h-screen md:mr-36">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-10">Our Clients</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {clients.map((client) => (
            <ClientCard key={client.name} client={client} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
