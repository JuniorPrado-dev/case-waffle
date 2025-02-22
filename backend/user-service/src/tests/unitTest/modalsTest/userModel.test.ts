import { User, UserData, UserPayload, userRole } from '../../../models/userModel';

describe.skip('UserRole Enum', () => {
  it('should have the correct values', () => {
    expect(userRole.ADMIN).toBe('admin');
    expect(userRole.USER).toBe('user');
  });
});

describe.skip('User Interface', () => {
  it('should have the correct properties', () => {
    const user: User = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      password: 'password123',
      role: userRole.USER,
    };

    expect(user.name).toBe('John Doe');
    expect(user.email).toBe('john.doe@example.com');
    expect(user.password).toBe('password123');
    expect(user.role).toBe(userRole.USER);
  });
});

describe.skip('UserData Interface', () => {
  it('should have the correct properties', () => {
    const userData: UserData = {
      id: '123',
      name: 'John Doe',
      email: 'john.doe@example.com',
      password: 'password123',
      role: userRole.USER,
    };

    expect(userData.id).toBe('123');
    expect(userData.name).toBe('John Doe');
    expect(userData.email).toBe('john.doe@example.com');
    expect(userData.password).toBe('password123');
    expect(userData.role).toBe(userRole.USER);
  });
});

describe.skip('UserPayload Interface', () => {
  it('should have the correct properties', () => {
    const userPayload: UserPayload = {
      id: '123',
      name: 'John Doe',
      email: 'john.doe@example.com',
      role: userRole.USER,
    };

    expect(userPayload.id).toBe('123');
    expect(userPayload.name).toBe('John Doe');
    expect(userPayload.email).toBe('john.doe@example.com');
    expect(userPayload.role).toBe(userRole.USER);
  });
});