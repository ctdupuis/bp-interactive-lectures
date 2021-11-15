 const {
    formatTitle, 
    shortenBio, 
    convertLength
} = require('./public/utils')

let testData = {
    id: 1,
    firstName: "Patten",
    lastName: "Goforth",
    bio: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    datetime: "2022-03-14 8:00:00",
    title: "nulla ac",
    length: 65,
    floor: 5,
    roomNumber: 3
}

test("Should run", () => expect(2).toBe(2))

test("First name should be Patten", () => {
  expect(testData.firstName).toBe("Patten")
})

describe('formatTitle tests', () => {

  test("formatTitle should return a string", () => {
    let formattedTitle = formatTitle(testData.title);
    expect(typeof formattedTitle).toBe('string');
  })

  test("formatTitle should format title correctly", () => {
    let formattedTitle = formatTitle(testData.title);
    expect(formattedTitle).toBe("Nulla Ac");
  })
})

describe("shortenBio tests", () => {

  test("shortenBio should shorten the bio string", () => {
    let shortBio = shortenBio(testData.bio);
    expect(shortBio.length).toBeLessThan(testData.bio.length);
  })

  test("shortenBio should add periods to the end of the string", () => {
    let shortBio = shortenBio(testData.bio);
    expect(shortBio).toContain('...');
  })
})


describe("convertLength tests", () => {

  test("convertLength should return an array with a length of 2", () => {
    let result = convertLength(testData.length);
    expect(result).toHaveLength(2);
  })

  test("convertLength can handle numbers under 60", () => {
    let result = convertLength(30);
    expect(result[1]).toEqual(30);
  })
})