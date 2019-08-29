using Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Services
{
    public interface IAddressBookService
    {
        void AddContact(Contact contact);
        List<ContactView> GetContactList();
        Contact GetContact(int id);
        void EditContact(int id, Contact contact);
        void DeleteContact(Contact contact);
    }
}
