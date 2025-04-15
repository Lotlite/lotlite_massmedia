export interface Contact {
  _id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  createdAt: string;
  isAccepted: boolean;
}

export interface ContactTableProps {
  contacts: Contact[];
}

export interface ContactRowProps {
  contact: Contact;
} 