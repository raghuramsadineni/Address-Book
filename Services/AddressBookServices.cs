using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Models;
using PetaPoco;

namespace Services
{
    public class AddressBookServices : DbContext, IAddressBookService
    {
        Database db;
        Contact contact;
        public AddressBookServices()
        {
            this.db = new Database("Data Source=localhost\\SQLEXPRESS;Initial Catalog=AddressBook;Integrated Security=True", "System.Data.SqlClient");   
        }

        public void AddContact(Contact contact)
        {
            this.db.Insert(contact);
        }

        public void DeleteContact(Contact contact)
        {
            this.db.Delete(contact);
        }

        public void EditContact(int id, Contact contact)
        {
            this.db.Update(contact);
        }

        public Contact GetContact(int id)
        {

            return db.Fetch<Contact>("select * from [dbo].[Contact] where id=" + id).FirstOrDefault();
        }

        public List<ContactView> GetContactList()
        {
            return db.Fetch<ContactView>("select * from [dbo].[Contact]");
        }
    }
}
