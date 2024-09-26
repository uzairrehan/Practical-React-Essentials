import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import NotFoundPage from "./pages/NotFound";
import RootLayout from "./pages/Root";
import ContactDetailPage, { contactByIdLoader } from "./pages/ContactDetail";
import { ContactNotFoundPage } from "./pages/ContactNotFound";
import ContactsPage, { contactsLoader, createContactAction } from "./pages/Contacts";
import { destroyContactAction } from "./pages/ContactDestroy";
import About from "./pages/About/About";
import Info from "./pages/About/Info";
import Settings from "./pages/About/Settings";

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<RootLayout />} errorElement={<NotFoundPage />}>
      <Route
        index={true}
        element={<Navigate to={"contacts"} replace={true} />}
      />


      <Route path="about" element={<About />}>
        <Route index={true} element={<div>
          <h1 className="text-2xl">This is the About page</h1>
          <p>Click one of the menu items to navigate</p>
        </div>} />
        <Route path="info" element={<Info />} />
        <Route path="settings" element={<Settings />} />
      </Route>

      <Route
        path="contacts"
        action={createContactAction}
        loader={contactsLoader}
        element={<ContactsPage />}
      />

      <Route
        path="contacts/:contactId"
        loader={contactByIdLoader}
        element={<ContactDetailPage />}
        errorElement={<ContactNotFoundPage />}
      />

      <Route action={destroyContactAction} path="contacts/:contactId/destroy" />

    </Route>,
  ),
);

export default appRouter;
