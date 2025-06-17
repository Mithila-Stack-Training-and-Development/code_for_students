import { toContactInDetail, toContactInList } from "../dto/contact.dto.js";
import ContactModel from "../model/contact.model.js";

// Todo: Validate the request body

/**
 * name > string > required > min 4 characters > max 50 characters
 * email > string > required > email format (abhi@mail.com)
 * phone > string > required > min 10 characters > max 15 characters
 * message > string > required > min 10 characters > max 500 characters
 */

export const contactController = {
  getContacts: async (req, res) => {
    try {
      const contacts = await ContactModel.find();

      if (!contacts) {
        return res.status(404).json({
          status: "error",
          message: "Contacts not found",
        });
      }

      return res.status(200).json({
        status: "success",
        message: "Contacts fetched successfully",
        data: contacts.map(toContactInList),
      });
    } catch (error) {
      return res.status(500).json({
        status: "success",
        message: "Internal Server Error",
      });
    }
  },

  getContactById: async (req, res) => {
    try {
      const { id } = req.params;

      const contact = await ContactModel.findById(id);

      if (!contact) {
        return res.status(404).json({
          status: "error",
          message: "Contact not found",
        });
      }

      return res.status(200).json({
        status: "success",
        message: "Contact fetched successfully",
        data: toContactInDetail(contact),
      });
    } catch (error) {
      return res.status(500).json({
        status: "success",
        message: "Internal Server Error",
      });
    }
  },

  createContact: async (req, res) => {
    try {
      const { name, email, phone, message } = req.body;

      const contact = await ContactModel.create({
        name,
        phone,
        email,
        message,
      });

      return res.status(201).json({
        status: "success",
        message: "Contact created successfully",
        data: contact,
      });
    } catch (error) {
      return res.status(500).json({
        status: "success",
        message: "Internal Server Error",
      });
    }
  },
};
