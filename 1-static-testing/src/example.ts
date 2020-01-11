interface Address {
  houseNumber: number;
  streetName: string;
  city: string;
}

const addresses: Address[] = [
  {
    houseNumber: 2,
    // streetName: "Novosadskog sajma",
    city: "Novi Sad"
  },
  {
    houseNumber: 15,
    streetName: "Kralja Aleksandra",
    city: "Zrenjanin"
  }
];

const filterByStreetName = (
  input: Address[],
  searchTerm: string
): Address[] => {
  console.log("filtering...");
  // what if streetName is undefined?
  return input ? input.filter(a => a.streetName.indexOf(searchTerm) > -1) : [];
};

filterByStreetName(addresses, "Novosad");
