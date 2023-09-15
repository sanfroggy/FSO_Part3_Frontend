import axios from 'axios'

const baseUrl = '/api/persons'

//Creating a function to return all contacts from Node backend.
const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}
//Creating a function to add a new contact to Node backend.
const createContact = newContact => {
    const request = axios.post(baseUrl, newContact)
    return request.then(response => response.data)
}

/*Creating a function to provide an already existing contact
with a new number on JSON Server. 
const updateContact = (contactId, newObject) => {
    const request = axios.put(`${baseUrl}/${contactId}`, newObject)
    return request.then(response => response.data)
} */

//Creating a function to delete a contact from Node backend.
const deleteContact = (contactId) => {

    const request = axios.delete(`${baseUrl}/${contactId}`)
    return request.then(response => response.data)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, createContact, /*updateContact,*/ deleteContact }
