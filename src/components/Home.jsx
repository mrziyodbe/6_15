import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Home({ contacts, setContacts }) {
  const [search, setSearch] = useState("");

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="flex justify-evenly py-8 w-[1200px] mx-auto bg-white shadow-lg rounded-lg">
        <div className="flex items-center">
          <input
            className="px-5 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="search"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <i className="fa fa-magnifying-glass px-2 text-gray-500"></i>
        </div>

        <button className="bg-blue-500 px-5 py-2 text-white text-2xl text-center rounded-xl hover:bg-blue-600 transition duration-300">
          <NavLink to="/create-contact">+</NavLink>
        </button>
      </div>
      <div className="mt-10">
        <table className="mx-auto w-[1200px] bg-white shadow-lg rounded-lg">
          <thead className="bg-gray-200">
            <tr>
              <th className="w-[400px] py-4">Name</th>
              <th className="w-[400px] py-4">Phone</th>
              <th className="py-4">Tools</th>
            </tr>
          </thead>
          <tbody>
            {filteredContacts.length > 0 ? (
              filteredContacts.map((contact) => (
                <tr key={contact.id} className="border-b last:border-none">
                  <td className="py-4 px-6">{contact.name}</td>
                  <td className="py-4 px-6">{contact.phone}</td>
                  <td className="py-4 px-6 flex justify-evenly">
                    <button
                      onClick={() =>
                        setContacts(contacts.filter((c) => c.id !== contact.id))
                      }
                      className="bg-red-500 px-5 py-2 rounded-lg text-white hover:bg-red-600 transition duration-300"
                    >
                      <i className="fa fa-trash"></i>
                    </button>
                    <button className="bg-green-500 px-2 py-2 rounded-lg text-white hover:bg-green-600 transition duration-300">
                      <NavLink
                        className={"px-8"}
                        to={`/edit-contact/${contact.id}`}
                      >
                        <i className="fa fa-pencil"></i>
                      </NavLink>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center py-4 text-gray-500">
                  No contacts found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
