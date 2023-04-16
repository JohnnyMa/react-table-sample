import React from "react";
import "./App.css";

import Table from "./components/table";
import { TableColumn } from "./components/table/interface";

function App() {
  const users = [
    {
      id: 1,
      name: "Evelyn Zamora",
      phone: "0888 309 7758",
      email: "enim.a@google.edu",
      address: "935-3691 Facilisis, Ave",
      postalZip: "1844",
      region: "Poitou-Charentes",
      country: "United Kingdom",
      list: 13,
      text: "sapien molestie orci tincidunt adipiscing. Mauris molestie pharetra nibh. Aliquam",
      color: "#3fa9e2",
    },
    {
      id: 2,
      name: "Randall Higgins",
      phone: "076 3624 2164",
      email: "nulla.eget@test.edu",
      address: "Ap #204-7074 Eu, Avenue",
      postalZip: "248867",
      region: "North Island",
      country: "Brazil",
      list: 19,
      text: "eget mollis lectus pede et risus. Quisque libero lacus, varius",
      color: "#d33fa9",
    },
    {
      id: 3,
      name: "Olivia Jacobs",
      phone: "0321 616 5132",
      email: "nibh.donec@test.com",
      address: "P.O. Box 393, 9500 Turpis Street",
      postalZip: "12335",
      region: "Leicestershire",
      country: "Spain",
      list: 1,
      text: "id risus quis diam luctus lobortis. Class aptent taciti sociosqu",
      color: "#b2ffed",
    },
    {
      id: 4,
      name: "Colt Lawson",
      phone: "055 6753 2636",
      email: "sagittis.augue@test.edu",
      address: "Ap #632-9301 Duis Avenue",
      postalZip: "2414",
      region: "Nova Scotia",
      country: "Belgium",
      list: 19,
      text: "imperdiet dictum magna. Ut tincidunt orci quis lectus. Nullam suscipit,",
      color: "#6e0ea5",
    },
    {
      id: 5,
      name: "Rafael Miles",
      phone: "076 6155 4138",
      email: "sed.congue@test.net",
      address: "Ap #151-3815 Porttitor Rd.",
      postalZip: "55377-631",
      region: "Luxemburg",
      country: "Chile",
      list: 3,
      text: "sit amet ante. Vivamus non lorem vitae odio sagittis semper.",
      color: "#82ffcd",
    },
    {
      id: 6,
      name: "Arthur Gilbert",
      phone: "07215 901047",
      email: "vehicula.et.rutrum@google.edu",
      address: "122-2992 Phasellus Rd.",
      postalZip: "651837",
      region: "Piemonte",
      country: "Costa Rica",
      list: 15,
      text: "urna. Nullam lobortis quam a felis ullamcorper viverra. Maecenas iaculis",
      color: "#efbf73",
    },
    {
      id: 7,
      name: "Karyn Ashley",
      phone: "(020) 2892 1606",
      email: "curabitur@yahoo.com",
      address: "Ap #865-6444 Eget Avenue",
      postalZip: "577323",
      region: "Balochistan",
      country: "Philippines",
      list: 9,
      text: "varius et, euismod et, commodo at, libero. Morbi accumsan laoreet",
      color: "#d4ffb2",
    },
    {
      id: 8,
      name: "Hilda Hall",
      phone: "07582 128421",
      email: "eu.neque.pellentesque@protonmail.org",
      address: "884-3473 Mauris Ave",
      postalZip: "0462",
      region: "Ancash",
      country: "Colombia",
      list: 9,
      text: "ac nulla. In tincidunt congue turpis. In condimentum. Donec at",
      color: "#651ea8",
    },
    {
      id: 9,
      name: "Daphne Stephenson",
      phone: "076 4675 5715",
      email: "laoreet@yahoo.couk",
      address: "Ap #454-1920 Ac, Ave",
      postalZip: "6396 NN",
      region: "Munster",
      country: "Germany",
      list: 11,
      text: "non sapien molestie orci tincidunt adipiscing. Mauris molestie pharetra nibh.",
      color: "#e1e881",
    },
    {
      id: 10,
      name: "MacKensie Gilbert",
      phone: "(0113) 712 7483",
      email: "faucibus@hotmail.net",
      address: "922-4824 Vestibulum. St.",
      postalZip: "0525",
      region: "Gilgit Baltistan",
      country: "Germany",
      list: 19,
      text: "lacus pede sagittis augue, eu tempor erat neque non quam.",
      color: "#86ef8b",
    },
    {
      id: 11,
      name: "Suki Barry",
      phone: "055 6443 9021",
      email: "et.eros.proin@outlook.com",
      address: "Ap #139-2461 Molestie Ave",
      postalZip: "4649",
      region: "Lakshadweep",
      country: "Pakistan",
      list: 7,
      text: "eu erat semper rutrum. Fusce dolor quam, elementum at, egestas",
      color: "#787ed3",
    },
    {
      id: 12,
      name: "Levi Webb",
      phone: "(01528) 43784",
      email: "etiam.imperdiet.dictum@outlook.couk",
      address: "P.O. Box 945, 934 Amet Rd.",
      postalZip: "746547",
      region: "Pomorskie",
      country: "Brazil",
      list: 3,
      text: "Cras lorem lorem, luctus ut, pellentesque eget, dictum placerat, augue.",
      color: "#d646ab",
    },
    {
      id: 13,
      name: "Amela Mendez",
      phone: "0317 328 4883",
      email: "ac.mattis@protonmail.edu",
      address: "Ap #109-7663 Suscipit, Rd.",
      postalZip: "77341",
      region: "Oost-Vlaanderen",
      country: "Singapore",
      list: 19,
      text: "consectetuer euismod est arcu ac orci. Ut semper pretium neque.",
      color: "#cdf42e",
    },
    {
      id: 14,
      name: "Bo Campbell",
      phone: "(0101) 751 1611",
      email: "libero@outlook.edu",
      address: "Ap #386-8656 Massa Ave",
      postalZip: "6857",
      region: "Lima",
      country: "Brazil",
      list: 3,
      text: "luctus vulputate, nisi sem semper erat, in consectetuer ipsum nunc",
      color: "#09c63f",
    },
    {
      id: 15,
      name: "Rhoda Savage",
      phone: "(0116) 882 5528",
      email: "sagittis.augue@protonmail.net",
      address: "466-8641 In Avenue",
      postalZip: "7658-0717",
      region: "Jeju",
      country: "Indonesia",
      list: 1,
      text: "eget, volutpat ornare, facilisis eget, ipsum. Donec sollicitudin adipiscing ligula.",
      color: "#e8a0ca",
    },
  ];

  const columns: TableColumn[] = [
    { name: "ID", key: "id", sortable: true, width: 40 },
    { name: "Name", key: "name", sortable: true, width: 100 },
    { name: "Phone", key: "phone", sortable: false, width: 100 },
    { name: "Email", key: "email", sortable: true, width: 180 },
    { name: "Address", key: "address", sortable: false, width: 150 },
    { name: "PostalZip", key: "postalZip", sortable: false, width: 80 },
    { name: "Region", key: "region", sortable: true, width: 80 },
    { name: "Country", key: "country", sortable: true, width: 80 },
    // { name: "Description", key: "text", sortable: true,, width: 20 },
    { name: "Color", key: "color", sortable: false, width: 60 },
  ];

  return (
    <div className="App">
      <div className="sample-wrapper">
        <Table
          data={users}
          columns={columns}
          defaultPageSize={10}
          fixedLeftColumns={1}
          fixedRightColumns={1}
        />
      </div>
    </div>
  );
}

export default App;
