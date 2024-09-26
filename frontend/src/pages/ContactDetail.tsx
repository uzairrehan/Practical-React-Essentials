import { getContactById } from "../api/contactsApi";
import { Form, Params, useLoaderData } from "react-router-dom";

export const contactByIdLoader = async ({
  params
}: {
  params: Params
}) => {
  const { contactId } = params;
  const contact = await getContactById(contactId!);
  if (!contact) {
    throw new Error("Contact not found.");
  }
  return {
    contact
  }
}

const ContactDetailPage = () => {
  const { contact } = useLoaderData() as Awaited<ReturnType<typeof contactByIdLoader>>;

  return (
    <div className="card card-compact w-96 mx-auto bg-base-100 shadow-xl">
      <div className="card-body items-center text-center">
        <div className={`avatar ${contact.picture ? "" : "placeholder"}`}>
          {contact.picture ? (
            <div className="mask mask-squircle w-12 h-12">
              <img
                src={contact.picture.thumbnail}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          ) : (
            <div className="bg-neutral text-neutral-content rounded-full w-12">
              <span className="uppercase">
                {contact.name.first[0]}
                {contact.name.last[0]}
              </span>
            </div>
          )}
        </div>
        <h2 className="card-title">
          {contact.name.first} {contact.name.last}
        </h2>
        <p>{contact.email}</p>
        <div className="card-actions justify-end">
          <Form method="POST" onSubmit={(event) => {
            const result = confirm('Confirm deletion of this contact.');
            if (!result) {
              event.preventDefault();
            }
          }} action={`/contacts/${contact.login.uuid}/destroy`}>
            <button className="btn btn-outline btn-error btn-sm">
              delete
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ContactDetailPage;
