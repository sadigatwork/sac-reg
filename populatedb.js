#! /usr/bin/env node

console.log(
  'This script populates some test registrants, certificates, universities and registrantinstances to your database. Specified database as argument - e.g.: node populatedb "mongodb+srv://cooluser:coolpassword@cluster0.cojoign.mongodb.net/local_library?retryWrites=true&w=majority&appName=Cluster0"'
);

// Get arguments passed on command line
const userArgs = process.argv.slice(2);

const Registrant = require("./models/registrant");
const Certificate = require("./models/certificate");
const University = require("./models/university");

const universities = [];
const certificates = [];
const registrants = [];

const mongoose = require("mongoose");
// const university = require("./models/university");
// const university = require("./models/university");
mongoose.set("strictQuery", false);

const mongoDB = userArgs[0];

main().catch((err) => console.log(err));

async function main() {
  console.log("Debug: About to connect");
  await mongoose.connect(mongoDB);
  console.log("Debug: Should be connected?");
  await createUniversities();
  await createCertificates();
  //   await createRegistrants();
  console.log("Debug: Closing mongoose");
  mongoose.connection.close();
}

// We pass the index to the ...Create functions so that, for example,
// university[0] will always be the Fantasy university, regardless of the order
// in which the elements of promise.all's argument complete.
async function universityCreate(index, university_name) {
  const university = new University({ university_name: university_name });

  await university.save();
  universities[index] = university;
  console.log(`Added university: ${university_name}`);
}

async function certificateCreate(
  index,
  university,
  collage_name,
  gpa,
  graduate_date
) {
  const certificatedetail = {
    collage_name: collage_name,
    gpa: gpa,
  };
  if (graduate_date != false) certificatedetail.graduate_date = graduate_date;
  if (university != false) certificatedetail.university = university;

  const certificate = new Certificate(certificatedetail);

  await certificate.save();
  certificates[index] = certificate;
  console.log(`Added certificate: ${university} ${collage_name}`);
}

async function registrantCreate(
  index,
  first_name,
  second_name,
  third_name,
  last_name,
  nss_type,
  nss,
  certificate
) {
  const registrantdetail = {
    first_name: first_name,
    second_name: second_name,
    third_name: third_name,
    last_name: last_name,
    nss_type: nss_type,
    nss: nss,
  };
  if (nss_type != false) registrantdetail.nss_type = nss_type;
  if (certificate != false) registrantdetail.certificate = certificate;

  const registrant = new Registrant(registrantdetail);
  await registrant.save();
  registrants[index] = registrant;
  console.log(`Added registrant: ${first_name}`);
}

async function createUniversities() {
  console.log("Adding universities");
  await Promise.all([
    universityCreate(0, "جامعة الخرطوم"),
    universityCreate(1, "جامعة الجزيرة"),
    universityCreate(2, "جامعة كردفان"),
  ]);
}

async function createCertificates() {
  console.log("Adding certificates");
  await Promise.all([
    certificateCreate(0, universities[0], "الزراعة", "4", "2001-04-06"),
    certificateCreate(1, universities[2], "الموارد", "3.5", "2004-04-06"),
    certificateCreate(2, universities[0], "الزراعة", "2.8", "2012-04-06"),
    certificateCreate(3, universities[1], "الزراعة", "3.5", "2000-04-06"),
    certificateCreate(4, universities[2], "الموارد", "2.5", "2010-04-06"),
    certificateCreate(5, universities[2], "الموارد", "2.5", "2011-04-06"),
    certificateCreate(6, universities[1], "الموارد", "2.5", "2015-04-06"),
  ]);
}

async function createRegistrants() {
  console.log("Adding Registrants");
  await Promise.all([
    registrantCreate(0, "محمد", "احمد", "يوسف", "علي", "NSS", "15089741124", [
      certificates[0],
    ]),
    registrantCreate(
      1,
      "مني",
      "خالد",
      "عبد الله",
      "ادم",
      "NSS",
      "15089741125",
      [certificates[1]]
    ),
    registrantCreate(
      2,
      "يقين",
      "الصادق",
      "عبد الله",
      "عثمان",
      "NSS",
      "15089741126",
      [certificates[2]]
    ),
    registrantCreate(3, "مجاهد", "احمد", "علي", "حسين", "NSS", "15089741127", [
      certificates[3],
    ]),
    registrantCreate(4, "وزهور", "عمر", "حرية", "علي", "NSS", "15089741128", [
      certificates[4],
    ]),
    registrantCreate(
      5,
      "صديق",
      "مصطفي",
      "ابوبكر",
      "ادم",
      "NSS",
      "15089741123",
      [certificates[5], certificates[6]]
    ),
  ]);
}

// async function createBookInstances() {
//   console.log("Adding certificates");
//   await Promise.all([
//     registrantInstanceCreate(
//       0,
//       registrants[0],
//       "London Gollancz, 2014.",
//       false,
//       "Available"
//     ),
//     registrantInstanceCreate(
//       1,
//       registrants[1],
//       " Gollancz, 2011.",
//       false,
//       "Loaned"
//     ),
//     registrantInstanceCreate(
//       2,
//       registrants[2],
//       " Gollancz, 2015.",
//       false,
//       false
//     ),
//     registrantInstanceCreate(
//       3,
//       registrants[3],
//       "New York Tom Doherty Associates, 2016.",
//       false,
//       "Available"
//     ),
//     registrantInstanceCreate(
//       4,
//       registrants[3],
//       "New York Tom Doherty Associates, 2016.",
//       false,
//       "Available"
//     ),
//     registrantInstanceCreate(
//       5,
//       registrants[3],
//       "New York Tom Doherty Associates, 2016.",
//       false,
//       "Available"
//     ),
//     registrantInstanceCreate(
//       6,
//       registrants[4],
//       "New York, NY Tom Doherty Associates, LLC, 2015.",
//       false,
//       "Available"
//     ),
//     registrantInstanceCreate(
//       7,
//       registrants[4],
//       "New York, NY Tom Doherty Associates, LLC, 2015.",
//       false,
//       "Maintenance"
//     ),
//     registrantInstanceCreate(
//       8,
//       registrants[4],
//       "New York, NY Tom Doherty Associates, LLC, 2015.",
//       false,
//       "Loaned"
//     ),
//     registrantInstanceCreate(9, registrants[0], "Imprint XXX2", false, false),
//     registrantInstanceCreate(10, registrants[1], "Imprint XXX3", false, false),
//   ]);
// }
