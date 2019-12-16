import { TestBed } from '@angular/core/testing';
import { UsersService } from './users.service';
import { of } from 'rxjs';
import { from } from 'rxjs';

describe('UsersService', () => {

  let usersService: UsersService;
  beforeEach(() => {
    // test bed sets up the service we want to test with UsersService set in providers
    TestBed.configureTestingModule({  
      providers: [UsersService]
    });

  // inject the service into our test suite using get with te service we want to test as argument 
  // set return value to our local variablöe which will allow us to interact with this service within our test
  usersService = TestBed.get(UsersService); 
  });

  it('should be created', () => {
    expect(usersService).toBeTruthy();
  });

  // method which will return a collection of users
  describe('all', () => {
    it('should return a collection of users', () => {
      // userResponse set to a mocked response of our service method
      const userResponse = [
        {
          id: '1',
          name: 'Jane',
          role: 'Designer',
          contract: 'full-time'
        },
        {
          id: '2',
          name: 'Bob',
          role: 'Developer',
          contract: 'full-time'
        }
      ];
      let response;
      //  spy on usersService.all
      // chain .returnValue() to return our mocked userResponse variable wrapping it with of() to return this value as an observable
      spyOn(usersService, 'all').and.returnValue(of(userResponse));

      // call our service method as we would within a component, subscribe to the observable, and set its return value to response
      usersService.all().subscribe(res => {
        response = res;
      });

      // add our expectation that response will be set to the return value of the service call, userResponse
      expect(response).toEqual(userResponse);
    });
  });

  // method for finding a single user that will be used for the user profile pages
  describe('findOne', () => {
  it('should return a single user', () => {
      const userResponse = {
        id: '2',
        name: 'Bob',
        role: 'Developer',
        contract: 'full-time'
      };
      let response;
      spyOn(usersService, 'findOne').and.returnValue(of(userResponse));

      usersService.findOne('2').subscribe(res => {
        response = res;
      });

      expect(response).toEqual(userResponse);
    });
  });

  // method for finding users that are working full-time
  describe('findFullTime', () => {
    it('should return only full-time employees', () => {
      const userResponse = [
        {
          id: '1',
          name: 'Jane',
          role: 'Designer',
          contract: 'full-time'
        },
        {
          id: '2',
          name: 'Bob',
          role: 'Developer',
          contract: 'full-time'
        }
      ];
      let response;
      spyOn(usersService, 'findFullTime').and.returnValue(of(userResponse));

      usersService.findFullTime('full-time').subscribe(res => {
        response = res;
      })

      expect(response).toEqual(userResponse);
    });
  })

});
 

