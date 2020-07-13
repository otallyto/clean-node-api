import { SingUpController } from './singup'
import { MissingParamError } from '../errors/missing-param-error'
describe('SingUp Controller', () => {
  test('Shoud retun 400 if no name is provided', () => {
    const sut = new SingUpController()
    const httpRequest = {
      body: {
        // name: 'any_name',
        email: 'any_email@mail.com',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('name'))
  })

  test('Shoud retun 400 if no email is provided', () => {
    const sut = new SingUpController()
    const httpRequest = {
      body: {
        name: 'any_name',
        // email: 'any_email@mail.com',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('email'))
  })
})
