import defaultTo from "lodash/defaultTo";

export const mergeDetails = function($data, details) {
  $data.name = details.name;
  $data.contact.main.mail.value = details.contact.mail;
  $data.contact.main.phone.value = details.contact.phone;
  $data.contact.main.twitter.value = details.contact.twitter;
  $data.tags = details.contact.tags;
  $data.contactDetails = details.contact.details;
  $data.quality = details.contact.quality;
  $data.contactNotes = details.contact.notes;
};

export const extractDetails = function($data) {
  return {
    name: $data.name,
    contact: {
      mail: $data.contact.main.mail.value,
      phone: $data.contact.main.phone.value,
      twitter: $data.contact.main.twitter.value,
      tags: $data.tags,
      details: $data.contactDetails,
      quality: $data.quality,
      notes: defaultTo($data.contactNotes, "")
    }
  };
};

export default {
  cleanToData: mergeDetails,
  dataToClean: extractDetails
};
