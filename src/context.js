import React, { useContext, useState } from "react";

const ElementsContext = React.createContext();

export const ElementsContextProvider = ({ children }) => {
  const [testimonial, setTestimonial] = useState("");
  const [contact, setContact] = useState("");
  const getElement = (name, elem) => {
    if (name == "contact") setContact(elem);
    if (name == "testimonial") setTestimonial(elem);
  };
  return (
    <ElementsContext.Provider value={{ getElement, contact, testimonial }}>
      {children}
    </ElementsContext.Provider>
  );
};

export const useElementContext = () => {
  return useContext(ElementsContext);
};
