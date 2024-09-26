import { Contact } from "../types";

export const getContacts = async () => {
  const resp = await fetch("http://localhost:3000/contacts");
  const respJson = await resp.json();
  return respJson.contacts as Contact[];
};

export const getContactById = async (uuid: string) => {
  const contacts = await getContacts();
  return contacts.find((item) => {
    return item.login.uuid === uuid;
  });
};

export const createContact = async (contact: Partial<Contact>) => {
  const resp = await fetch("http://localhost:3000/contacts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contact),
  });
  const contactResp = await resp.json();
  return { contact: contactResp.contact };
};

export const deleteContact = async (contactId: string) => {
  const resp = await fetch(`http://localhost:3000/contacts/${contactId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  await resp.json();
  return true;
};
