using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Models;
using Services;

namespace AddressBookBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        private IAddressBookService addressBookService;
        public ValuesController(IAddressBookService addressBook)
        {
            this.addressBookService = addressBook;
        }

        // GET api/values
        [HttpGet]
        public List<ContactView> Get()
        {
            return addressBookService.GetContactList();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public Contact Get(int id)
        {
            return addressBookService.GetContact(id);
        }

        // POST api/values
        [HttpPost]
        public void Post(Contact contact)
        {
            addressBookService.AddContact(contact);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put( Contact contact)
        {
            addressBookService.EditContact(contact.Id, contact);
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(Contact contact)
        {
            addressBookService.DeleteContact(contact);
        }
    }
}
