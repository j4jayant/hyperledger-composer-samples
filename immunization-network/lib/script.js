/**
 * Administer a vaccination to Patient
 * @param {com.j4jayant.immunization.AdministerVaccination} administerVaccination - the administerVaccination transaction
 * @transaction
 */
async function administerVaccination(administerVaccination) {  // eslint-disable-line no-unused-vars
  
	var id = administerVaccination.patient.id + '_' +  administerVaccination.vaccination.id;
	var factory = getFactory();
    var newVaccinationRecord = factory.newResource('com.j4jayant.immunization', 'VaccinationRecord', id);
    
  console.log('#### patient 1');
  console.log(newVaccinationRecord);
  
    if (newVaccinationRecord.administrationDate === '') {
        throw new Error('Administration Date Not Specified');
    }
    if (newVaccinationRecord.administeredAmount === '') {
        throw new Error('Administered Amount Not Specified');
    }
    if (newVaccinationRecord.administeredUnit === '') {
        throw new Error('Administered Unit Not Specified');
    }
    if (newVaccinationRecord.administrationRoute === '') {
        throw new Error('Administration Route Not Specified');
    }
    if (newVaccinationRecord.administrationSite === '') {
        throw new Error('Administration Site Not Specified');
    }
    
	newVaccinationRecord.administrationDate = administerVaccination.administrationDate;
    newVaccinationRecord.administeredAmount = administerVaccination.administeredAmount;
    newVaccinationRecord.administeredUnit = administerVaccination.administeredUnit;
    newVaccinationRecord.administrationRoute = administerVaccination.administrationRoute;
    newVaccinationRecord.administrationSite = administerVaccination.administrationSite;
    newVaccinationRecord.administrationNotes = administerVaccination.administrationNotes;
	newVaccinationRecord.doctor = administerVaccination.doctor;
    newVaccinationRecord.vaccination = administerVaccination.vaccination;
    newVaccinationRecord.patient = administerVaccination.patient;
  
	newVaccinationRecord.completionStatus = 'COMPLETED';

    newVaccinationRecord.id = id;
  
  console.log('#### patient 1');
  console.log(newVaccinationRecord);
  
    // save the vehicle listing
    const recordRegistry = await getAssetRegistry('com.j4jayant.immunization.VaccinationRecord');
    await recordRegistry.add(newVaccinationRecord);
  
  console.log('#### done');
}

/**
 * RefuseVaccination
 * @param {com.j4jayant.immunization.RefuseVaccination} offer - the offer
 * @transaction
 */
async function refuseVaccination(refuseVaccination) {  // eslint-disable-line no-unused-vars
  
    var id = refuseVaccination.patient.id + '_' +  refuseVaccination.vaccination.id;
	var factory = getFactory();
    var newVaccinationRecord = factory.newResource('com.j4jayant.immunization', 'VaccinationRecord', id);
    
    if (refuseVaccination.refusalReason === '') {
        throw new Error('Refusal Reason Not Specified');
    }
    if (!refuseVaccination.doctor) {
        throw new Error('Doctor Not Specified');
    }
    if (!refuseVaccination.vaccination) {
        throw new Error('Vaccination Not Specified');
    }
    if (!refuseVaccination.patient) {
        throw new Error('Patient Not Specified');
    }
  
	newVaccinationRecord.refusalReason = refuseVaccination.refusalReason;
	newVaccinationRecord.doctor = refuseVaccination.doctor;
    newVaccinationRecord.vaccination = refuseVaccination.vaccination;
    newVaccinationRecord.patient = refuseVaccination.patient;
	newVaccinationRecord.completionStatus = 'REFUSED';
	
    newVaccinationRecord.id = id;

    // save the vehicle listing
    const recordRegistry = await getAssetRegistry('com.j4jayant.immunization.VaccinationRecord');
    await recordRegistry.add(newVaccinationRecord);
}