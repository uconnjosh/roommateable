export default function() {

  this.get('/users', function(db /*, request */) {
    return {
      data: db.properties.map(attrs => (
        {type: 'users', id: attrs.id, attributes: attrs }
      ))
    };
  });

  this.get('/users/:id', function(db, request) {
    let id = request.params.id;

    return {
      data: {
        type: 'users',
        id: id,
        attributes: db.users.find(id)
      }
    };
  });

  this.get('/units', function(db /*, request */) {
    return {
      data: db.units.map(attrs => (
        {type: 'units', id: attrs.id, attributes: attrs }
      ))
    };
  });

  this.get('/units/:id', function(db, request) {
    let id = request.params.id;

    return {
      data: {
        type: 'units',
        id: id,
        attributes: db.units.find(id)
      }
    };
  });

 this.get('/properties', function(db /*, request */) {
    return {
      data: db.properties.map(attrs => (
        {type: 'properties', id: attrs.id, attributes: attrs, 'relationships': {
          'units': attrs.units
        }
      }))
    };
  });

  this.get('/properties/:id', function(db, request) {
    let id = request.params.id;

    return {
      data: {
        type: 'properties',
        id: id,
        attributes: db.properties.find(id),
        relationships: {
          'units': {
            data: [
              {type: 'units', id: 1, attributes: db.units.find(1)},
              {type: 'units', id: 2, attributes: db.units.find(2)},
              {type: 'units', id: 3, attributes: db.units.find(3)},
              {type: 'units', id: 4, attributes: db.units.find(4)},
              {type: 'units', id: 5, attributes: db.units.find(5)}
            ]
          }
        }
      }
    }
  });


  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */
  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Route shorthand cheatsheet
  */
  /*
    GET shorthands

    // Collections
    this.get('/contacts');
    this.get('/contacts', 'users');
    this.get('/contacts', ['contacts', 'addresses']);

    // Single objects
    this.get('/contacts/:id');
    this.get('/contacts/:id', 'user');
    this.get('/contacts/:id', ['contact', 'addresses']);
  */

  /*
    POST shorthands

    this.post('/contacts');
    this.post('/contacts', 'user'); // specify the type of resource to be created
  */

  /*
    PUT shorthands

    this.put('/contacts/:id');
    this.put('/contacts/:id', 'user'); // specify the type of resource to be updated
  */

  /*
    DELETE shorthands

    this.del('/contacts/:id');
    this.del('/contacts/:id', 'user'); // specify the type of resource to be deleted

    // Single object + related resources. Make sure parent resource is first.
    this.del('/contacts/:id', ['contact', 'addresses']);
  */

  /*
    Function fallback. Manipulate data in the db via

      - db.{collection}
      - db.{collection}.find(id)
      - db.{collection}.where(query)
      - db.{collection}.update(target, attrs)
      - db.{collection}.remove(target)

    // Example: return a single object with related models
    this.get('/contacts/:id', function(db, request) {
      var contactId = +request.params.id;

      return {
        contact: db.contacts.find(contactId),
        addresses: db.addresses.where({contact_id: contactId})
      };
    });

  */
}

/*
You can optionally export a config that is only loaded during tests
export function testConfig() {

}
*/
