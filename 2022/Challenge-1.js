const gifts = ["book", "game", "socks"];
const wrapped = wrapping(gifts);

function wrapping(gifts){
  for(gift of gifts){
    if(typeof gift === "string"){
      const paper = "*";
      const sidesNumber = (gift) => gift.length + 2;
      const boxCorner = "\n";
      const wrappingPaper = (gift) => paper.repeat(sidesNumber(gift));
      return (gift) =>`${wrappingPaper(gift)}${boxCorner}${paper}${gift}${paper}${boxCorner}${wrappingPaper(gift)}`;
      }
      return gifts.map((gift) => wrapping(gift));
    }
  // function wrapping(gift) {
  //   const paper = "*";
  //   const sidesNumber = (gift) => gift.length + 2;
  //   const boxCorner = "\n";
  //   const wrappingPaper = (gift) => paper.repeat(sidesNumber(gift));
  //   return (gift) =>
  //     `${wrappingPaper(
  //       gift
  //     )}${boxCorner}${paper}${gift}${paper}${boxCorner}${wrappingPaper(gift)}`;
  // }
  // return gifts.map((gift) => wrapping(gift));

  // const paper = "*";
  // const sidesNumber = (gift) => gift.length + 2;
  // const boxCorner = "\n";
  // const wrappingPaper = (gift) => paper.repeat(sidesNumber(gift));
  // return gifts.map(
  //   (gift) =>
  //     `${wrappingPaper(
  //       gift
  //     )}${boxCorner}${paper}${gift}${paper}${boxCorner}${wrappingPaper(gift)}`
  // );

  // return gifts.map((gift) => typeof gift);

  // function wrapping(gift) {
  //   const paper = "*";
  //   const sides = (gift) => "*".repeat(gift.length + 2);
  //   const corners = ["\n*", "*\n"];

  //   return sides(gift) + corners[0] + gift + corners[1] + sides(gift);
  // }
  // return [...gifts.map((gift) => wrapping(gift))];

  // const newGifts = JSON.parse(JSON.stringify(gifts));
  // return [
  //   ...gifts.map(
  //     (gift) =>
  //       `${"*".repeat(gift.length + 2) + "\n*"}${gift}${
  //         "*\n" + "*".repeat(gift.length + 2)
  //       }`
  //   ),
  // ];

  // return newGifts.map(
  //   (gift) =>
  //     "*".repeat(gift.length + 2) +
  //     "\n*" +
  //     gift +
  //     "*\n" +
  //     "*".repeat(gift.length + 2)
  // );

  // // Solució 1
  // const wrappGiftLeft = (gift) =>
  //   "*".repeat(gift.length + 2) +
  //   "\n*" +
  //   gift +
  //   "*\n" +
  //   "*".repeat(gift.length + 2);
  // return gifts.map((gift) => wrappGift(gift));

  // // Solució 2
  // return gifts.map(
  //   (gift) =>
  //     "*".repeat(gift.length + 2) +
  //     "\n*" +
  //     gift +
  //     "*\n" +
  //     "*".repeat(gift.length + 2)
  // );

  // //Solució 3
  // return gifts.map(
  //   (gift) =>
  //     `${paper.repeat(
  //       sidesNumber(gift)
  //     )}${boxCorner}${paper}${gift}${paper}${boxCorner}${paper.repeat(
  //       sidesNumber(gift)
  //     )}`
  // );
}

console.log(wrapped);
