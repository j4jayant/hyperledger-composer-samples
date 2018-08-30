This is an interactive, distributed, Immunization Records demo. 
Create Doctors, Patients and add Immunication/Vaccination Records.

This business network defines:

**Participants:**
`Doctor` `Patient`

**Assets:**
`Vaccination` `VaccinationRecord`

**Transactions:**
`AdministerVaccination` `RefuseVaccination`

The `administerVaccination` function is called when an `AdministerVaccination` transaction is submitted. The logic simply checks for required fields and creates new immunization record in `VaccinationRecord` asset registry with 'COMPLETED' status.

The `refuseVaccination` function is called when an `RefuseVaccination` transaction is submitted. The logic simply checks for required fields and creates new immunization record in `VaccinationRecord` asset registry with 'REFUSED' status.

To test this Business Network Definition in the **Test** tab:

In the `Doctor` participant registry, create a new participant.

```
{
  "$class": "com.j4jayant.immunization.Doctor",
  "degree": "MD",
  "specialty": "pediatric",
  "id": "10001",
  "firstName": "John",
  "lastName": "Smith"
}
```

In the `Patient` participant registry, create a new participants.

```
{
  "$class": "com.j4jayant.immunization.Patient",
  "dateOfBirth": "2010-08-20",
  "sex": "Male",
  "id": "200001",
  "firstName": "Dave",
  "lastName": "Brown"
}
```


In the `Vaccination` asset registry, create a new assets for sample vaccinations.

```

{
  "$class": "com.j4jayant.immunization.Vaccination",
  "id": "CVS_140",
  "name": "Influenza",
  "substanceExpirationDate": "2018-12-31",
  "substanceManufacturer": "CSL Behring"
}
```

```
{
  "$class": "com.j4jayant.immunization.Vaccination",
  "id": "CVS_03",
  "name": "MMR",
  "substanceExpirationDate": "2018-12-31",
  "substanceManufacturer": ""
}
```

```

{
  "$class": "com.j4jayant.immunization.Vaccination",
  "id": "CVX_10",
  "name": "IPV",
  "substanceExpirationDate": "2018-12-31",
  "substanceManufacturer": ""
}
```




As soon as a required assets and participants are created, participants can submit `AdministerVaccination` transactions to create new immunization records with 'COMPLETED' status.

Submit an `AdministerVaccination` transaction, by submitting a transaction and selecting `AdministerVaccination` from the dropdown.

```
{
  {
  "$class": "com.j4jayant.immunization.AdministerVaccination",
  "administrationDate": "2018-08-30",
  "administeredAmount": "0.5",
  "administeredUnit": "mL",
  "administrationRoute": "Intramuscular",
  "administrationSite": "Left Arm",
  "administrationNotes": "New Immunization Record",
  "vaccination": "resource:com.j4jayant.immunization.Vaccination#CVS_140",
  "doctor": "resource:com.j4jayant.immunization.Doctor#100001",
  "patient": "resource:com.j4jayant.immunization.Patient#200001"
}
}
```



To create a refusal record submit a `RefuseVaccination` transaction.

```
{
  "$class": "com.j4jayant.immunization.RefuseVaccination",
  "refusalReason": "Parental Refusal",
  "vaccination": "resource:com.j4jayant.immunization.Vaccination#CVX_10",
  "doctor": "resource:com.j4jayant.immunization.Doctor#100001",
  "patient": "resource:com.j4jayant.immunization.Patient#200001"
}
```


Congratulations, you just created a sample Immunization Records Blockchain!