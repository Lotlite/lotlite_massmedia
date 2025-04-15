'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Contact } from '../types/contact';
import { fetchContacts, deleteContact, acceptContact } from '../services/contactService';
import ContactTable from '../components/ContactTable';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorDisplay from '../components/ErrorDisplay';

export default function AdminDashboard() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadContacts = async () => {
    try {
      const data = await fetchContacts();
      setContacts(data);
      setLoading(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setLoading(false);
    }
  };

  useEffect(() => {
    loadContacts();
  }, []);

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this contact?')) {
      try {
        await deleteContact(id);
        setContacts(contacts.filter(contact => contact._id !== id));
      } catch (err) {
        alert('Failed to delete contact');
      }
    }
  };

  const handleAccept = async (id: string) => {
    try {
      const updatedContact = await acceptContact(id);
      setContacts(contacts.map(contact => 
        contact._id === id ? updatedContact : contact
      ));
    } catch (err) {
      alert('Failed to accept contact');
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorDisplay message={error} />;
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Contact Submissions</h1>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white shadow overflow-hidden sm:rounded-lg"
      >
        <div className="px-4 py-5 sm:px-6">
          <h2 className="text-lg leading-6 font-medium text-gray-900">Contact Form Submissions</h2>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            List of all contact form submissions from users
          </p>
        </div>
        <div className="border-t border-gray-200">
          <ContactTable 
            contacts={contacts} 
            onDelete={handleDelete}
            onAccept={handleAccept}
          />
        </div>
      </motion.div>
    </div>
  );
} 