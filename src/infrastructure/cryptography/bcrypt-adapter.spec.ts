import bcrypt from "bcrypt"
import { BcryptAdapter } from "./bcrypt-adapter"
import { Encrypter } from "../../data/protocols/encrypter"

const salt = 12
const makeSut = (): Encrypter => {
  return new BcryptAdapter(salt)
}

jest.mock("bcrypt", () => ({
  async hash (): Promise<string> {
    return new Promise((resolve) => resolve("hash"))
  },
}))

describe("BcryptAdapter", () => {
  test("Should call bcrypt with correct values", async () => {
    const sut = makeSut()
    const hashSpy = jest.spyOn(bcrypt, "hash")
    await sut.encrypt("any_value")
    expect(hashSpy).toHaveBeenCalledWith("any_value", salt)
  })

  test("Should return a hash on success", async () => {
    const sut = makeSut()
    const hash = await sut.encrypt("any_value")
    expect(hash).toBe("hash")
  })
})
