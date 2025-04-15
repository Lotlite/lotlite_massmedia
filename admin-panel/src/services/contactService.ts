import { Contact } from '../types/contact';

const API_URL = 'http://localhost:5000/api';

export const fetchContacts = async (): Promise<Contact[]> => {
  try {
    const response = await fetch(`${API_URL}/contacts`);
    if (!response.ok) {
      throw new Error('Failed to fetch contacts');
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching contacts:', error);
    throw error;
  }
};

export const deleteContact = async (id: string): Promise<void> => {
  try {
    const response = await fetch(`${API_URL}/contacts/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete contact');
    }
  } catch (error) {
    console.error('Error deleting contact:', error);
    throw error;
  }
};

export const acceptContact = async (id: string): Promise<Contact> => {
  try {
    const response = await fetch(`${API_URL}/contacts/${id}/accept`, {
      method: 'PUT',
    });
    if (!response.ok) {
      throw new Error('Failed to accept contact');
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error accepting contact:', error);
    throw error;
  }
};

export const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleString();
}; 