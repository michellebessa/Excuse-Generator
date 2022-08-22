import "./style.css";

let generateExcuse = () => {
  let pronoun = ["A"];
  let subject = ["hippie", "cat", "goat", "musician", "doctor"];
  let action = ["stole my", "ate my", "burned my", "damaged my"];
  let possession = ["school work", "notebook", "laptop", "research paper"];
  let where = [
    "on the beach",
    "at the grocery store",
    "at the bank",
    "at the bakery"
  ];

  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let subjectIndex = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let possessionIndex = Math.floor(Math.random() * possession.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  return (
    pronoun[pronounIndex] +
    " " +
    subject[subjectIndex] +
    " " +
    action[actionIndex] +
    " " +
    possession[possessionIndex] +
    " " +
    where[whereIndex]
  );
};
document.querySelector("#the-excuse").innerHTML = generateExcuse();
